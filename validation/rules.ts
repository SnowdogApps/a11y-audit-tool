import { string, setLocale } from 'yup'

export default function () {
  setLocale({
    mixed: {
      required: 'This is a required field',
    },
    string: {
      email: 'This is not a valid email',
      min: ({ min }) =>
        `This field must be at least ${min} ${
          min === 1 ? 'character' : 'characters'
        }`,
      max: ({ max }) => `This field must be at most ${max} ${'characters'}`,
    },
    array: {
      min: ({ min }) =>
        `This field must have at least ${min} ${min === 1 ? 'item' : 'items'}`,
    },
  })

  const emailRule = string().required().email()
  const lettersOnlyRule = string()
    .required()
    .matches(/^\D*$/, 'The name should contain letters only')
  const passwordRule = string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.{8,})/,
      '8 characters or longer. Combine upper and lowercase letters, numbers and special characters (!@#$%^&*_-)'
    )
  const passwordRepeatRule = string()
    .required()
    .test('passwords-match', "Passwords doesn't match", function (value) {
      return this.parent.newPassword === value
    })

  return {
    emailRule,
    lettersOnlyRule,
    passwordRule,
    passwordRepeatRule,
  }
}
