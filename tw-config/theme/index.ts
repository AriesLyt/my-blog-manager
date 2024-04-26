import { CustomThemeConfig } from 'tailwindcss/types/config'

import maxWidth from './max-width'

const customThemeConfig: Partial<CustomThemeConfig> & {
  extend: Partial<CustomThemeConfig>
} = {
  extend: {
    maxWidth: maxWidth,
    borderColor: {
      primary: '#e8e8e8'
    }
  }
}

export default customThemeConfig
