import { Platform, type TextStyle } from 'react-native';

export type Typography =
  | 'XXL'
  | 'XL'
  | 'L'
  | 'M'
  | 'S'
  | 'XS'
  | 'XL.Medium'
  | 'L.Medium'
  | 'L.Regular'
  | 'M.Medium'
  | 'M.Regular'
  | 'M.Semibold'
  | 'S.Semibold'
  | 'S.Medium'
  | 'S.Regular'
  | 'CL.Regular'
  | 'CL.Medium';

export type FontWeight = '400' | '500' | '600';
type FontFamily = 'DMSans' | 'Quincy';

const sourceSansFont = Platform.OS === 'ios' ? 'DM Sans' : 'DMSans';
const sourceQuincy = Platform.OS === 'ios' ? 'Quincy CF' : 'QuincyCF';

export const getFontStyleByWeight = (
  fontWeight: FontWeight,
  family: FontFamily,
  fontSize?: number,
  lineHeight?: number,
  fontStyle?: TextStyle['fontStyle']
) => {
  let fontFamily = family === 'Quincy' ? sourceQuincy : sourceSansFont;

  if (Platform.OS === 'android') {
    if (fontWeight === '400') {
      fontFamily += '-Regular';
    }
    if (fontWeight === '500') {
      fontFamily += '-Medium';
    }
    if (fontWeight === '600') {
      fontFamily += '-SemiBold';
    }
  }

  return {
    fontFamily,
    fontSize,
    fontStyle: Platform.OS === 'android' ? undefined : fontStyle,
    fontWeight,
    lineHeight,
  };
};

export const FONT_VARIANTS = {
  'CL.Medium': getFontStyleByWeight('500', 'DMSans', 12, 18),
  'CL.Regular': getFontStyleByWeight('400', 'DMSans', 12, 18),
  L: getFontStyleByWeight('400', 'Quincy', 26, 40),
  'L.Medium': getFontStyleByWeight('500', 'DMSans', 18, 28),
  'L.Regular': getFontStyleByWeight('400', 'DMSans', 18, 28),
  M: getFontStyleByWeight('400', 'Quincy', 22, 32),
  'M.Medium': getFontStyleByWeight('500', 'DMSans', 16, 25),
  'M.Regular': getFontStyleByWeight('400', 'DMSans', 16, 25),
  'M.Semibold': getFontStyleByWeight('600', 'DMSans', 16, 25),
  S: getFontStyleByWeight('400', 'Quincy', 18, 24),
  'S.Medium': getFontStyleByWeight('500', 'DMSans', 14, 22),
  'S.Regular': getFontStyleByWeight('400', 'DMSans', 14, 22),
  'S.Semibold': getFontStyleByWeight('600', 'DMSans', 14, 22),
  XL: getFontStyleByWeight('400', 'Quincy', 30, 40),
  'XL.Medium': getFontStyleByWeight('500', 'DMSans', 20, 28),
  XS: getFontStyleByWeight('400', 'Quincy', 16, 21),
  XXL: getFontStyleByWeight('400', 'Quincy', 32, 44),
} satisfies Record<Typography, TextStyle>;
