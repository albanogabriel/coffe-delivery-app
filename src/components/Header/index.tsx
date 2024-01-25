import coffeDeliveryLogo from '../../assets/coffeDeliveryLogo.svg'
import { SecundaryButton } from '../Buttons/ButtonSecundary'
import { ButtonShoppingCart } from '../Buttons/ButtonShoppingCart'
import { HeaderLayout } from './style'

export function Header() {
  return (
    <HeaderLayout>
      <img src={coffeDeliveryLogo} alt="" />
      <div>
        <SecundaryButton variant="location">Florianópolis, SC</SecundaryButton>
        <ButtonShoppingCart variant="cartView" />
      </div>
    </HeaderLayout>
  )
}
