import { forwardRef } from 'react';
import {
  type ViewStyle,
  type PressableProps,
  type GestureResponderEvent,
  Pressable,
  type View,
  type StyleProp,
} from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { HAPTIC_TYPE } from '@/packages/shared/constants/haptic';
import { triggerHaptic } from '@/packages/shared/utils/haptic';

import { stylesheet } from './styles';

export interface PressableContainerProps extends PressableProps {
  haptic?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | null;
  pressedOpacity?: number;
  style?: StyleProp<ViewStyle>;
}

const PressableContainer = forwardRef<View, PressableContainerProps>(
  ({ children, haptic = true, onPress, pressedOpacity = 0.8, style, ...props }, ref) => {
    const { styles } = useStyles(stylesheet);

    const handlePress = (e: GestureResponderEvent) => {
      if (haptic) {
        triggerHaptic(HAPTIC_TYPE.RIGID);
      }

      onPress?.(e);
    };

    return (
      <Pressable
        ref={ref}
        style={({ pressed }: { pressed: boolean }) => [
          styles.root({ pressed, pressedOpacity }),
          style,
        ]}
        onPress={handlePress}
        {...props}
      >
        {children}
      </Pressable>
    );
  }
);

PressableContainer.displayName = 'Pressable';

export default PressableContainer;
