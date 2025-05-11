import { useNavigation } from '@react-navigation/native';
import { type FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Text } from '@/packages/shared/components';
import { useTranslation } from '@/packages/shared/hooks/translation';

import { MainNavigationProps } from '@/app/models/navigation/main';
import { MAIN_ROUTE } from '@/app/routes/routes';

const stylesheet = createStyleSheet((theme, runtime) => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.shared.button.primary.background,
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

const FirstScreen: FC = () => {
  const { t } = useTranslation();
  const { t: tExample } = useTranslation('example');

  const { styles } = useStyles(stylesheet);
  const navigation = useNavigation<MainNavigationProps<typeof MAIN_ROUTE.FIRST_SCREEN>>();

  return (
    <View style={styles.root}>
      <Text fontSize={18} fontWeight="700" style={styles.title}>
        {t('firstScreen.title')}
      </Text>
      <View style={styles.contentContainer}>
        <Text fontSize={14} style={styles.title}>
          {tExample('hint')}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(MAIN_ROUTE.SECOND_SCREEN)}
        >
          <Text style={styles.buttonText}>{t('firstScreen.button')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstScreen;
