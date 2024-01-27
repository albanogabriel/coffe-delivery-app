import { ButtonShoppingCart } from '../Buttons/ButtonShoppingCart'
import {
  AddToCartContainer,
  Background,
  CoffeContent,
  CoffeContentContainer,
  CoffeListContainer,
  HowManyAddToCartContainer,
} from './styles'

import coffeExpressoTradicional from '../../assets/coffe/expresso-tradicional.svg'
import coffeAmericano from '../../assets/coffe/americano.svg'
import coffeExpressoCremoso from '../../assets/coffe/expresso-cremoso.svg'
import coffeExpressoGelado from '../../assets/coffe/expresso-gelado.svg'
import coffeCafeComLeite from '../../assets/coffe/cafe-com-leite.svg'
import { TitleBaloo } from '../Fonts/TitleBaloo'
import { TextRoboto } from '../Fonts/TextRoboto'
import { useState } from 'react'

const coffeList = [
  {
    id: 1,
    coffeImg: coffeExpressoTradicional,
    coffeType: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '6,90',
  },
  {
    id: 2,
    coffeImg: coffeAmericano,
    coffeType: ['TRADICIONAL'],
    title: 'Café Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '9,90',
  },
  {
    id: 3,
    coffeImg: coffeExpressoCremoso,
    coffeType: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '12,90',
  },
  {
    id: 4,
    coffeImg: coffeExpressoGelado,
    coffeType: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Cremoso',
    description: 'Bebida Preparada com café expresso e cubos de gelo',
    value: '11,90',
  },
  {
    id: 5,
    coffeImg: coffeCafeComLeite,
    coffeType: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '13,90',
  },
]

export function CoffeCard() {
  const [addToCart, setAddToCart] = useState(1)

  function onSubtmit() {
    console.log(addToCart)
  }

  return (
    <div>
      <CoffeListContainer>
        {coffeList.map((coffeCard) => {
          return (
            <Background key={coffeCard.id}>
              <CoffeContent>
                <CoffeContentContainer>
                  <img src={coffeCard.coffeImg} alt="" />
                  <span>
                    {coffeCard.coffeType.map((type, index) => (
                      <div key={index}>
                        <TextRoboto variant="xs">{type}</TextRoboto>
                      </div>
                    ))}
                  </span>
                  <h2>{coffeCard.title}</h2>
                  <TextRoboto variant="sm">{coffeCard.description}</TextRoboto>
                </CoffeContentContainer>

                <AddToCartContainer>
                  <div>
                    <span>R$</span>
                    <TitleBaloo variant="lg">{coffeCard.value}</TitleBaloo>
                  </div>
                  <HowManyAddToCartContainer>
                    <div>
                      <span
                        onClick={() =>
                          setAddToCart((prevValue) =>
                            prevValue > 1 ? prevValue - 1 : 1,
                          )
                        }
                      >
                        -
                      </span>
                      <span>{addToCart}</span>
                      <span onClick={() => setAddToCart(addToCart + 1)}>+</span>
                    </div>
                    <ButtonShoppingCart variant="cartAdd" onClick={onSubtmit} />
                  </HowManyAddToCartContainer>
                </AddToCartContainer>
              </CoffeContent>
            </Background>
          )
        })}
      </CoffeListContainer>
    </div>
  )
}
