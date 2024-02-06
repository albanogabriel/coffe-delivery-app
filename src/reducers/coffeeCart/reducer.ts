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

export interface CheckoutItens {
  cep: string
  endereco: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  UF: string
  metodoPagamento?: string
  pagamento?: string
  totalItens?: number
  totalPedido?: number
}

export interface CoffeeState {
  cart: CoffeeCart[]
  checkoutItens: CheckoutItens[]
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

    case ActionTypes.CHECKOUT_ITEMS:
      return {
        ...state,
        cart: [],
        checkoutItens: [...state.checkoutItens, action.payload.checkoutItens],
      }
    case ActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          const quantidade = item.quantidade || 0

          if (item.id === action.payload.id) {
            return {
              ...item,
              quantidade: quantidade - 1,
              total:
                (quantidade - 1) *
                Number(parseFloat(item.price.replace(',', '.'))),
            }
          } else {
            return item
          }
        }),
      }
    case ActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            const quantidade = item.quantidade || 0
            const price = Number(parseFloat(item.price.replace(',', '.')))

            return {
              ...item,
              quantidade: quantidade + 1,
              total: (quantidade + 1) * price,
            }
          } else {
            return item
          }
        }),
      }
    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload.id
        }),
      }
    default:
      return state
  }
}
