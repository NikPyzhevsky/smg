import { type FC, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import Toast, { type ToastConfigParams } from 'react-native-toast-message';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { CircleCheck, CircleCross, ExclamationMark } from '@/packages/shared/assets/icons';
import Text from '@/packages/shared/components/Elements/Text';
import { ToastTypes } from '@/packages/shared/constants/toast';

const stylesheet = createStyleSheet((theme, { insets, screen }) => ({
  iconContainer: {
    marginRight: 10,
  },
  root: {
    alignItems: 'center',
    paddingTop: insets.top + 36,
    width: screen.width - 40,
  },
  text: (type: ToastTypes) => {
    let color = theme.shared.toast.text.success;

    if (type === ToastTypes.Error) {
      color = theme.shared.toast.text.error;
    }

    if (type === ToastTypes.Info) {
      color = theme.shared.toast.text.info;
    }

    return { color };
  },
  toast: (type: ToastTypes) => {
    let backgroundColor = theme.shared.toast.background.error;

    if (type === ToastTypes.Info) {
      backgroundColor = theme.shared.toast.background.info;
    }

    if (type === ToastTypes.Success) {
      backgroundColor = theme.shared.toast.background.success;
    }

    return {
      alignItems: 'center',
      backgroundColor,
      borderRadius: 1000,
      borderWidth: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 12,
    };
  },
}));

interface ToastComponentProps {
  type: ToastTypes;
  text?: string;
}

const TypeIconMap: Record<ToastTypes, FC<SvgProps>> = {
  [ToastTypes.Info]: ExclamationMark,
  [ToastTypes.Success]: CircleCheck,
  [ToastTypes.Error]: CircleCross,
};

const ToastComponent: FC<ToastComponentProps> = ({ text = '', type }) => {
  const { styles, theme } = useStyles(stylesheet);

  const ToastIcon = useMemo(() => {
    let color = theme.shared.toast.icon.success;

    if (type === ToastTypes.Error) {
      color = theme.shared.toast.icon.error;
    }

    if (type === ToastTypes.Info) {
      color = theme.shared.toast.icon.info;
    }

    const Icon = TypeIconMap[type];
    const iconProps = {
      color,
      height: 20,
      width: 20,
    };

    return <Icon {...iconProps} />;
  }, [
    theme.shared.toast.icon.error,
    theme.shared.toast.icon.info,
    theme.shared.toast.icon.success,
    type,
  ]);

  return (
    <View pointerEvents="box-none" style={styles.root}>
      <Pressable style={styles.toast(type)} onPress={() => Toast.hide()}>
        <View style={styles.iconContainer}>{ToastIcon}</View>
        <Text style={styles.text(type)} variant="S.Semibold">
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

interface CustomToastProps {
  text: string;
}

const toastConfig = {
  [ToastTypes.Info]: ({ props }: ToastConfigParams<CustomToastProps>) => (
    <ToastComponent text={props.text} type={ToastTypes.Info} />
  ),
  [ToastTypes.Error]: ({ props }: ToastConfigParams<CustomToastProps>) => (
    <ToastComponent text={props.text} type={ToastTypes.Error} />
  ),
  [ToastTypes.Success]: ({ props }: ToastConfigParams<CustomToastProps>) => (
    <ToastComponent text={props.text} type={ToastTypes.Success} />
  ),
};

const CustomToast = () => <Toast config={toastConfig} />;

export default CustomToast;
