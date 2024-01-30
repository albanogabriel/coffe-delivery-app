import {
  AddToCartContainer,
  Background,
  CoffeeContent,
  CoffeeContentContainer,
  CoffeeListContainer,
} from './styles'

import { TitleBaloo } from '../Fonts/TitleBaloo'
import { TextRoboto } from '../Fonts/TextRoboto'
import { useContext, useState } from 'react'

import { CoffeeCard } from '../../reducers/coffeeCart/reducer'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Contador } from './Contador'
import { coffeeList } from '../../data'
import { ButtonShoppingCart } from '../Buttons/ButtonShoppingCart'

export function CoffeeCards() {
  const { addToCart, cart } = useContext(CoffeeContext)
  const [quantidade, setQuantidade] = useState(0)

  function handleAddToCart(coffeeCard: CoffeeCard) {
    const valorNumerico = parseFloat(coffeeCard.value.replace(',', '.')) // Converter a string para um número
    const valorArredondado = Number(valorNumerico.toFixed(2)) // Arredondar para duas casas decimais e converter de volta para número
    const total = quantidade * valorArredondado

    addToCart({
      quantidade,
      total,
      ...coffeeCard,
    })

    setQuantidade(0)
  }

  return (
    <div>
      <CoffeeListContainer>
        {coffeeList.map((coffeeCard) => {
          return (
            <Background key={coffeeCard.id}>
              <CoffeeContent>
                <CoffeeContentContainer>
                  <img src={coffeeCard.coffeeImg} alt="" />
                  <span>
                    {coffeeCard.coffeeType.map((type, index) => (
                      <div key={index}>
                        <TextRoboto variant="xs">{type}</TextRoboto>
                      </div>
                    ))}
                  </span>
                  <h2>{coffeeCard.title}</h2>
                  <TextRoboto variant="sm">{coffeeCard.description}</TextRoboto>
                </CoffeeContentContainer>

                <AddToCartContainer>
                  <div>
                    <span>R$</span>
                    <TitleBaloo variant="sm">{coffeeCard.value}</TitleBaloo>
                  </div>
                  <Contador onCountChange={setQuantidade} />
                  <ButtonShoppingCart
                    variant="cartAdd"
                    onClick={() => handleAddToCart(coffeeCard)}
                  />
                </AddToCartContainer>
              </CoffeeContent>
            </Background>
          )
        })}
      </CoffeeListContainer>

      <h1>carrinho de compra</h1>
      {cart.map((coffee) => {
        return (
          <div key={coffee.id}>
            <p>{coffee.title}</p>
            <p>{coffee.quantidade}</p>
            <p> R$ {coffee.total}</p>
          </div>
        )
      })}
    </div>
  )
}
