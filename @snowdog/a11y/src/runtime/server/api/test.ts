import { assertMethod, defineEventHandler, createError, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  assertMethod(event, 'GET')

  const { baseUrl } = getQuery(event)

  if (!baseUrl) {
    throw createError({
      message: 'baseUrl var is mandatory',
      statusCode: 422,
    })
  }

  // @todo: action

  return [{ foo: 'bar' }]
})
