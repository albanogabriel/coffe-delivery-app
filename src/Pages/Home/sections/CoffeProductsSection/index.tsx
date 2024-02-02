import { Card } from '../../../../components/Card/Card'
import { TitleBaloo } from '../../../../components/Fonts/TitleBaloo'
import { coffeeList } from '../../../../data'
import { CoffeeProductsContainer, CoffeeListContainer } from './styles'

export function CoffeeProductsSection() {
  return (
    <CoffeeProductsContainer>
      <TitleBaloo variant="xl">Nosso Cafés</TitleBaloo>

      <CoffeeListContainer>
        {coffeeList.map((coffeeItem) => {
          return <Card key={coffeeItem.id} data={coffeeItem} />
        })}
      </CoffeeListContainer>
    </CoffeeProductsContainer>
  )
}
