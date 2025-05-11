import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(() => ({
  root: ({ pressed, pressedOpacity }: { pressed: boolean; pressedOpacity: number }) => ({
    opacity: pressed ? pressedOpacity : 1,
  }),
}));
