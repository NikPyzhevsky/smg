import React, { FC } from 'react';
import { useController, Control } from 'react-hook-form';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Input, Text } from '@/packages/shared/components';
import { InputProps } from '@/packages/shared/components/Elements/Inputs/interfaces';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { Valid } from '@/packages/auth/assets/icons';

import { stylesheet } from './styles';

type InputSecondarySecurableProps = InputProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  defaultValue: string;
  name: string;
  requirementIsValid: boolean;
};

const InputSecondarySecurableControl: FC<InputSecondarySecurableProps> = ({
  control,
  defaultValue,
  name,
  requirementIsValid,
  ...props
}) => {
  const { t } = useTranslation('auth');
  const { styles, theme } = useStyles(stylesheet);
  const { field } = useController({
    control,
    defaultValue,
    name,
  });

  return (
    <>
      <Input.SecondarySecurable
        customAutoFocus
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
        {...props}
      />
      <View>
        <View style={styles.validation}>
          <Valid
            color={field.value.length >= 8 ? theme.shared.icon.valid : theme.shared.icon.invalid}
          />
          <Text color={field.value.length >= 8 ? 'primary' : 'inactive'}>
            {t('validation.password.digit')}
          </Text>
        </View>
        <View style={styles.validation}>
          <Valid
            color={
              requirementIsValid && field.value !== ''
                ? theme.shared.icon.valid
                : theme.shared.icon.invalid
            }
          />
          <Text color={requirementIsValid && field.value !== '' ? 'primary' : 'inactive'}>
            {t('validation.password.requirements')}
          </Text>
        </View>
      </View>
    </>
  );
};

export default InputSecondarySecurableControl;
