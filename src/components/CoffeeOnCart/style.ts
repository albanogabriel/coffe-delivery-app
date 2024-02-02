import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const CoffeeItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImgTitleAndContador = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`

export const CoffeImg = styled.img`
  width: 50px;
  height: 50px;
`

export const TitleAndContador = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const Title = styled.div`
  font-size: 16px;
`

export const ContadorAndButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const Contador = styled.div`
  display: flex;
  gap: 14px;
  font-size: 16px;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.gray['gray-300']};
  border-radius: 8px;
`

export const Button = styled.div`
  padding: 12px;
  background-color: red;
  border-radius: 4px;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray['gray-500']};
  margin-bottom: 24px;
`
