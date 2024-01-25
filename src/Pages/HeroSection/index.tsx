import { Container } from './styles'

import mainBackground from '../../assets/mainBackground.svg'

export function HeroSection() {
  return (
    <Container>
      <main>
        <h1>Encontre o café perfeito para qualquerhora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </main>
      <aside>
        <img src={mainBackground} alt="" />
      </aside>
    </Container>
  )
}
