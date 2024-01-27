import { ButtonHTMLAttributes } from 'react'

import shoppingCartSimpleIcon from '../../../assets/icons/icons-gray-100/Type=shopping-cart-fill.svg'
import cartViewIcon from '../../../assets/icons/cart-orange-icon.svg'
import { AddCartButton, ViewCartButton } from './styles'

interface ButtonShoppingCartType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'cartAdd' | 'cartView'
  itens?: number | undefined
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
    const hasItens = itens && itens > 0
    const itsBiggerThen99 = itens && itens >= 99
    const displayValue = itsBiggerThen99 ? '99' : itens

    return (
      <ViewCartButton {...props}>
        {hasItens ? <span>{displayValue}</span> : null}
        <img src={cartViewIcon} alt="" />
      </ViewCartButton>
    )
  }
}
