import { createStyleSheet } from 'react-native-unistyles';

import { FONT_VARIANTS } from '@/packages/shared/utils/font';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.shared.input.primary.background.active,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    height: 52,
  },
  containerMultiline: {
    height: 160,
  },
  error: {
    color: theme.shared.input.primary.error,
    marginTop: 3,
    zIndex: 0,
  },
  input: {
    color: theme.shared.input.primary.text,
    flex: 1,
    fontSize: 16,
    height: 52,
    zIndex: 100,
  },
  multiline: {
    backgroundColor: theme.shared.input.primary.background.default,
    borderRadius: 12,
    color: theme.shared.input.primary.text,
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 11,
    paddingTop: 12,
    textAlignVertical: 'top',
    zIndex: 100,
  },
  paddingLeft: {
    paddingLeft: 16,
  },
  paddingRight: {
    paddingRight: 16,
  },
  rightContent: {
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 16,
    zIndex: 1000,
  },
  rightContentMultiline: {
    alignSelf: 'flex-start',
    marginVertical: 16,
  },
  secondaryInput: {
    color: theme.shared.input.secondary.text,
    ...FONT_VARIANTS.XL,
    alignSelf: 'center',
    flex: 1,
    height: 40,
    zIndex: 100,
  },
  secondaryRoot: {
    flexDirection: 'row',
    height: 52,
  },
}));
