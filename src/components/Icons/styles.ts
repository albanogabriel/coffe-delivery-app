import styled from 'styled-components'

export const COLORS_ICON_SPAN = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  grayDark: '#272221',
  purple: '#8047F8',
}

export type ColorType = keyof typeof COLORS_ICON_SPAN // Ajustado para ser diretamente o tipo da cor

interface SpanColorProps {
  color: ColorType
}

export const IconSpan = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const CircleIconSpan = styled.span<SpanColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${(props) => COLORS_ICON_SPAN[props.color]};
  border-radius: 50%;
  padding: 8px;

  img {
    width: 14px;
  }
`
