import styled from 'styled-components'

export const Button = styled.button`
  font-family: ${(props) => props.theme.buttonStyle.buttonMedium.font};
  border-radius: 6px;
  text-transform: uppercase;
  line-height: ${(props) => props.theme.buttonStyle.buttonMedium.lineHeight};
  border: none;
  cursor: pointer;
`

export const ButtonPrimaryStyle = styled(Button)`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.yellow.yellow};
  font-size: ${(props) => props.theme.buttonStyle.buttonMedium.size};
  font-weight: ${(props) => props.theme.buttonStyle.buttonMedium.fontWeight};
  padding: 12px 45px;

  &:hover {
    background: ${(props) => props.theme.colors.yellow['yellow-dark']};
  }
`
