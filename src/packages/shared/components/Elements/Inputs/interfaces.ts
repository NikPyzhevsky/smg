import { type ReactNode } from 'react';
import { type TextInputProps, type TextStyle } from 'react-native';

export interface InputProps extends TextInputProps {
  customAutoFocus?: boolean;
  error?: string;
  renderLeftContent?: () => ReactNode;
  renderRightContent?: () => ReactNode;
  secured?: boolean;
  securedColor?: string;
  title?: string;
}

export interface ClearableInputProps extends InputProps {
  onClearPress: () => void;
}

export interface TextAreaProps extends TextInputProps {
  onChangeText: (value: string) => unknown;
  value: string;
  customAutoFocus?: boolean;
  placeholder?: string;
  style?: TextStyle | TextStyle[];
}
