import React from 'react';
import { View } from 'react-native';

import { Txt } from '@/components/ui';
import type { VocabEntry } from '@/lib/types';
import { useGloss } from '@/lib/useGloss';

/**
 * A word's meaning, in the learner's gloss language where one exists and in
 * English where it does not.
 *
 * Both lines are shown rather than one: the gloss is what the learner reads,
 * the English is what lets them check it and what keeps the app usable the
 * moment they leave their own language's coverage. Right-to-left glosses get
 * their own writing direction while the English underneath keeps its own.
 */
export function Meaning({ entry }: { entry: VocabEntry }) {
  const { gloss } = useGloss();
  const g = gloss(entry.id);

  if (g == null) {
    return (
      <Txt variant="body" tone="muted">
        {entry.en}
      </Txt>
    );
  }

  return (
    <View style={{ gap: 2 }}>
      {/* The direction orders the text (so an Arabic phrase reads right to
          left and its punctuation lands correctly) while the alignment stays
          with the rest of the card, which is left-aligned. */}
      <Txt
        variant="body"
        style={{ writingDirection: g.rtl ? 'rtl' : 'ltr', textAlign: 'left' }}
      >
        {g.text}
      </Txt>
      <Txt variant="caption" tone="faint">
        {entry.en}
      </Txt>
    </View>
  );
}
