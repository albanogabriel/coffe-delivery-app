import { useContext } from 'react'
import { Container, OrdersTable } from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function OrderListTablePage() {
  const { checkoutItens } = useContext(CoffeeContext)

  const CheckoutItensExists = checkoutItens.length > 0

  return (
    <Container>
      {CheckoutItensExists ? (
        <OrdersTable>
          <thead>
            <tr>
              <td width="50%">Pedidos</td>
              <td>Quantidade</td>
              <td>Total</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {checkoutItens.map((item) => {
              const totalPedidoFormatted = item.totalPedido?.toLocaleString(
                'pt-BR',
                {
                  style: 'currency',
                  currency: 'BRL',
                },
              )
              return (
                <tr key={item.id}>
                  <td width="50%">
                    {item.titles?.map((title, index) => {
                      return (
                        <span key={index}>
                          {title}, {''}
                        </span>
                      )
                    })}
                  </td>
                  <td>{item.quantidadeDeItens}</td>
                  <td>{totalPedidoFormatted}</td>
                  <td>
                    {formatDistanceToNow(item.startDate ?? 0, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </OrdersTable>
      ) : (
        <h1>Não existem pedidos</h1>
      )}
    </Container>
  )
}
