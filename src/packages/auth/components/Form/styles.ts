import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  button: {
    marginTop: 12,
  },
  point: (isValid: boolean) => ({
    backgroundColor: isValid ? theme.shared.icon.valid : theme.shared.icon.invalid,
    borderRadius: 6,
    height: 6,
    width: 6,
  }),
  root: {
    gap: 12,
  },
  validation: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
}));
