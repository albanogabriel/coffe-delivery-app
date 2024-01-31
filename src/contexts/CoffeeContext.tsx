import { ReactNode, createContext, useReducer } from 'react'
import {
  CoffeeCard,
  CoffeeCart,
  cyclesReducer,
} from '../reducers/coffeeCart/reducer'

import { addItemToCartAction } from '../reducers/coffeeCart/actions'

export interface CoffeeContextType {
  cart: CoffeeCart[]
  addToCart: (data: CoffeeCard) => void
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
  })

  const { cart } = carrinho

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

  return (
    <CoffeeContext.Provider value={{ addToCart, cart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
