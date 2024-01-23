import 'styled-components'

import { defaultTheme } from '../styles/themes/themeDefault'

type DefaultThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
