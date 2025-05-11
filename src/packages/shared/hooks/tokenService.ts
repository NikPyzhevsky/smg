import { useApplicationContext } from '@/packages/shared/contexts/ApplicationContext';
import TokenService from '@/packages/shared/services/token';

export const useTokenService = () => {
  const {
    services: { token: tokenService },
  } = useApplicationContext() as {
    services: { token: TokenService };
  };

  return tokenService;
};
