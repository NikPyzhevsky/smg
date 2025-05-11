import { type Namespace } from 'i18next';
import { type UseTranslationOptions, useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = <NS extends Namespace = 'translation'>(
  ...[moduleName, options]: NS extends 'translation'
    ? [moduleName?: NS, options?: UseTranslationOptions<undefined>]
    : [moduleName: NS, options?: UseTranslationOptions<undefined>]
) => {
  const translation = useI18nTranslation<NS>((moduleName || 'translation') as NS, options);
  return translation;
};
