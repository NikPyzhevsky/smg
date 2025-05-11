import { useNavigation } from '@react-navigation/native';
import { type FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Text, Button } from '@/packages/shared/components/Elements';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { MainNavigationProps } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';

const stylesheet = createStyleSheet((theme, runtime) => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.shared.buttons.main.primary.background,
    borderRadius: 15,
    marginTop: 10,
    padding: 15,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  contentContainer: {
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

const FirstScreen: FC = () => {
  const { t } = useTranslation();

  const { styles } = useStyles(stylesheet);
  const navigation = useNavigation<MainNavigationProps<typeof MAIN_ROUTE.FIRST_SCREEN>>();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('firstScreen.title')}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{t('firstScreen.text')}</Text>
        <Button.Primary
          size="l"
          title={t('firstScreen.button')}
          variant="destructive"
          onPress={() => navigation.navigate(MAIN_ROUTE.SECOND_SCREEN)}
        />
      </View>
    </View>
  );
};

export default FirstScreen;
