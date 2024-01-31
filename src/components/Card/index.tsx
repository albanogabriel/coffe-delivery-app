import { useContext, useState } from 'react'
import { ButtonShoppingCart } from '../Buttons/ButtonShoppingCart'
import { TextRoboto } from '../Fonts/TextRoboto'
import { TitleBaloo } from '../Fonts/TitleBaloo'
import {
  Background,
  AddToCartContainer,
  Content,
  ContentContainer,
} from './style'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { CoffeeCard } from '../../reducers/coffeeCart/reducer'

interface CardProps {
  data: CoffeeCard
}

export function Card({ data }: CardProps) {
  const { addToCart } = useContext(CoffeeContext)
  const [quantidade, setQuantidade] = useState(1)

  function handleIncrement() {
    setQuantidade(quantidade + 1)
  }

  function handleDecrement() {
    setQuantidade(quantidade > 1 ? quantidade - 1 : quantidade)
  }

  function handleAddToCart(data: CoffeeCard) {
    const valorNumerico = parseFloat(data.price.replace(',', '.')) // Converter a string para um número
    const valorArredondado = Number(valorNumerico.toFixed(2)) // Arredondar para duas casas decimais e converter de volta para número
    const total = quantidade * valorArredondado

    if (quantidade > 0) {
      addToCart({
        quantidade,
        total,
        ...data,
      })
    } else {
      alert('Você não adicinou nenhum item')
    }

    setQuantidade(1)
  }

  return (
    <Background key={data.id}>
      <Content>
        <ContentContainer>
          <img src={data.coffeeImg} alt="" />
          <span>
            {data.coffeeType.map((type, index) => (
              <div key={index}>
                <TextRoboto variant="xs">{type}</TextRoboto>
              </div>
            ))}
          </span>
          <h2>{data.title}</h2>
          <TextRoboto variant="sm">{data.description}</TextRoboto>
        </ContentContainer>

        <AddToCartContainer>
          <div>
            <span>R$</span>
            <TitleBaloo variant="sm">{data.price}</TitleBaloo>
          </div>
          <div>
            <span onClick={handleDecrement}>-</span>
            <span>{quantidade}</span>
            <span onClick={handleIncrement}>+</span>
          </div>
          <ButtonShoppingCart
            variant="cartAdd"
            onClick={() => handleAddToCart(data)}
          />
        </AddToCartContainer>
      </Content>
    </Background>
  )
}
