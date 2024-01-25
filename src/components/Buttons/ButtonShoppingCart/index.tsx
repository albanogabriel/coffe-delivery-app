import { ButtonHTMLAttributes } from 'react'

import shoppingCartSimpleIcon from '../../../assets/icons/ShoppingCartSimple.svg'
import cartViewIcon from '../../../assets/icons/cart-icon-orange.svg'
import { AddCartButton, ViewCartButton } from './styles'

interface ButtonShoppingCartType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'cartAdd' | 'cartView'
  itens: number
}

export function ButtonShoppingCart({
  variant,
  itens,
  ...props
}: ButtonShoppingCartType) {
  if (variant === 'cartAdd') {
    return (
      <AddCartButton {...props}>
        <img src={shoppingCartSimpleIcon} alt="" />
      </AddCartButton>
    )
  } else if (variant === 'cartView') {
    const hasItens = itens > 0
    const itsBiggerThen99 = itens >= 99
    const displayValue = itsBiggerThen99 ? '99' : itens

    return (
      <ViewCartButton {...props}>
        {hasItens ? <span>{displayValue}</span> : null}
        <img src={cartViewIcon} alt="" />
      </ViewCartButton>
    )
  }
}
