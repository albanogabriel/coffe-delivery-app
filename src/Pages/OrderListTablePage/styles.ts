import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 160px 160px;
`

export const OrdersTable = styled.table`
  width: 100%;
  border-collapse: separate; // para poder usar o border-spacing
  border-spacing: 0rem 0.5rem; // 0 - no eixo Y  e  0.5rem eixo X -> Espaçamento da linha da nossa tabela

  thead {
    background-color: ${(props) => props.theme.colors.purple['purple-light']};
    color: ${(props) => props.theme.colors.purple};
    font-weight: bold;
  }

  td {
    padding: 1.25rem 2rem;
    background-color: rgba(255, 255, 255, 0.6);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
