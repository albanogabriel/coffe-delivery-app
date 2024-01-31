import { Container, IconDivContainer } from './styles'

import mainBackground from '../../../../assets/mainBackground.svg'
import { Icon } from '../../../../components/Icons'

import cartIcon from '../../../../assets/icons/icons-gray-100/Type=shopping-cart-fill.svg'
import packageIcon from '../../../../assets/icons/icons-gray-100/Type=package-fill.svg'
import timeWatchIcon from '../../../../assets/icons/icons-gray-100/Type=timer-fill.svg'
import coffeeWarmIcon from '../../../../assets/icons/icons-gray-100/Type=coffee-fill.svg'

export function HeroSection() {
  return (
    <Container>
      <main>
        <div>
          <h1>Encontre o café perfeito para qualquerhora do dia</h1>
          <p>
            Com o coffeee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <IconDivContainer>
          <Icon
            color="yellowDark"
            icon={cartIcon}
            text="Compra Simples e segura"
          />
          <Icon
            color="grayDark"
            icon={packageIcon}
            text="Emabalagens mantém o café intacto"
          />
          <Icon
            color="yellow"
            icon={coffeeWarmIcon}
            text="O café chega fresquinho até você"
          />
          <Icon
            color="purple"
            icon={timeWatchIcon}
            text="Entrega rápida e rastreada"
          />
        </IconDivContainer>
      </main>

      <aside>
        <img src={mainBackground} alt="" />
      </aside>
    </Container>
  )
}
