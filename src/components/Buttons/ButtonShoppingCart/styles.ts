import styled from 'styled-components'

export const CartButton = styled.button`
  display: flex;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  img {
    height: 20px;
    max-width: 20px;
  }
`

export const AddCartButton = styled(CartButton)`
  transition: background-color 0.1s;
  background: ${(props) => props.theme.colors.purple['purple-dark']};

  &:hover {
    background: ${(props) => props.theme.colors.purple.purple};
  }
`

export const ViewCartButton = styled(CartButton)`
  position: relative;
  background: ${(props) => props.theme.colors.yellow['yellow-light']};

  span {
    font-size: 12px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -12px;
    right: -12px;
    width: 25px;
    height: 25px;
    transition: background-color 0.3s;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.yellow['yellow-dark']};
    border-radius: 50%;
    font-weight: bold;
  }

  &:hover {
    box-shadow: 0px 0px 4px 0.25px rgba(0, 0, 0, 0.1);
  }
`
