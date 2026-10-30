import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LoadingScreen, useAppReady } from '@/components/Loading';
import { MascotSays } from '@/components/Mascot';
import { Card, Chip, Divider, ProgressBar, Screen, Txt } from '@/components/ui';
import { getGrammar, getTheme, levels, unitsFor, vocabIn } from '@/lib/study';
import type { CanDo, Unit } from '@/lib/types';
import { useT } from '@/lib/useT';
import { useProgress } from '@/store/ProgressProvider';
import { useSettings } from '@/store/SettingsProvider';
import { useTheme } from '@/theme/ThemeProvider';

/**
 * The course: the units of the current level, in order, each with the goals it
 * exists to deliver.
 *
 * This screen answers a question the rest of the app cannot. A readiness
 * percentage says how much of a catalogue you have touched; it cannot say what
 * you are now able to do, and "what will I be able to do" is the only question
 * a learner actually starts with. So the unit leads with its can-do statements
 * and the material is listed underneath, which is the opposite of how the app's
 * other screens are built and deliberately so.
 *
 * Ticking a can-do records a claim. It is not marked, not scored and worth no
 * XP, because the moment a goal pays out it becomes worth ticking dishonestly
 * and stops describing anything.
 */
export default function CourseScreen() {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { settings, update } = useSettings();
  const { progress, toggleCanDo } = useProgress();

  const level = settings.level;
  const info = levels.find((l) => l.key === level);
  const units = useMemo(() => unitsFor(level), [level]);
  const [open, setOpen] = useState<string | null>(null);
  // The level is 'B1' until stored settings load, so an initial state captured
  // from `units` would hold a B1 unit key while A1 units are on screen and
  // nothing would be expanded. Resolve it on every render instead.
  const expanded = units.some((u) => u.key === open) ? open : (units[0]?.key ?? null);

  const allCanDos = units.flatMap((u) => u.canDos);
  const ticked = allCanDos.filter((c) => progress.canDos[c.id]).length;

  const appReady = useAppReady();
  if (!appReady) return <LoadingScreen />;

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + space.md,
          paddingHorizontal: space.lg,
          paddingBottom: space.xxxl,
          gap: space.lg,
          maxWidth: 680,
          width: '100%',
          alignSelf: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
          <Pressable
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel={t('backHome')}
            hitSlop={12}
          >
            <Ionicons name="chevron-back" size={28} color={colors.textFaint} />
          </Pressable>
          <Txt variant="title" style={{ flex: 1 }}>
            {t('courseTitle')}
          </Txt>
        </View>

        {/* Which level this course is for, switchable in place. */}
        <Card level={2} style={{ gap: space.md }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }}>
            {levels.map((l) => (
              <Chip
                key={l.key}
                label={l.key}
                active={level === l.key}
                onPress={() => {
                  update({ level: l.key });
                  setOpen(null);
                }}
              />
            ))}
          </View>
          {info ? (
            <>
              <Txt variant="bodyStrong">{info.name[locale]}</Txt>
              <Txt variant="small" tone="muted">
                {info.summary[locale]}
              </Txt>
              <Txt variant="caption" tone="faint">
                {vocabIn({ level, includeLower: true }).length} / ~{info.targetWords}{' '}
                {t('targetWords')}
              </Txt>
            </>
          ) : null}
        </Card>

        {units.length === 0 ? (
          <MascotSays mood="thinking" size={84}>
            <Txt variant="bodyStrong">{t('noMaterialYet')}</Txt>
            <Txt variant="small" tone="muted">
              {t('noMaterialYetSub')}
            </Txt>
          </MascotSays>
        ) : (
          <>
            <Card style={{ gap: space.sm }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Txt variant="small">{t('goalsTitle')}</Txt>
                <Txt variant="caption" tone="faint">
                  {ticked}/{allCanDos.length} {t('goalsTicked')}
                </Txt>
              </View>
              <ProgressBar
                value={allCanDos.length === 0 ? 0 : ticked / allCanDos.length}
                color={info?.color}
                height={10}
              />
              <Txt variant="caption" tone="faint">
                {t('canDoHint')}
              </Txt>
            </Card>

            {units.map((unit) => (
              <UnitCard
                key={unit.key}
                unit={unit}
                expanded={expanded === unit.key}
                onToggle={() => setOpen(expanded === unit.key ? '' : unit.key)}
                onTick={toggleCanDo}
                done={progress.canDos}
                color={info?.color ?? colors.info}
              />
            ))}
          </>
        )}
      </ScrollView>
    </Screen>
  );
}

