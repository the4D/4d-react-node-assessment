export const validationRules = {
        firstName: {
          required: true,
          pattern: /^[A-Za-z]{2,10}$/,
          message: 'First name must be 2-10 letters only'
        }
}