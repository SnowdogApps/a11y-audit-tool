import { string, object } from 'yup'
import rules from '~/validation/rules'
const { emailRule, passwordRule, passwordRepeatRule } = rules()

export const signInSchema = object({
  email: emailRule,
  password: passwordRule,
})

export const signUpFirstSchema = object({
  email: emailRule,
})

export const signUpSecondSchema = object({
  username: string().required().min(3).max(16),
  newPassword: passwordRule,
  passwordConfirm: passwordRepeatRule,
})

export const recoverPasswordSchema = object({
  email: emailRule,
})

export const newPasswordSchema = object({
  newPassword: passwordRule,
  newPasswordRepeat: passwordRepeatRule,
})
