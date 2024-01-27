import styled from 'styled-components'
import { TitleVariantProps } from '../TextRoboto'

export const RobotoText = styled.h1<TitleVariantProps>`
  font-family: ${(props) => props.theme.fonts.fontFamilies.textRoboto};
  line-height: ${(props) => props.theme.fonts.lineHeight.title};
  font-weight: ${(props) => props.theme.fonts.fontWeights.regular};
  color: ${(props) => props.theme.colors.gray['gray-700']};
  font-size: ${(props) => {
    switch (props.variant) {
      case 'lg':
        return props.theme.fonts.fontSize.textRoboto.lg
      case 'md':
        return props.theme.fonts.fontSize.textRoboto.md
      case 'sm':
        return props.theme.fonts.fontSize.textRoboto.sm
      case 'xs':
        return props.theme.fonts.fontSize.textRoboto.xs
    }
  }};
`
