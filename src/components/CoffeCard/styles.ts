import styled from 'styled-components'

export const CoffeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`

export const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  padding: 32px;
  border-radius: 6px 36px;
`

export const CoffeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const CoffeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
      color: ${(props) => props.theme.colors.yellow['yellow-dark']};
      padding: 8px;
      border-radius: 6px;
    }
  }
`

export const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const HowManyAddToCartContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  div {
    display: flex;
    gap: 16px;
    background-color: ${(props) => props.theme.colors.gray['gray-300']};
    border-radius: 6px;
    padding: 13px 18px;
    width: auto;

    span {
      /* font-size: 16px; */
    }
  }
`
