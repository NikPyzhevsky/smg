import { useNavigation } from '@react-navigation/native';
import { type FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Button, Text } from '@/packages/shared/components/Elements';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { type MainNavigationProps } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';

const stylesheet = createStyleSheet((theme, runtime) => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.shared.buttons.main.primary.background,
    borderRadius: 15,
    marginTop: 10,
    padding: 15,
    width: '30%',
  },
  buttonText: {
    color: 'white',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  root: {
    alignItems: 'center',
    backgroundColor: theme.app.background.primary,
    flex: 1,
    paddingTop: runtime.insets.top,
  },
  title: {
    color: theme.shared.text.primary,
  },
}));

const SecondScreen: FC = () => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  const navigation = useNavigation<MainNavigationProps<typeof MAIN_ROUTE.SECOND_SCREEN>>();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('secondScreen.title')}</Text>
      <View style={styles.contentContainer}>
        <Button.Primary
          title={t('secondScreen.button')}
          variant="destructive"
          onPress={navigation.goBack}
        />
      </View>
    </View>
  );
};

export default SecondScreen;
