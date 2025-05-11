import { memo, type FC } from 'react';
import {
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AnimatedView } from '@/packages/shared/components/Elements/Animated';
import Text from '@/packages/shared/components/Elements/Text';

const stylesheet = createStyleSheet((theme) => ({
  cursor: {
    alignSelf: 'center',
    backgroundColor: theme.shared.input.code.cursor,
    height: 30,
    width: 2,
  },
  root: {
    backgroundColor: theme.shared.input.code.background,
    borderColor: theme.shared.input.code.background,
    borderRadius: 12,
    borderWidth: 1,
    height: 62,
    justifyContent: 'center',
    width: 49,
  },
  text: {
    color: theme.shared.input.code.text,
    fontSize: 24,
    textAlign: 'center',
  },
}));

interface ItemProps {
  error: boolean;
  selected: boolean;
  value?: string;
}

const Item: FC<ItemProps> = ({ error, selected, value }) => {
  const { styles, theme } = useStyles(stylesheet);

  const rootAnimatedStyle = useAnimatedStyle(() => {
    const getColor = () => {
      if (error) {
        return theme.shared.input.code.error;
      }

      if (selected) {
        return theme.shared.input.code.selected;
      }

      return theme.shared.input.code.background;
    };

    return {
      backgroundColor: withTiming(
        error ? theme.shared.input.code.error : theme.shared.input.code.background
      ),
      borderColor: withTiming(getColor()),
    };
  }, [
    error,
    selected,
    theme.shared.input.code.background,
    theme.shared.input.code.error,
    theme.shared.input.code.selected,
  ]);

  const cursorAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: selected
        ? withRepeat(
            withSequence(
              withDelay(100, withTiming(1, { duration: 250 })),
              withDelay(400, withTiming(0, { duration: 250 }))
            ),
            -1,
            true
          )
        : 0,
    }),
    [selected]
  );

  return (
    <AnimatedView style={[styles.root, rootAnimatedStyle]}>
      {value && (
        <Text style={styles.text} variant="XL.Medium">
          {value}
        </Text>
      )}

      {!value && selected && <AnimatedView style={[styles.cursor, cursorAnimatedStyle]} />}
    </AnimatedView>
  );
};

export default memo(Item);
