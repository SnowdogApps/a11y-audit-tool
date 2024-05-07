export interface ScreenSize {
  name: string
  viewport: [number, number]
}

export const availableScreenSizes: ScreenSize[] = [
  { name: 'ipad-2', viewport: [768, 1024] },
  { name: 'ipad-mini', viewport: [768, 1024] },
  { name: 'iphone-3', viewport: [320, 480] },
  { name: 'iphone-4', viewport: [320, 480] },
  { name: 'iphone-5', viewport: [320, 568] },
  { name: 'iphone-6', viewport: [375, 667] },
  { name: 'iphone-6+', viewport: [414, 736] },
  { name: 'iphone-7', viewport: [375, 667] },
  { name: 'iphone-8', viewport: [375, 667] },
  { name: 'iphone-x', viewport: [375, 812] },
  { name: 'iphone-xr', viewport: [414, 896] },
  { name: 'iphone-se2', viewport: [375, 667] },
  { name: 'macbook-11', viewport: [1366, 768] },
  { name: 'macbook-13', viewport: [1280, 800] },
  { name: 'macbook-15', viewport: [1440, 900] },
  { name: 'macbook-16', viewport: [1536, 960] },
  { name: 'samsung-note9', viewport: [414, 846] },
  { name: 'samsung-s10', viewport: [360, 760] },
]

export const defaultViewports = [
  [360, 760],
  [1280, 800],
]
