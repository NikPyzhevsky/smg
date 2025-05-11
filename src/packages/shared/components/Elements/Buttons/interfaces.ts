import { type FC } from 'react';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { type SvgProps } from 'react-native-svg';

export interface ButtonProps {
  title: string;
  LeftIcon?: FC<SvgProps>;
  RightIcon?: FC<SvgProps>;
  description?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => unknown;
  style?: StyleProp<ViewStyle>;
  titleStyle?: TextStyle;
}
