import { useContext } from 'react'
import { TextRoboto } from '../../components/Fonts/TextRoboto'
import { TitleBaloo } from '../../components/Fonts/TitleBaloo'
import {
  Container,
  InfoAndImg,
  InfoItem,
  InfoItemText,
  InfoItemBorderContainer,
} from './style'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import motoBoyImg from '../../assets/motoboy.svg'
import pinCirclePurple from '../../assets/circleIcons/pinCirclePurple.svg'
import chronometerYellow from '../../assets/circleIcons/chronometerYellow.svg'
import moneyDarkYellow from '../../assets/circleIcons/MoneyDarkYellow.svg'
import valorTotal from '../../assets/circleIcons/valorTotalGreen.svg'

import styles from './style.module.css'

export function OrderConfirmedPage() {
  const { checkoutItens } = useContext(CoffeeContext)

  const checkoutItensLastItem = checkoutItens[checkoutItens.length - 1] // irá retornar somente o último item do array de objetos

  const totalFormatted = checkoutItensLastItem.totalPedido?.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    },
  )

  return (
    <Container>
      <div>
        <div>
          <TitleBaloo variant="lg">Uhu! Pedido confirmado</TitleBaloo>
          <TextRoboto variant="md">
            Agora é só aguardar que logo o café chegará até você
          </TextRoboto>
        </div>
      </div>
      <InfoAndImg>
        <InfoItemBorderContainer>
          <InfoItem>
            <img src={pinCirclePurple} alt="" />
            <InfoItemText>
              <span>
                Entrega em{' '}
                <span className={styles.bold}>
                  {checkoutItensLastItem.endereco},{' '}
                  {checkoutItensLastItem.numero}
                </span>
              </span>
              <span>
                {checkoutItensLastItem.bairro} - {checkoutItensLastItem.cidade}
              </span>
            </InfoItemText>
          </InfoItem>
          <InfoItem>
            <img src={chronometerYellow} alt="" />
            <InfoItemText>
              <span>Previsão de entrega </span>
              <span>
                <span className={styles.bold}>20 - 30 minutos</span>
              </span>
            </InfoItemText>
          </InfoItem>
          <InfoItem>
            <img src={moneyDarkYellow} alt="" />
            <InfoItemText>
              <span>Método de pagamento </span>
              <span className={styles.bold}>
                {checkoutItensLastItem.metodoPagamento}
              </span>
            </InfoItemText>
          </InfoItem>
          <InfoItem>
            <img src={valorTotal} alt="" />
            <InfoItemText>
              <span>Valor total </span>
              <span className={styles.bold}>{totalFormatted}</span>
            </InfoItemText>
          </InfoItem>
        </InfoItemBorderContainer>

        <img src={motoBoyImg} alt="" />
      </InfoAndImg>
    </Container>
  )
}
