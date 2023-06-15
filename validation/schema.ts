import { object, string, array, number } from 'yup'
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

export const auditFormSchema = object({
  pages: array().of(
    object().shape({
      url: string().required().url(),
      selector: string(),
    })
  ),
  title: string().required(),
  project: number().required(),
  width: string(),
  height: string(),
  username: string(),
  password: string(),
})

export const accountFormSchema = object({
  email: string().required(),
  username: string().required(),
  fullName: string().required(),
  avatarUrl: string(),
  userType: string(),
})
