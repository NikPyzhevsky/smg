import { type FC, useMemo } from 'react';
import { type TextProps as RNTextProps } from 'react-native';
import Animated, { type AnimatedProps } from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { type ITextColors } from '@/packages/shared/theme/theme';
import { type Typography } from '@/packages/shared/utils/font';

export interface TextProps extends AnimatedProps<RNTextProps> {
  color?: ITextColors;
  variant?: Typography;
}

const stylesheet = createStyleSheet((theme) => ({
  default: (color?: string) => ({
    color: color ?? theme.shared.text.primary,
  }),
}));

const Text: FC<TextProps> = ({
  children,
  color = 'primary',
  style,
  variant = 'M.Regular',
  ...props
}) => {
  const { styles, theme } = useStyles(stylesheet);

  const colorStyle = useMemo(
    () => styles.default(theme.shared.text[color as ITextColors]),
    [color, styles, theme.shared.text]
  );

  return (
    <Animated.Text {...props} style={[colorStyle, theme.shared.textVariant[variant], style]}>
      {children}
    </Animated.Text>
  );
};

Text.displayName = 'Text';

export default Text;
