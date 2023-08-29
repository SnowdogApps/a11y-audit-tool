import { PrimeIcons } from 'primevue/api'
import type { MenuItem } from 'primevue/menuitem'
export const customerMenuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    items: [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        to: '/',
      },
    ],
  },
  {
    label: 'Audit',
    items: [
      {
        label: 'List',
        icon: PrimeIcons.LIST,
        to: '/audit',
      },
    ],
  },
]

export const auditorMenuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    items: [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        to: '/',
      },
    ],
  },
  {
    label: 'Audit',
    items: [
      {
        label: 'List',
        icon: PrimeIcons.LIST,
        to: '/audit',
      },
      {
        label: 'New',
        icon: PrimeIcons.PLUS,
        to: '/audit/new',
      },
    ],
  },
]

export const adminMenuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    items: [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        to: '/',
      },
    ],
  },
  {
    label: 'Admin',
    items: [
      {
        label: 'Claims',
        icon: PrimeIcons.KEY,
        to: '/admin/',
      },
      {
        label: 'Projects',
        icon: PrimeIcons.FOLDER,
        to: '/projects/',
      },
    ],
  },
  {
    label: 'Audit',
    items: [
      {
        label: 'List',
        icon: PrimeIcons.LIST,
        to: '/audit',
      },
      {
        label: 'New',
        icon: PrimeIcons.PLUS,
        to: '/audit/new',
      },
    ],
  },
]
