import { createStyleSheet } from 'react-native-unistyles';

import { IButtonSize } from '@/packages/shared/theme/theme';

export const BUTTON_HEIGHT: Record<IButtonSize, number> = {
  l: 56,
  m: 44,
  s: 38,
};

export const stylesheet = createStyleSheet((theme, { insets }) => ({
  circleRoot: {
    alignItems: 'center',
    borderRadius: 99,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    gap: 6,
    justifyContent: 'center',
  },
  floatRoot: {
    bottom: 0,
    left: 0,
    paddingBottom: insets.bottom + 16,
    paddingHorizontal: 20,
    paddingTop: 35,
    position: 'absolute',
    right: 0,
  },
  loader: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
  },
  root: (size: IButtonSize) => {
    return {
      alignItems: 'center',
      borderRadius: 72,
      borderWidth: 1,
      columnGap: 20,
      flexDirection: 'row',
      height: BUTTON_HEIGHT[size],
      justifyContent: 'center',
      paddingHorizontal: 20,
      width: '100%',
    };
  },
  svg: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    textAlign: 'center',
  },
}));
