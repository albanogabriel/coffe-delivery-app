import { ActionTypes } from './actions'

export interface CoffeeCard {
  id: number
  coffeeImg: string
  coffeeType: string[]
  title: string
  description: string
  value: string
  quantidade?: number
  total?: number
}

export interface CoffeeCart {
  id: number
  coffeeImg: string
  title: string
  value: string
  quantidade?: number
  total?: number
}

export interface CoffeeState {
  cart: CoffeeCart[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload.coffee],
      }
    default:
      return state
  }
}
