import { assertMethod, defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  assertMethod(event, 'GET')
  return 'test init goes here'
})
