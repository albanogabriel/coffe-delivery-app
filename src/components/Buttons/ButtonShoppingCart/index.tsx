import { ButtonHTMLAttributes } from 'react'

import shoppingCartSimpleIcon from '../../../assets/icons/ShoppingCartSimple.svg'
import cartViewIcon from '../../../assets/icons/cart-icon-orange.svg'
import { AddCartButton, ViewCartButton } from './styles'

interface ButtonShoppingCartType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'cartAdd' | 'cartView'
}

const hasItens = true

export function ButtonShoppingCart({
  variant,
  ...props
}: ButtonShoppingCartType) {
  if (variant === 'cartAdd') {
    return (
      <AddCartButton {...props}>
        <img src={shoppingCartSimpleIcon} alt="" />
      </AddCartButton>
    )
  } else if (variant === 'cartView') {
    return (
      <ViewCartButton {...props}>
        {hasItens ? <span>3</span> : null}
        <img src={cartViewIcon} alt="" />
      </ViewCartButton>
    )
  }
}
