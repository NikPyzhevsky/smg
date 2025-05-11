import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme, { insets }) => {
  return {
    back: {
      left: 20,
      position: 'absolute',
      top: 20 + insets.top,
    },
    content: {
      flexGrow: 1,
      flexShrink: 0,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    footer: {
      paddingBottom: 20,
      rowGap: 16,
    },
    icon: {
      alignSelf: 'center',
      marginBottom: 12,
      marginTop: 20 + insets.top,
      maxHeight: 118,
      maxWidth: 118,
      minHeight: 82,
    },
    keyboard: {
      flex: 1,
    },
    main: {
      flex: 1,
      paddingBottom: 20,
    },
    resend: {
      color: theme.shared.text.primary,
      textAlign: 'center',
    },
    resendTime: {
      color: theme.shared.text.primary,
    },
    resendTimeout: {
      color: theme.shared.text.description,
      textAlign: 'center',
    },
    resendWrapper: {
      marginTop: 36,
    },
    root: {
      flex: 1,
      paddingBottom: insets.bottom,
      paddingTop: insets.top + 88,
    },
    subTitle: {
      color: theme.shared.text.description,
      marginBottom: 60,
      marginTop: 8,
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
    },
  };
});
