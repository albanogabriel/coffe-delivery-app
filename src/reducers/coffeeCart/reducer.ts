import { ActionTypes } from './actions'

export interface CoffeeCard {
  id: number
  coffeeImg: string
  coffeeType: string[]
  title: string
  description: string
  price: string
  quantidade?: number
  total?: number
}

export interface CoffeeCart {
  id: number
  coffeeImg: string
  title: string
  price: string
  quantidade?: number
  total?: number
}

export interface CoffeeState {
  cart: CoffeeCart[]
}

let existingCoffee: CoffeeCart | undefined
let updatedCart: CoffeeCart[]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      existingCoffee = state.cart.find(
        (item) => item.id === action.payload.coffee.id,
      )

      if (existingCoffee) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.coffee.id
            ? {
                ...item,
                quantidade: item.quantidade + action.payload.coffee.quantidade,
                total:
                  (item.quantidade + action.payload.coffee.quantidade) *
                  Number(parseFloat(item.price.replace(',', '.'))),
              }
            : item,
        )
        return {
          ...state,
          cart: updatedCart,
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.coffee],
        }
      }

    default:
      return state
  }
}
