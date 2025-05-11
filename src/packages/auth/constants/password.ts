export const VALID_PASSWORD_REGEXP =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d\ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}/;

export const VALID_PASSWORD_REGEX_DIGIT = /(?=.*\d)/;
export const VALID_PASSWORD_REGEX_LOWERCASE = /(?=.*[a-z])/;
export const VALID_PASSWORD_REGEX_UPPERCASE = /(?=.*[A-Z])/;
export const VALID_PASSWORD_REGEX_SPECIAL = /(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/;
