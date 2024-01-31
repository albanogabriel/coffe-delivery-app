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
