import { useState, useEffect, useContext } from 'react'
import coffeeDeliveryLogo from '../../../../assets/coffeeDeliveryLogo.svg'
import { SecundaryButton } from '../../../../components/Buttons/ButtonSecundary'
import { ButtonShoppingCart } from '../../../../components/Buttons/ButtonShoppingCart'
import { HeaderLayout } from './style'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function Header() {
  const { cart } = useContext(CoffeeContext)

  const cartItensAmount = cart
    .map((itens) => itens.quantidade ?? 0) // ex: [1, 4, 5, 6] -> retorna um array com apenas com itens.quantidade(total que foi adicionado) / item.quantidade ?? 0 significa que se item.quantidade for null ou undefined, será retornado 0.
    .reduce((acc, numero) => acc + numero, 0) // ex: 0 + 1 / 1 + 4 / 5 + 6 ... ->  soma com um reduce, todas os valores do array gerado pelo map acima

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

  function handleUpdateCart() {}

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>
      <div>
        <NavLink to="#location">
          <SecundaryButton variant="location">
            Florianópolis, SC
          </SecundaryButton>
        </NavLink>
        <NavLink to="/cart">
          <ButtonShoppingCart
            variant="cartView"
            itens={cartItensAmount}
            title={'ver carrinho'}
            onClick={handleUpdateCart}
          />
        </NavLink>
      </div>
    </HeaderLayout>
  )
}
