import { type FC, type PropsWithChildren } from 'react';
import { Keyboard, Pressable, type StyleProp, type ViewStyle } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  root: {
    flex: 1,
  },
}));

interface KeyboardAvoidProps extends PropsWithChildren {
  keyboardVerticalOffset?: number;
  style?: StyleProp<ViewStyle>;
}

const KeyboardAvoid: FC<KeyboardAvoidProps> = ({ children, keyboardVerticalOffset, style }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={[styles.root, style]}
    >
      <Pressable style={styles.root} onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
