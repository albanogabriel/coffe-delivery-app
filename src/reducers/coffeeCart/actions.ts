import { CoffeeCart } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

export function addItemToCartAction(coffee: CoffeeCart) {
  console.log({ actioncoffee: coffee })
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      coffee,
    },
  }
}
