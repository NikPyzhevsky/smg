import { resources } from '@/app/i18n/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof resources.en;
  }
}
