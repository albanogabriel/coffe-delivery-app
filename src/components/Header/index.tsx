import { useState, useEffect } from 'react'
import coffeDeliveryLogo from '../../assets/coffeDeliveryLogo.svg'
import { SecundaryButton } from '../Buttons/ButtonSecundary'
import { ButtonShoppingCart } from '../Buttons/ButtonShoppingCart'
import { HeaderLayout } from './style'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY)
      const scrollPosition = window.scrollY
      const scrollPositionTrigger = 50 // Ajuste conforme necessário

      // Verifica se a posição de rolagem ultrapassou o limite
      setIsScrolled(scrollPosition > scrollPositionTrigger)
    }

    window.addEventListener('scroll', handleScroll)

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <img src={coffeDeliveryLogo} alt="" />
      <div>
        <NavLink to="#changeTheLocation">
          <SecundaryButton variant="location">
            Florianópolis, SC
          </SecundaryButton>
        </NavLink>

        <NavLink to="/cart">
          <ButtonShoppingCart variant="cartView" itens={99} />
        </NavLink>
      </div>
    </HeaderLayout>
  )
}
