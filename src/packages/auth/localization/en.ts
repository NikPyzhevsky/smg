const en = {
  form: {
    code: {
      button: 'Continue',
      resend: 'Resend code',
      resendTimeout: "Don't have a code? Resend in ",
    },
    password: {
      button: 'Continue',
    },
  },
  validation: {
    email: 'Invalid email',
    password: {
      digit: '8+ characters',
      requirements: 'A symbol, number, and uppercase letter',
    },
  },
} as const;

export default en;
