import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Toast from 'react-native-toast-message';

import { HAPTIC_TYPE } from '@/packages/shared/constants/haptic';
import { ToastTypes } from '@/packages/shared/constants/toast';

export const triggerHaptic = (type = HAPTIC_TYPE.RIGID) => {
  ReactNativeHapticFeedback.trigger(type, { enableVibrateFallback: true });
};

export const showToast = (type: ToastTypes, message: string) => {
  switch (type) {
    case ToastTypes.Error:
      triggerHaptic(HAPTIC_TYPE.ERROR);
      break;
    default:
      break;
  }

  Toast.show({
    position: 'top',
    props: {
      text: message,
    },
    topOffset: 0,
    type,
    visibilityTime: 2000,
  });
};
