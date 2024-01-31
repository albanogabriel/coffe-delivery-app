import { useContext } from 'react'
import { Card } from '../../../../components/Card'
import { TitleBaloo } from '../../../../components/Fonts/TitleBaloo'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { coffeeList } from '../../../../data'
import { CoffeeProductsContainer, CoffeeListContainer } from './styles'

export function CoffeeProductsSection() {
  const { cart } = useContext(CoffeeContext)

  return (
    <CoffeeProductsContainer>
      <TitleBaloo variant="xl">Nosso Cafés</TitleBaloo>

      <CoffeeListContainer>
        {coffeeList.map((coffeeItem) => {
          return <Card key={coffeeItem.id} data={coffeeItem} />
        })}
      </CoffeeListContainer>

      <h1>carrinho de compra</h1>
      {cart.map((coffee) => {
        return (
          <div key={coffee.id}>
            <p>{coffee.title}</p>
            <p>{coffee.quantidade}</p>
            <p> R$ {coffee.total}</p>
          </div>
        )
      })}
    </CoffeeProductsContainer>
  )
}
