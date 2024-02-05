import { CheckoutItens, CoffeeCart } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CHECKOUT_ITEMS = 'CHECKOUT_ITEMS',
}

export function addItemToCartAction(coffee: CoffeeCart) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function checkouItemAction(checkoutItens: CheckoutItens) {
  return {
    type: ActionTypes.CHECKOUT_ITEMS,
    payload: {
      checkoutItens,
    },
  }
}
