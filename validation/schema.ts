import { object } from 'yup'
import rules from '~/validation/rules'
const { emailRule, passwordRule, passwordRepeatRule } = rules()

export const signInSchema = object({
  email: emailRule,
  password: passwordRule,
})

export const signUpSchema = object({
  email: emailRule,
  newPassword: passwordRule,
})

export const recoverPasswordSchema = object({
  email: emailRule,
})

export const newPasswordSchema = object({
  newPassword: passwordRule,
  newPasswordRepeat: passwordRepeatRule,
})
