import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sharedEnLocalization from '@/packages/shared/localization/en';
import LanguageService from '@/packages/shared/services/language';

import exampleEnLocalization from '@/packages/example/localization/en';

import en from './lang/en';

export const resources = {
  en: {
    example: exampleEnLocalization,
    shared: sharedEnLocalization,
    translation: en,
  },
} as const;

export const initI18n = (languageService: LanguageService) => {
  i18n
    .use(RNLanguageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      debug: false,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      keySeparator: '.',
      lng: languageService.getLanguage(),
      resources,
    });
};

export default i18n;
