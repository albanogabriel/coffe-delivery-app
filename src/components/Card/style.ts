import { Minus, Plus } from 'phosphor-react'
import styled from 'styled-components'

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  padding: 32px;
  border-radius: 6px 36px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 120px;
  }

  span {
    display: flex;
    gap: 8px;

    div {
      background-color: ${(props) => props.theme.colors.yellow['yellow-light']};
      padding: 4px 8px;
      border-radius: 6px;

      span {
        color: ${(props) => props.theme.colors.yellow['yellow-dark']};
      }
    }
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Money = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Contador = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => props.theme.colors.gray['gray-300']};
  padding: 12px;
  border-radius: 4px;
`

export const MinusContador = styled.nav`
  cursor: pointer;
`

export const PlusContador = styled.nav`
  cursor: pointer;
`

export const StyledMinus = styled(Minus)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.purple.purple};

  &:hover {
    color: ${(props) => props.theme.colors.purple['purple-dark']};
  }
`

export const StyledPlus = styled(Plus)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.purple.purple};

  &:hover {
    color: ${(props) => props.theme.colors.purple['purple-dark']};
  }
`
