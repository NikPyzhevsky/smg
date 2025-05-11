import { memo, useCallback, useState, type FC } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { ChevronLeft } from '@/packages/shared/assets/icons';
import {
  Button,
  Code,
  KeyboardAvoid,
  PressableContainer,
  Text,
} from '@/packages/shared/components';
import { useDidUpdate, useMount } from '@/packages/shared/hooks/lifecycle';
import { useTimer } from '@/packages/shared/hooks/timer';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { stylesheet } from './styles';

interface OtpFormProps {
  description: string;
  onBack: () => void;
  /**
   * Seconds
   */
  timeout: number;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onContinue?: (code: string) => void;
  onResend?: () => void;
  startTimerOnMount?: boolean;
}

const Otp: FC<OtpFormProps> = ({
  description,
  disabled,
  loading,
  onBack,
  onContinue,
  onResend,
  startTimerOnMount,
  timeout,
  title,
}) => {
  const { styles } = useStyles(stylesheet);

  const { t } = useTranslation('auth');

  const [code, setCode] = useState('');

  const { startTimer, stopTimer, value: time } = useTimer();

  const resendTime = `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(Math.floor(time % 60)).padStart(2, '0')}`;

  const buttonDisabled = code.length !== 6 || disabled;

  useMount(() => {
    if (startTimerOnMount) {
      startTimer(timeout, -1);
    }
  });

  useDidUpdate(() => {
    if (time <= 0) {
      stopTimer();
    }
  }, [stopTimer, time]);

  const handleResend = useCallback(() => {
    if (timeout !== null) {
      startTimer(timeout, -1);
    }

    onResend?.();
  }, [onResend, startTimer, timeout]);

  const handleContinue = useCallback(() => {
    if (!onContinue) {
      return;
    }

    onContinue(code);
  }, [code, onContinue]);

  return (
    <View style={styles.root}>
      <Button.Circle Icon={ChevronLeft} style={styles.back} onPress={onBack} />
      <KeyboardAvoid style={styles.keyboard}>
        <View style={styles.content}>
          <View style={styles.main}>
            <Text style={styles.title} text={title} variant="L" />

            <Text style={styles.subTitle} text={description} variant="M.Regular" />

            <Code error value={code} onChange={setCode} />
            <View style={styles.resendWrapper}>
              {!time ? (
                <PressableContainer onPress={handleResend}>
                  <Text style={styles.resend} variant="M.Semibold">
                    {t('form.code.resend')}
                  </Text>
                </PressableContainer>
              ) : (
                <Text style={styles.resendTimeout} variant="M.Regular">
                  {t('form.code.resendTimeout')}
                  <Text style={styles.resendTime} variant="M.Semibold">
                    {resendTime}
                  </Text>
                </Text>
              )}
            </View>
          </View>

          <View style={styles.footer}>
            <Button.Primary
              disabled={buttonDisabled}
              loading={loading}
              size="l"
              title={t('form.code.button')}
              onPress={handleContinue}
            />
          </View>
        </View>
      </KeyboardAvoid>
    </View>
  );
};

export default memo(Otp);
