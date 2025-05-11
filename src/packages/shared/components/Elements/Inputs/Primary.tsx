import { type FC, type Ref, useCallback, useEffect, useRef, useState } from 'react';
import {
  type NativeSyntheticEvent,
  type StyleProp,
  type TextInputFocusEventData,
  type ViewStyle,
  type TextInput as RNTextInput,
  TextInput,
  View,
} from 'react-native';
import Animated, {
  FadeInUp,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';

import { AnimatedPressableContainer } from '@/packages/shared/components/Elements/Animated';
import Text from '@/packages/shared/components/Elements/Text';
import { IOS_ANIMATION_EASING } from '@/packages/shared/constants/easing';
import { combineRef } from '@/packages/shared/utils/combineRef';

import { type InputProps } from './interfaces';
import { stylesheet } from './styles';

const colorInputRange = [-1, 0, 1, 2];

export interface PrimaryProps extends InputProps {
  bordered?: boolean;
  clearable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: Ref<RNTextInput>;
  title?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const Primary: FC<PrimaryProps> = ({
  autoCapitalize,
  bordered,
  clearable = true,
  containerStyle,
  customAutoFocus,
  error,
  inputRef: inputRefProp,
  multiline,
  onBlur,
  onChangeText,
  onFocus,
  placeholderTextColor,
  renderLeftContent,
  renderRightContent,
  style,
  title,
  wrapperStyle,
  ...props
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const [focused, setFocused] = useState(customAutoFocus ?? !!props.autoFocus);

  const inputRef = useRef<RNTextInput | null>(null);
  const focusProcess = useSharedValue(0);
  const borderColorProcess = useDerivedValue(() => {
    if (error) {
      return focusProcess.value > 0 ? 2 : -1;
    }

    return focusProcess.value;
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    const { background, border } = theme.shared.input.primary;

    const borderColor = interpolateColor(borderColorProcess.value, colorInputRange, [
      border.error,
      bordered ? border.default.bordered : border.default.base,
      border.active,
      border.error,
    ]);

    const backgroundColor = interpolateColor(borderColorProcess.value, colorInputRange, [
      background.error,
      background.default,
      background.active,
      background.error,
    ]);

    return {
      backgroundColor,
      borderColor,
    };
  }, [borderColorProcess.value, bordered, theme.shared.input.primary]);

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur?.(e);
    setFocused(false);
    focusProcess.set(error ? 0 : withTiming(0, { duration: 1200, easing: IOS_ANIMATION_EASING }));
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus?.(e);
    setFocused(true);

    focusProcess.set(error ? 1 : withTiming(1, { duration: 1200, easing: IOS_ANIMATION_EASING }));
  };

  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (inputRef?.current && customAutoFocus) {
      setTimeout(() => inputRef?.current?.focus(), 700);
    }
  }, [customAutoFocus]);

  const leftContent = renderLeftContent?.();
  const rightContent = renderRightContent?.();

  return (
    <View style={wrapperStyle}>
      {!!title && <Text variant="M.Medium">{title}</Text>}
      <AnimatedPressableContainer
        style={[
          styles.container,
          multiline && styles.containerMultiline,
          animatedContainerStyle,
          containerStyle,
        ]}
        onPress={focus}
      >
        {leftContent}

        <TextInput
          {...props}
          /* eslint-disable-next-line react-compiler/react-compiler */
          ref={combineRef(inputRef, inputRefProp)}
          autoCapitalize={autoCapitalize ?? 'none'}
          cursorColor={theme.shared.input.primary.cursor}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor || theme.shared.input.primary.placeholder}
          selectionColor={theme.shared.input.primary.cursor}
          textAlignVertical="center"
          style={[
            multiline
              ? styles.multiline
              : [
                  styles.input,
                  !leftContent && styles.paddingLeft,
                  !rightContent && !(focused || clearable) && styles.paddingRight,
                ],
            style,
          ]}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          onFocus={handleFocus}
        />

        <View style={[styles.rightContent, multiline && styles.rightContentMultiline]}>
          {rightContent}
        </View>
      </AnimatedPressableContainer>

      {!!error && (
        <Animated.Text
          key={error}
          entering={FadeInUp}
          style={[styles.error, theme.shared.textVariant['CL.Medium']]}
        >
          {error}
        </Animated.Text>
      )}
    </View>
  );
};

export default Primary;
