import { CoffeProductsSection } from '../../components/sections/CoffeProductsSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <HeroSection />
      <CoffeProductsSection />
    </Container>
  )
}
