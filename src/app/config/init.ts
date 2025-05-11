import StorageRepository from '@/packages/shared/repositories/storage';
import LanguageService from '@/packages/shared/services/language';
import TokenService from '@/packages/shared/services/token';

import config from '@/app/config/index';

export const initApplicationContext = () => {
  const storageRepository = new StorageRepository(config.storage);

  const languageService = new LanguageService(storageRepository);
  const tokenService = new TokenService(storageRepository);

  return {
    repositories: { storage: storageRepository },
    services: { language: languageService, token: tokenService },
  };
};
