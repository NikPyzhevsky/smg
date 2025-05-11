import { yupResolver } from '@hookform/resolvers/yup';
import { type FC, memo, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Button } from '@/packages/shared/components';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { InputSecondarySecurableControl } from '@/packages/auth/components/Form';
import {
  passwordScheme,
  type IPasswordSchema,
  passwordValidationRequirements,
} from '@/packages/auth/utils/validators';

import { stylesheet } from './styles';

interface SignUpNameFormProps {
  loading: boolean;
  onSubmit: (values: IPasswordSchema) => unknown;
}

const PasswordForm: FC<SignUpNameFormProps> = ({ loading, onSubmit }) => {
  const { t } = useTranslation('auth');
  const { styles } = useStyles(stylesheet);

  const { control, formState, handleSubmit } = useForm({
    mode: 'all',
    resolver: yupResolver(passwordScheme),
  });

  const { isValid } = formState;

  const { password } = useWatch({ control });

  const [requirementIsValid, setRequirementIsValid] = useState(false);

  useEffect(() => {
    passwordValidationRequirements.isValid(password).then(setRequirementIsValid);
  }, [password]);

  return (
    <View style={styles.root}>
      <InputSecondarySecurableControl
        control={control}
        defaultValue=""
        name="password"
        requirementIsValid={requirementIsValid}
      />
      <Button.Primary
        disabled={!isValid}
        loading={loading}
        size="l"
        style={styles.button}
        title={t('form.password.button')}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default memo(PasswordForm);
