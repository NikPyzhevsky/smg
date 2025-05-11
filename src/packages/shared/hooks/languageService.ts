import { useApplicationContext } from '@/packages/shared/contexts/ApplicationContext';
import LanguageService from '@/packages/shared/services/language';

export const useLanguageService = () => {
  const {
    services: { language: languageService },
  } = useApplicationContext() as {
    services: { language: LanguageService };
  };

  return languageService;
};
