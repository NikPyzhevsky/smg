import { memo, useCallback, useEffect, type FC } from 'react';
import { Pressable, type StyleProp, type ViewStyle } from 'react-native';
import {
  FadeIn,
  FadeOut,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';

import { AnimatedText, AnimatedView } from '@/packages/shared/components/Elements/Animated';
import { Primary as PrimaryLoader } from '@/packages/shared/components/Elements/Loaders';
import { useIsMountedRef } from '@/packages/shared/hooks/lifecycle';
import type { IButtonSize, IButtonVariants } from '@/packages/shared/theme/theme';
import type { Typography } from '@/packages/shared/utils/font';
import { triggerHaptic } from '@/packages/shared/utils/haptic';

import { stylesheet } from './styles';

import type { ButtonProps } from './interfaces';

const INPUT_RANGE = [-1, 0, 1];

export interface PrimaryProps extends ButtonProps {
  contentStyle?: StyleProp<ViewStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  pressable?: boolean;
  rightIconStyle?: StyleProp<ViewStyle>;
  size?: IButtonSize;
  style?: StyleProp<ViewStyle>;
  textVariant?: Typography;
  variant?: IButtonVariants;
}

const Primary: FC<PrimaryProps> = ({
  LeftIcon,
  RightIcon,
  contentStyle,
  disabled,
  leftIconStyle,
  loading,
  onPress,
  pressable = true,
  rightIconStyle,
  size = 'm',
  style,
  textVariant = 'M.Regular',
  title,
  titleStyle,
  variant = 'primary',
}) => {
  const { styles, theme } = useStyles(stylesheet);

  const isMountedRef = useIsMountedRef();

  const {
    background,
    border,
    loader: loaderColor,
    title: titleColor,
  } = theme.shared.buttons.main[variant];

  const progress = useSharedValue(disabled ? -1 : 0);

  const sharedBackgroundColor = useDerivedValue(
    () =>
      interpolateColor(progress.value, INPUT_RANGE, [
        background.disabled,
        background.default,
        background.pressed,
      ]),
    [background.default, background.disabled, background.pressed, progress]
  );

  const sharedBorderColor = useDerivedValue(
    () =>
      interpolateColor(progress.value, INPUT_RANGE, [
        border.disabled,
        border.default,
        border.pressed,
      ]),
    [border.default, border.disabled, border.pressed, progress]
  );

  const sharedTitleColor = useDerivedValue(
    () =>
      interpolateColor(progress.value, INPUT_RANGE, [
        titleColor.disabled,
        titleColor.default,
        titleColor.pressed,
      ]),
    [progress, titleColor.default, titleColor.disabled, titleColor.pressed]
  );

  useEffect(() => {
    if (disabled) {
      // eslint-disable-next-line react-compiler/react-compiler
      progress.set(withTiming(-1));
    } else {
      progress.set(withTiming(0));
    }
  }, [disabled, progress]);

  const onPressIn = useCallback(() => {
    progress.set(withTiming(1, { duration: 150 }, () => runOnJS(triggerHaptic)()));
  }, [progress]);

  const onPressOut = useCallback(() => {
    progress.set(withTiming(0, { duration: 150 }));
  }, [progress]);

  const onPressHandler = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  const animatedRootStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: sharedBackgroundColor.value,
      borderColor: sharedBorderColor.value,
    };
  }, [sharedBackgroundColor, sharedBorderColor]);

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      color: sharedTitleColor.value,
    };
  }, [sharedTitleColor]);

  return (
    <Pressable
      disabled={disabled || loading || !pressable}
      style={style}
      onPress={onPressHandler}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <AnimatedView style={[styles.root(size), animatedRootStyle, contentStyle]}>
        {loading ? (
          <AnimatedView key="loading" entering={FadeIn} exiting={FadeOut} style={styles.loader}>
            <PrimaryLoader color={loaderColor} />
          </AnimatedView>
        ) : (
          <AnimatedView
            key={variant}
            entering={isMountedRef.current ? FadeIn : undefined}
            exiting={FadeOut}
            style={styles.content}
          >
            {LeftIcon && <LeftIcon color={titleColor.default} style={leftIconStyle} />}

            <AnimatedText
              style={[styles.title, animatedTitleStyle, titleStyle]}
              variant={textVariant}
            >
              {title}
            </AnimatedText>

            {RightIcon && <RightIcon color={titleColor.default} style={rightIconStyle} />}
          </AnimatedView>
        )}
      </AnimatedView>
    </Pressable>
  );
};

export default memo(Primary);
