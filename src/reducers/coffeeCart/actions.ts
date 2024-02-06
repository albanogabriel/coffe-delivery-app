import { CheckoutItens, CoffeeCart } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CHECKOUT_ITEMS = 'CHECKOUT_ITEMS',
  DECREASE_ITEM = 'DECREASE_ITEM',
  INCREASE_ITEM = 'INCREASE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
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

export function decreaseItemOnCartAction(id: number) {
  return {
    type: ActionTypes.DECREASE_ITEM,
    payload: {
      id,
    },
  }
}

export function increaseItemOnCartAction(id: number) {
  return {
    type: ActionTypes.INCREASE_ITEM,
    payload: {
      id,
    },
  }
}

export function deleteItemOnCartAction(id: number) {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: {
      id,
    },
  }
}
