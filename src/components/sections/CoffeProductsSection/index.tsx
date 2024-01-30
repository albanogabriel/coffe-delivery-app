import { CoffeeCards } from '../../CoffeeCards'
import { TitleBaloo } from '../../Fonts/TitleBaloo'
import { CoffeeProductsContainer } from './styles'

export function CoffeeProductsSection() {
  return (
    <CoffeeProductsContainer>
      <TitleBaloo variant="xl">Nosso Cafés</TitleBaloo>
      <CoffeeCards />
    </CoffeeProductsContainer>
  )
}
