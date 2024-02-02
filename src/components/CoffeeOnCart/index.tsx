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
  Title,
  TitleAndContador,
} from './style'

interface Props {
  data: CoffeeCart
}

export function CoffeeOnCart({ data }: Props) {
  return (
    <ItemContainer>
      <CoffeeItemContainer>
        <ImgTitleAndContador>
          <CoffeImg src={data.coffeeImg} alt="" />
          <TitleAndContador>
            <Title>{data.title}</Title>
            <ContadorAndButton>
              <Contador>
                <span>-</span>
                <span>{data.quantidade}</span>
                <span>+</span>
              </Contador>
              <SecundaryButton
                variant="trash"
                className={styles.text}
                title="remover"
              />
            </ContadorAndButton>
          </TitleAndContador>
        </ImgTitleAndContador>
        <TitleBaloo variant="sm">R$ {data.total}</TitleBaloo>
      </CoffeeItemContainer>
      <Line />
    </ItemContainer>
  )
}
