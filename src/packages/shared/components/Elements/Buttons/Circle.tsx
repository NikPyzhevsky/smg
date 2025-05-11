import { memo, useMemo, type FC } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { type SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { type SvgProps } from 'react-native-svg';
import { useStyles } from 'react-native-unistyles';

import { AnimatedPressableContainer } from '@/packages/shared/components/Elements/Animated';

import { stylesheet } from './styles';

export type CircleButtonVariant = 'brand' | 'default';

interface CircleProps {
  Icon: FC<SvgProps>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  variant?: CircleButtonVariant | SharedValue<CircleButtonVariant>;
}

const Circle: FC<CircleProps> = ({ Icon, onPress, style, variant = 'default' }) => {
  const { styles, theme } = useStyles(stylesheet);

  const color = useMemo(() => {
    const variantValue = typeof variant === 'string' ? variant : variant.value;

    return theme.shared.buttons.circle.icon[variantValue];
  }, [theme.shared.buttons.circle.icon, variant]);

  const rootAnimatedStyle = useAnimatedStyle(() => {
    const variantValue = typeof variant === 'string' ? variant : variant.value;

    return {
      backgroundColor: withTiming(theme.shared.buttons.circle.background[variantValue]),
    };
  }, [theme.shared.buttons.circle.background, variant]);

  return (
    <AnimatedPressableContainer
      hitSlop={16}
      style={[styles.circleRoot, rootAnimatedStyle, style]}
      onPress={onPress}
    >
      <Icon color={color} height={16} width={16} />
    </AnimatedPressableContainer>
  );
};

export default memo(Circle);
