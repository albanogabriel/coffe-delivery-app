import { CoffeeProductsSection } from './sections/CoffeProductsSection'
import { HeroSection } from './sections/HeroSection'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <HeroSection />
      <CoffeeProductsSection />
    </Container>
  )
}
