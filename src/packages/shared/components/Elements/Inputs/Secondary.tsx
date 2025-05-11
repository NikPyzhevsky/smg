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
import { useStyles } from 'react-native-unistyles';

import { AnimatedPressableContainer } from '@/packages/shared/components/Elements/Animated';
import { combineRef } from '@/packages/shared/utils/combineRef';

import { type InputProps } from './interfaces';
import { stylesheet } from './styles';

export interface PrimaryProps extends InputProps {
  bordered?: boolean;
  clearable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: Ref<RNTextInput>;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const Primary: FC<PrimaryProps> = ({
  autoCapitalize,
  bordered,
  clearable = true,
  containerStyle,
  customAutoFocus,
  inputRef: inputRefProp,
  multiline,
  onBlur,
  onChangeText,
  onFocus,
  placeholderTextColor,
  renderLeftContent,
  renderRightContent,
  style,
  wrapperStyle,
  ...props
}) => {
  const { styles, theme } = useStyles(stylesheet);
  const [focused, setFocused] = useState(customAutoFocus ?? !!props.autoFocus);

  const inputRef = useRef<RNTextInput | null>(null);

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur?.(e);
    setFocused(false);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus?.(e);
    setFocused(true);
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
      <AnimatedPressableContainer style={[styles.secondaryRoot, containerStyle]} onPress={focus}>
        {leftContent}

        <TextInput
          {...props}
          /* eslint-disable-next-line react-compiler/react-compiler */
          ref={combineRef(inputRef, inputRefProp)}
          autoCapitalize={autoCapitalize ?? 'none'}
          cursorColor={theme.shared.input.secondary.cursor}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor}
          selectionColor={theme.shared.input.secondary.cursor}
          textAlign="center"
          textAlignVertical="center"
          style={[
            multiline
              ? styles.multiline
              : [
                  styles.secondaryInput,
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
    </View>
  );
};

export default Primary;
