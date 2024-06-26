import type { Config } from 'tailwindcss'

import customThemeConfig from './tw-config/theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: customThemeConfig,
  plugins: []
}
export default config
