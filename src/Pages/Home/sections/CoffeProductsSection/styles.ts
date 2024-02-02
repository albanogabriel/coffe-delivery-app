import styled from 'styled-components'

export const CoffeeProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`
