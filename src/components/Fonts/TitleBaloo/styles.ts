import styled from 'styled-components'
import { TitleVariantProps } from '.'

export const Title = styled.h1<TitleVariantProps>`
  font-family: 'Baloo 2';
  line-height: ${(props) => props.theme.fonts.lineHeight.title};
  font-weight: ${(props) => props.theme.fonts.fontWeights.bold};

  font-size: ${(props) => {
    switch (props.variant) {
      case 'xl':
        return props.theme.fonts.fontSize.titleBaloo.xl
      case 'lg':
        return props.theme.fonts.fontSize.titleBaloo.lg
      case 'md':
        return props.theme.fonts.fontSize.titleBaloo.md
      case 'sm':
        return props.theme.fonts.fontSize.titleBaloo.sm
      case 'xs':
        return props.theme.fonts.fontSize.titleBaloo.xs
      default:
        return props.theme.fonts.fontSize.titleBaloo.md // Define um valor padrão caso a variante seja desconhecida
    }
  }};
`
