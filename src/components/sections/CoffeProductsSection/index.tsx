import { CoffeCard } from '../../CoffeCard'
import { TitleBaloo } from '../../Fonts/TitleBaloo'
import { CoffeProductsContainer } from './styles'

export function CoffeProductsSection() {
  return (
    <CoffeProductsContainer>
      <TitleBaloo variant="xl">Nosso Cafés</TitleBaloo>
      <CoffeCard />
    </CoffeProductsContainer>
  )
}