function UnitCard({
  unit,
  expanded,
  onToggle,
  onTick,
  done,
  color,
}: {
  unit: Unit;
  expanded: boolean;
  onToggle: () => void;
  onTick: (id: string) => void;
  done: Record<string, boolean>;
  color: string;
}) {
  const { colors, space, radius } = useTheme();
  const { t, locale } = useT();
  const router = useRouter();

  const ticked = unit.canDos.filter((c) => done[c.id]).length;

  return (
    <Card style={{ gap: space.md }}>
      <Pressable
        onPress={onToggle}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        accessibilityLabel={`${t('unitLabel')} ${unit.n}: ${unit.title[locale]}`}
        style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: radius.md,
            backgroundColor: ticked === unit.canDos.length ? color : `${color}22`,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {ticked === unit.canDos.length ? (
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          ) : (
            <Txt variant="heading" style={{ color }}>
              {unit.n}
            </Txt>
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Txt variant="bodyStrong">
            {unit.icon} {unit.title[locale]}
          </Txt>
          <Txt variant="caption" tone="faint">
            {ticked}/{unit.canDos.length} {t('goalsTicked')}
          </Txt>
        </View>
        <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color={colors.textFaint} />
      </Pressable>

      {expanded ? (
        <>
          <Txt variant="small" tone="muted">
            {unit.blurb[locale]}
          </Txt>

          <Divider />
          <Txt variant="overline" tone="faint">
            {t('goalsTitle').toUpperCase()}
          </Txt>
          {unit.canDos.map((c) => (
            <CanDoRow key={c.id} canDo={c} done={!!done[c.id]} onTick={() => onTick(c.id)} color={color} />
          ))}

          <Divider />
          <Txt variant="overline" tone="faint">
            {t('unitMaterial').toUpperCase()}
          </Txt>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: space.sm }}>
            {unit.themes.map((key) => {
              const theme = getTheme(key);
              if (!theme) return null;
              return (
                <Chip
                  key={key}
                  label={`${theme.icon} ${theme.label[locale]}`}
                  onPress={() => router.push(`/study?theme=${key}`)}
                />
              );
            })}
            {unit.grammar.map((key) => {
              const topic = getGrammar(key);
              if (!topic) return null;
              return (
                <Chip
                  key={key}
                  label={`${topic.icon} ${topic.title[locale]}`}
                  onPress={() => router.push(`/grammar?topic=${key}`)}
                />
              );
            })}
            {unit.tasks.map((id) => (
              <Chip key={id} label={taskLabel(id, t('unitTasks'))} onPress={() => openTask(router, id)} />
            ))}
          </View>
        </>
      ) : null}
    </Card>
  );
}

function CanDoRow({
  canDo,
  done,
  onTick,
  color,
}: {
  canDo: CanDo;
  done: boolean;
  onTick: () => void;
  color: string;
}) {
  const { colors, space } = useTheme();
  const { locale } = useT();
  return (
    <Pressable
      onPress={onTick}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: done }}
      accessibilityLabel={canDo.text[locale]}
      style={{ flexDirection: 'row', alignItems: 'flex-start', gap: space.sm, paddingVertical: 4 }}
    >
      <Ionicons
        name={done ? 'checkbox' : 'square-outline'}
        size={22}
        color={done ? color : colors.textFaint}
        style={{ marginTop: 1 }}
      />
      <Txt variant="small" tone={done ? 'default' : 'muted'} style={{ flex: 1 }}>
        {canDo.text[locale]}
      </Txt>
    </Pressable>
  );
}

/** Task ids carry their module in the first character, e.g. "l3a" is Lesen. */
function taskLabel(id: string, fallback: string): string {
  const icon = { l: '\u{1F4D6}', h: '\u{1F442}', w: '✍️', s: '\u{1F5E3}️' }[id[0]];
  return icon ? `${icon} ${id.toUpperCase()}` : `${fallback} ${id}`;
}

function openTask(router: ReturnType<typeof useRouter>, id: string) {
  const route = { l: '/reading', h: '/listening', w: '/writing', s: '/speaking' }[id[0]];
  if (route) router.push(`${route}?task=${id}` as never);
}
