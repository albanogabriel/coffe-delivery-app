import { ReactNode, createContext, useReducer } from 'react'
import {
  CheckoutItens,
  CoffeeCard,
  CoffeeCart,
  cyclesReducer,
} from '../reducers/coffeeCart/reducer'

import {
  addItemToCartAction,
  checkouItemAction,
} from '../reducers/coffeeCart/actions'

export interface CoffeeContextType {
  cart: CoffeeCart[]
  checkoutItens: CheckoutItens[]
  addToCart: (data: CoffeeCard) => void
  cartIsEmpty: boolean
  checkoutProducts: (data: CheckoutItens) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [carrinho, dispatch] = useReducer(cyclesReducer, {
    cart: [],
    checkoutItens: [],
  })

  const { cart, checkoutItens } = carrinho

  const cartIsEmpty = cart.length === 0

  function addToCart(data: CoffeeCard) {
    const itemNoCarrinho = {
      id: data.id,
      coffeeImg: data.coffeeImg,
      title: data.title,
      price: data.price,
      quantidade: data.quantidade,
      total: data.total,
    }

    dispatch(addItemToCartAction(itemNoCarrinho))
  }

  function checkoutProducts(data: CheckoutItens) {
    const checkoutItens = {
      ...data,
    }

    dispatch(checkouItemAction(checkoutItens))
  }

  return (
    <CoffeeContext.Provider
      value={{ addToCart, cart, cartIsEmpty, checkoutProducts, checkoutItens }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
