import { Stack, useRouter, useSegments } from 'expo-router';
import Head from 'expo-router/head';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { registerServiceWorker } from '@/lib/durability';
import { hideSplash } from '@/lib/splash';
import { stopSpeaking } from '@/lib/speech';
import { useAppReady } from '@/components/Loading';
import { ProgressProvider, useProgress } from '@/store/ProgressProvider';
import { SettingsProvider, useSettings } from '@/store/SettingsProvider';
import { ThemeProvider, useTheme } from '@/theme/ThemeProvider';

function Navigator() {
  const { colors, dark } = useTheme();
  const ready = useAppReady();
  const { settings, update } = useSettings();
  const { progress } = useProgress();
  const router = useRouter();
  const segments = useSegments();

  // Hold the splash until stored settings and progress have loaded, so the
  // first frame the user sees is their real state rather than an empty shell.
  useEffect(() => {
    if (ready) hideSplash();
  }, [ready]);

  // Safety net. The splash is a fixed, full-screen overlay, so anything that
  // stops `ready` ever arriving - a deep link to a route that does not exist,
  // a storage read that never settles - would leave the user staring at a logo
  // with the real page unreachable underneath it. After four seconds the app
  // has either booted or is not going to, and either way the overlay has to go.
  useEffect(() => {
    const id = setTimeout(hideSplash, 4000);
    return () => clearTimeout(id);
  }, []);

  // Leaving a listening screen must silence the voice; navigation alone does
  // not, because speech synthesis outlives the component that started it.
  useEffect(() => {
    stopSpeaking();
  }, [segments]);

  // Send first-time visitors to the intro, whichever route they arrived on.
  // Waiting for `ready` matters: before storage loads everyone looks new.
  useEffect(() => {
    if (!ready) return;
    if (settings.onboarded) return;

    // Anyone who already has progress installed the app before the intro
    // existed. Prior work is proof they are not a first-time visitor.
    if (progress.xp > 0 || Object.keys(progress.cards).length > 0) {
      update({ onboarded: true });
      return;
    }

    if (segments[0] === 'onboarding') return;
    router.replace('/onboarding');
  }, [ready, settings.onboarded, progress.xp, progress.cards, segments, router, update]);

  return (
    <>
      {/* expo-router renders a helmet-managed <title> into the head; without a
          value here it emits an empty one and the tab shows nothing. */}
      <Head>
        <title>B1-Trainer</title>
        <meta
          name="description"
          content="Practise German B1: vocabulary, grammar, Lesen, Hören, Schreiben and Sprechen."
        />
      </Head>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bg },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
        <Stack.Screen name="study" />
        <Stack.Screen name="drill" />
        <Stack.Screen name="grammar" />
        <Stack.Screen name="reading" />
        <Stack.Screen name="listening" />
        <Stack.Screen name="writing" />
        <Stack.Screen name="speaking" />
        <Stack.Screen name="exam-session" />
        <Stack.Screen name="plan" />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SettingsProvider>
          <ProgressProvider>
            <ThemeProvider>
              <Navigator />
            </ThemeProvider>
          </ProgressProvider>
        </SettingsProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
