import { getColorAlpha } from '@/packages/shared/utils/colorAlpha';
import { FONT_VARIANTS } from '@/packages/shared/utils/font';

import colors from './colors';

const theme = {
  buttons: {
    circle: {
      background: {
        brand: colors.primary_500,
        default: colors.basic_100,
      },
      icon: {
        brand: colors.white,
        default: colors.basic_1000,
      },
    },
    floating: {
      primary: colors.white,
    },
    main: {
      destructive: {
        background: {
          default: colors.warning_400,
          disabled: getColorAlpha(colors.warning_500, 0.08),
          pressed: colors.warning_500,
        },
        border: {
          default: colors.warning_400,
          disabled: getColorAlpha(colors.warning_500, 0.08),
          pressed: colors.warning_500,
        },
        loader: colors.basic_100,
        title: {
          default: colors.white,
          disabled: getColorAlpha(colors.warning_500, 0.24),
          pressed: colors.white,
        },
      },
      primary: {
        background: {
          default: colors.primary_600,
          disabled: colors.basic_opacity_8,
          pressed: colors.primary_400,
        },
        border: {
          default: colors.primary_600,
          disabled: colors.basic_opacity_8,
          pressed: colors.primary_400,
        },
        loader: colors.white,
        title: {
          default: colors.white,
          disabled: colors.basic_opacity_24,
          pressed: colors.white,
        },
      },
      secondary: {
        background: {
          default: colors.neutral_500,
          disabled: colors.basic_opacity_8,
          pressed: colors.neutral_300,
        },
        border: {
          default: colors.neutral_500,
          disabled: colors.basic_opacity_8,
          pressed: colors.neutral_300,
        },
        loader: colors.basic_1000,
        title: {
          default: colors.basic_1000,
          disabled: colors.basic_opacity_24,
          pressed: colors.basic_1000,
        },
      },
    },
    text: {
      title: {
        brand: colors.basic_1000,
      },
    },
  },
  icon: {
    brand: colors.primary_500,
    invalid: colors.basic_300,
    valid: colors.primary_400,
  },
  input: {
    code: {
      background: colors.basic_300,
      cursor: colors.warning_500,
      error: getColorAlpha(colors.warning_500, 0.08),
      selected: colors.primary_500,
      text: colors.basic_1000,
    },
    primary: {
      background: {
        active: colors.basic_300,
        default: colors.basic_300,
        error: getColorAlpha(colors.warning_500, 0.08),
      },
      border: {
        active: colors.primary_500,
        default: {
          base: colors.basic_400,
          bordered: colors.basic_300,
        },
        error: getColorAlpha(colors.warning_500, 0.24),
      },
      cursor: colors.basic_1000,
      error: colors.additional_red,
      placeholder: colors.basic_500,
      text: colors.basic_1000,
    },
    secondary: {
      cursor: colors.warning_500,
      text: colors.basic_1000,
    },
  },
  loaders: {
    brand: colors.basic_100,
  },
  text: {
    description: colors.basic_700,
    inactive: colors.basic_700,
    primary: colors.black,
  },
  textVariant: FONT_VARIANTS,
  toast: {
    background: {
      error: getColorAlpha(colors.warning_500, 0.08),
      info: getColorAlpha(colors.info_600, 0.08),
      success: getColorAlpha(colors.success_600, 0.08),
    },
    icon: { error: colors.warning_600, info: colors.info_600, success: colors.success_600 },
    text: { error: colors.warning_600, info: colors.info_600, success: colors.success_600 },
  },
};

type ITheme = typeof theme;

export type ITextColors = keyof ITheme['text'];
export type IButtonVariants = keyof ITheme['buttons']['main'];
export type IButtonSize = 'l' | 'm' | 's';

export default theme;
