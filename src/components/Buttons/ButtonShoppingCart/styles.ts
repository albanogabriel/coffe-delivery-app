import styled from 'styled-components'

export const CartButton = styled.button`
  padding: 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  img {
    height: 22px;
  }
`

export const AddCartButton = styled(CartButton)`
  background: ${(props) => props.theme.colors.purple['purple-dark']};

  &:hover {
    background: ${(props) => props.theme.colors.purple.purple};
  }
`

export const ViewCartButton = styled(CartButton)`
  position: relative;
  background: ${(props) => props.theme.colors.yellow['yellow-light']};

  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -12px;
    right: -12px;
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.yellow['yellow-dark']};
    border-radius: 50%;
    font-weight: bold;
  }

  &:hover {
    box-shadow: 0px 0px 4px 0.25px rgba(0, 0, 0, 0.1);
  }
`
