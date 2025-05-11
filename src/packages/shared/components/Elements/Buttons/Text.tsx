import { memo, type FC } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { type SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';

import {
  AnimatedPressableContainer,
  AnimatedText,
} from '@/packages/shared/components/Elements/Animated';

export type TextButtonVariant = 'brand';

interface CircleProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: TextButtonVariant | SharedValue<TextButtonVariant>;
}

const TextButton: FC<CircleProps> = ({ onPress, style, title, variant = 'brand' }) => {
  const { theme } = useStyles();

  const textStyle = useAnimatedStyle(() => {
    const variantValue = typeof variant === 'string' ? variant : variant.value;

    return {
      color: withTiming(theme.shared.buttons.text.title[variantValue]),
    };
  });

  return (
    <AnimatedPressableContainer hitSlop={16} style={style} onPress={onPress}>
      <AnimatedText style={textStyle}>{title}</AnimatedText>
    </AnimatedPressableContainer>
  );
};

export default memo(TextButton);
