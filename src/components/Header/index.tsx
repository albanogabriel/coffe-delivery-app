import coffeDeliveryLogo from '../../assets/coffeDeliveryLogo.svg'
import { PrimaryButton, SecundaryButton } from '../Buttons/Button'
import { HeaderLayout } from './style'

import trashIcon from '../../assets/icons/trash-purple-icon.svg'

export function Header() {
  return (
    <HeaderLayout>
      <img src={coffeDeliveryLogo} alt="" />
      <div>
        <div>
          <span>icon</span>
          <p>Porto Alegre, RS</p>
        </div>
        <button>
          <span>Cart</span>
        </button>
        <PrimaryButton>LABEL</PrimaryButton>
        <SecundaryButton icon={trashIcon}>LABEL</SecundaryButton>
      </div>
    </HeaderLayout>
  )
}
