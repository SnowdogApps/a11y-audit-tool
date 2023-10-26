import { object, string, array, number } from 'yup'
import type { Page } from 'types/audit'
import validationRules from 'validation/rules'
import { defaultViewports } from '~/data/viewports'
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
  pages: array()
    .of(
      object()
        .shape({
          url: string().required().url(),
          selector: string(),
        })
        .test('isUnique', `The entry is not unique`, function (currentPage) {
          const pages = this.parent
          const count = pages.filter(
            (page: Page) =>
              page.selector === currentPage.selector &&
              page.url === currentPage.url
          ).length
          return count <= 1
        })
    )
    .required()
    .min(1)
    .default([
      {
        selector: '',
        url: '',
      },
    ]),
  title: string().required(),
  project: number().required(),
  username: string(),
  password: string(),
  viewports: array(string().required())
    .required()
    .min(1)
    .default(defaultViewports),
})

export const accountFormSchema = object({
  email: string().required(),
  username: string().required(),
  fullName: string().required(),
  avatarUrl: string(),
  userType: string(),
})

export const addProfileToProjectFormSchema = object({
  profile: string().required(),
  project: number().required(),
})

export const editUserTypeFormSchema = object({
  user: string().required(),
  userType: string().required(),
})

export const createProjectFormSchema = object({
  name: string().required(),
  description: string(),
})
