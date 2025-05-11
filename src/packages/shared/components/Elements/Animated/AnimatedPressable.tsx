import { forwardRef } from 'react';
import {
  Pressable,
  type View,
  type GestureResponderEvent,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Animated, {
  type AnimatedProps,
  type AnimatedStyle,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { HAPTIC_TYPE } from '@/packages/shared/constants/haptic';
import { triggerHaptic } from '@/packages/shared/utils/haptic';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const pressableInputRange = [0, 1];

export interface AnimatedPressableContainerProps
  extends Omit<AnimatedProps<PressableProps>, 'key'> {
  haptic?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
  onPressIn?: ((event: GestureResponderEvent) => void) | null;
  onPressOut?: ((event: GestureResponderEvent) => void) | null;
  pressedOpacity?: number;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
}

const AnimatedPressableContainer = forwardRef<View, AnimatedPressableContainerProps>(
  (
    {
      children,
      haptic = true,
      onPress,
      onPressIn,
      onPressOut,
      pressedOpacity = 0.8,
      style,
      ...props
    },
    ref
  ) => {
    const pressedSharedValue = useSharedValue(0);

    const handlePress = (e: GestureResponderEvent) => {
      if (haptic) {
        triggerHaptic(HAPTIC_TYPE.RIGID);
      }

      onPress?.(e);
    };

    const handlePressIn = (e: GestureResponderEvent) => {
      pressedSharedValue.set(1);

      onPressIn?.(e);
    };

    const handlePressOut = (e: GestureResponderEvent) => {
      pressedSharedValue.set(0);

      onPressOut?.(e);
    };

    const pressedAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(pressedSharedValue.value, pressableInputRange, [1, pressedOpacity]),
      };
    }, [pressedOpacity, pressedSharedValue]);

    return (
      <AnimatedPressable
        ref={ref}
        style={[pressedAnimatedStyle, style]}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...props}
      >
        {children}
      </AnimatedPressable>
    );
  }
);

AnimatedPressableContainer.displayName = 'AnimatedPressableContainer';

export default AnimatedPressableContainer;
