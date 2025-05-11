import { forwardRef, useMemo } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { type ITextColors } from '@/packages/shared/theme/theme';
import { type Typography } from '@/packages/shared/utils/font';

export interface TextProps extends RNTextProps {
  color?: ITextColors;
  text?: string;
  variant?: Typography;
}

const stylesheet = createStyleSheet((theme) => ({
  default: (color?: string) => ({
    color: color ?? theme.shared.text.primary,
  }),
}));

const Text = forwardRef<RNText, TextProps>(
  ({ children, color = 'primary', style, text, variant = 'M.Regular', ...props }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    const colorStyle = useMemo(
      () => styles.default(theme.shared.text[color as ITextColors]),
      [color, styles, theme.shared.text]
    );

    return (
      <RNText {...props} ref={ref} style={[colorStyle, theme.shared.textVariant[variant], style]}>
        {text ?? children}
      </RNText>
    );
  }
);

Text.displayName = 'Text';

export default Text;
