import { object } from 'yup'
import validationRules from '~/validation/rules'
const { emailRule, passwordRule, passwordRepeatRule } = validationRules()

export const signInSchema = object({
  email: emailRule,
  password: passwordRule,
})

export const signUpSchema = object({
  email: emailRule,
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
