import type { Client } from '~/types/client'
import type { Auditor } from '~/types/auditor'

const clientList: Client[] = [
  {
    id: 1,
    name: 'Snowdog',
  },
  {
    id: 2,
    name: 'TimeTrent',
  },
  {
    id: 3,
    name: 'BrantetCondend',
  },
]
const auditorList: Auditor[] = [
  {
    id: 1,
    name: 'Ania',
  },
  {
    id: 2,
    name: 'Robert',
  },
  {
    id: 3,
    name: 'Karol',
  },
]

export { clientList, auditorList }
