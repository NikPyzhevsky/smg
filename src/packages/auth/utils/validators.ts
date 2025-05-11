import * as yup from 'yup';

import {
  VALID_PASSWORD_REGEX_DIGIT,
  VALID_PASSWORD_REGEX_LOWERCASE,
  VALID_PASSWORD_REGEX_SPECIAL,
  VALID_PASSWORD_REGEX_UPPERCASE,
} from '@/packages/auth/constants/password';

export const passwordValidation = yup
  .string()
  .min(8, 'min')
  .required()
  .matches(VALID_PASSWORD_REGEX_DIGIT, 'digit')
  .matches(VALID_PASSWORD_REGEX_LOWERCASE, 'lowercase')
  .matches(VALID_PASSWORD_REGEX_UPPERCASE, 'uppercase')
  .matches(VALID_PASSWORD_REGEX_SPECIAL, 'special');

export const passwordValidationRequirements = yup
  .string()
  .required()
  .matches(VALID_PASSWORD_REGEX_DIGIT, 'digit')
  .matches(VALID_PASSWORD_REGEX_LOWERCASE, 'lowercase')
  .matches(VALID_PASSWORD_REGEX_UPPERCASE, 'uppercase')
  .matches(VALID_PASSWORD_REGEX_SPECIAL, 'special');

export const passwordScheme = yup.object({
  password: passwordValidation,
});

export type IPasswordSchema = yup.InferType<typeof passwordScheme>;
