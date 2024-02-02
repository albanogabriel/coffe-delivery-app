import styled from 'styled-components'

export const Button = styled.button`
  font-family: ${(props) => props.theme.buttonStyle.buttonMedium.font};
  border-radius: 6px;
  /* text-transform: uppercase; */
  line-height: ${(props) => props.theme.buttonStyle.buttonMedium.lineHeight};
  border: none;
  cursor: pointer;
  padding: 12px;
`

export const ButtonSecundaryTrash = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  color: ${(props) => props.theme.colors.gray};
  background: ${(props) => props.theme.colors.gray['gray-100']};

  font-size: ${(props) => props.theme.buttonStyle.buttonMedium.size};
  font-weight: ${(props) => props.theme.buttonStyle.buttonMedium.fontWeight};

  img {
    width: 16px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.gray['gray-200']};
  }
`

export const ButtonSecundaryLocation = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.colors.purple['purple-dark']};
  background: ${(props) => props.theme.colors.purple['purple-light']};
  font-size: ${(props) => props.theme.buttonStyle.buttonMedium.size};
  font-weight: ${(props) => props.theme.buttonStyle.buttonMedium.fontWeight};

  img {
    color: ${(props) => props.theme.colors.purple['purple-dark']};
    width: 16px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.purple['purple-light']};
  }
`
