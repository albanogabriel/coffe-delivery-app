import { CoffeeCart } from '../../reducers/coffeeCart/reducer'
import { SecundaryButton } from '../Buttons/ButtonSecundary'
import { TitleBaloo } from '../Fonts/TitleBaloo'

import styles from './style.module.css'

import {
  CoffeImg,
  CoffeeItemContainer,
  Contador,
  ContadorAndButton,
  ImgTitleAndContador,
  ItemContainer,
  Line,
  StyledMinus,
  StyledPlus,
  Title,
  TitleAndContador,
} from './style'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

interface Props {
  data: CoffeeCart
}

export function CoffeeOnCart({ data }: Props) {
  const { decreaseItemOnCart, increaseItemOnCart, deleteItemOnCart } =
    useContext(CoffeeContext)

  const total = data.total
  const NumberFormattedToCurrency = total?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleDecrease() {
    const quantidade = data.quantidade

    if (quantidade ?? 0 > 1) {
      // Se quantidade for undefined, assume o valor 0
      decreaseItemOnCart(data.id)
    }
  }

  function handleIncrease() {
    increaseItemOnCart(data.id)
  }

  function handleDeleteItem() {
    deleteItemOnCart(data.id)
  }
  return (
    <ItemContainer>
      <CoffeeItemContainer>
        <ImgTitleAndContador>
          <CoffeImg src={data.coffeeImg} alt="" />
          <TitleAndContador>
            <Title>{data.title}</Title>
            <ContadorAndButton>
              <Contador>
                <StyledMinus onClick={handleDecrease}>-</StyledMinus>
                <span>{data.quantidade}</span>
                <StyledPlus onClick={handleIncrease}>+</StyledPlus>
              </Contador>
              <SecundaryButton
                onClick={handleDeleteItem}
                variant="trash"
                className={styles.text}
                title="remover"
              />
            </ContadorAndButton>
          </TitleAndContador>
        </ImgTitleAndContador>
        <TitleBaloo variant="sm">{NumberFormattedToCurrency}</TitleBaloo>
      </CoffeeItemContainer>
      <Line />
    </ItemContainer>
  )
}
