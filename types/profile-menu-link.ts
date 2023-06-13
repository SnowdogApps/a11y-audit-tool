export interface ProfileMenuLink {
  iconClasses: string
  url?: string
  text: string
  subtitle?: string
  command?: ((payload: MouseEvent) => void) | undefined
}
