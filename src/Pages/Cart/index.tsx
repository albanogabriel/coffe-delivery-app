import { useContext, useState } from 'react'
import {
  Container,
  InputFillSize,
  InputFixedSize,
  PaymentMethodsContainer,
  SelectUF,
} from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import styles from './styles.module.css'
import { TitleBaloo } from '../../components/Fonts/TitleBaloo'

import locationPinOrange from '../../assets/location-pin-orange.svg'
import dollarSignIcon from '../../assets/dollarsign-purple.svg'

import { TextRoboto } from '../../components/Fonts/TextRoboto'
import { CoffeeOnCart } from '../../components/CoffeeOnCart'

export function Cart() {
  const { cart, cartIsEmpty } = useContext(CoffeeContext)
  const [tipoDePagamento, setTipoDePagametento] = useState('')

  return (
    <>
      {cartIsEmpty ? (
        <Container>
          <h1>Nosso carrinho está vazio</h1>
        </Container>
      ) : (
        <form>
          <Container>
            <div className={styles.completeOrderContent}>
              <TitleBaloo variant="sm">Complete seu pedido</TitleBaloo>
              <div className={styles.completeOrder}>
                <div className={styles.enderecoDeEntregaDiv}>
                  <span className={styles.locationPinSpan}>
                    <img src={locationPinOrange} alt="" />
                  </span>
                  <div>
                    <TextRoboto variant="md">Endereço de entrega</TextRoboto>
                    <TextRoboto variant="sm">
                      Informe o endereço de entrega
                    </TextRoboto>
                  </div>
                </div>
                <div className={styles['form-container']}>
                  <InputFixedSize placeholder="CEP" />
                  <InputFillSize placeholder="Rua" />
                  <div className={styles.flex}>
                    <InputFixedSize placeholder="Número" />
                    <InputFillSize placeholder="Complemento" />
                  </div>
                  <div className={styles.flex}>
                    <InputFixedSize placeholder="Bairro" />
                    <InputFillSize placeholder="Cidade" />
                    <SelectUF name="funcao" id="funcao">
                      <option value="UF">UF</option>
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>
                    </SelectUF>
                  </div>
                </div>
              </div>

              <div className={styles.completeOrder}>
                <div className={styles.pagamentoDiv}>
                  <div className={styles.pagamento}>
                    <span className={styles.locationPinSpan}>
                      <img src={dollarSignIcon} alt="" />
                    </span>
                    <div>
                      <TextRoboto variant="md">Pagamento</TextRoboto>
                      <TextRoboto variant="sm">
                        O pagamento é feito na entrega. Escolha a forma de
                        pagamento
                      </TextRoboto>
                    </div>
                  </div>
                  <PaymentMethodsContainer>
                    <input
                      // {...register('pagamento')}
                      type="text"
                      value={tipoDePagamento}
                      placeholder={tipoDePagamento}
                    />
                    <button
                      onClick={() => {
                        event?.preventDefault()
                        setTipoDePagametento('crédito')
                      }}
                      className={tipoDePagamento === 'crédito' ? 'active' : ''}
                    >
                      crédito
                    </button>
                    <button
                      onClick={() => {
                        event?.preventDefault()
                        setTipoDePagametento('débito')
                      }}
                      className={tipoDePagamento === 'débito' ? 'active' : ''}
                    >
                      débito
                    </button>
                    <button
                      onClick={() => {
                        event?.preventDefault()
                        setTipoDePagametento('pix')
                      }}
                      className={tipoDePagamento === 'pix' ? 'active' : ''}
                    >
                      pix
                    </button>
                    <button
                      onClick={() => {
                        event?.preventDefault()
                        setTipoDePagametento('dinheiro')
                      }}
                      className={tipoDePagamento === 'dinheiro' ? 'active' : ''}
                    >
                      Dinheiro
                    </button>
                  </PaymentMethodsContainer>
                </div>
              </div>
            </div>

            <div className={styles.completeOrderContent}>
              <TitleBaloo variant="sm">Cafés selecionados</TitleBaloo>
              <div className={styles.cartCheckout}>
                {cart.map((item) => {
                  return <CoffeeOnCart key={item.id} data={item} />
                })}
              </div>
            </div>
          </Container>
        </form>
      )}
    </>
  )
}
