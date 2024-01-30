import { useState, useEffect } from 'react'
import coffeeDeliveryLogo from '../../../assets/coffeeDeliveryLogo.svg'
import { SecundaryButton } from '../../Buttons/ButtonSecundary'
import { ButtonShoppingCart } from '../../Buttons/ButtonShoppingCart'
import { HeaderLayout } from './style'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY
      const scrollPositionTrigger = 50 // Ajustar conforme necessário
      setIsScrolled(scrollPosition > scrollPositionTrigger) // Verifica se a posição de rolagem ultrapassou o limite -> vai mudar a const para true
    }

    window.addEventListener('scroll', handleScroll)

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <img src={coffeeDeliveryLogo} alt="" />
      <div>
        <NavLink to="#location">
          <SecundaryButton variant="location">
            Florianópolis, SC
          </SecundaryButton>
        </NavLink>
        <NavLink to="/cart">
          <ButtonShoppingCart
            variant="cartView"
            itens={9}
            title={'ver carrinho'}
          />
        </NavLink>
      </div>
    </HeaderLayout>
  )
}
