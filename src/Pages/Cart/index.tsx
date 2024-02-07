import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  ButtonCheckout,
  ChoseYourPaymentMethod,
  CompleteOrder,
  ConfirmCheckoutSection,
  Container,
  InputContainer,
  InputFillSize,
  InputFixedSize,
  PaymentMethodsContainer,
  SelectUF,
} from './styles'

import styles from './styles.module.css'

import { CoffeeContext } from '../../contexts/CoffeeContext'

import { TitleBaloo } from '../../components/Fonts/TitleBaloo'
import { TextRoboto } from '../../components/Fonts/TextRoboto'
import { CoffeeOnCart } from '../../components/CoffeeOnCart'

import locationPinOrange from '../../assets/location-pin-orange.svg'
import dollarSignIcon from '../../assets/dollarsign-purple.svg'
import creditCardIcon from '../../assets/paymentMethods/creditCardIcon.svg'
import debitoIcon from '../../assets/paymentMethods/transferMoneyIcon.svg'
import moneyIcon from '../../assets/paymentMethods/MoneyIcon.svg'

import {
  CheckoutSchema,
  CheckoutSchemaType,
} from '../../schemas/checkoutForm.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutItens } from '../../reducers/coffeeCart/reducer'
import { useNavigate } from 'react-router-dom'
import { CartEmptyPage } from './CartEmptyPage'

export function Cart() {
  const { cart, cartIsEmpty, checkoutProducts } = useContext(CoffeeContext)
  const [tipoDePagamento, setTipoDePagamento] = useState('')

  const navigate = useNavigate()

  // const tipoDePagamentoExists = tipoDePagamento.length > 0

  const frete = 3.5
  const freteFormatted = frete.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalDeItens = cart
    .map((itens) => itens.total ?? 0) // ex: [1, 4, 5, 6] -> retorna um array com apenas com itens.quantidade(total que foi adicionado) / item.quantidade ?? 0 significa que se item.quantidade for null ou undefined, será retornado 0.
    .reduce((acc, numero) => acc + numero, 0) // ex: 0 + 1 / 1 + 4 / 5 + 6 ... ->  soma com um reduce, todas os valores do array gerado pelo map acima

  const totalDeItensFormatted = totalDeItens.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalItensAndFrete = frete + totalDeItens
  const totalDeItensAndFreteFormatted = totalItensAndFrete.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    },
  )

  const {
    register,
    handleSubmit,
    setValue,
    // reset,
    // watch,
    formState: { errors },
  } = useForm<CheckoutSchemaType>({
    resolver: zodResolver(CheckoutSchema),
  })

  function checkoutCoffeeItens(data: CheckoutItens) {
    // 1 - direto do useState --> pega a const tipoDePagamento --> const pagamento = tipoDePagamento --> joga dentro do checkoutProducts ({ ...data , pagamento })
    // 2 - Cria um booleando --> const tipoDePagamentoExists = tipoDePagamento.length > 0 --> existe alguma string dentro da const tipoDePagamentoExists ? se sim, renderiza o input --> { tipoDePagamentoExists ? <input value={tipoDePagamento}><input>}
    // 3 - Método setValue --> do próprio useForm, atribui um valor direto ao objeto de nosso Schema --> setValue(1º param , 2º param) --> 1º param = atributo/propriedade , 2º param = 'valor que vai passar' --> exemplo: setValue('metodoPagamento', 'Crédito') --> atribui Crédito ao metodo de pagamento
    console.log(JSON.stringify(data, null, 2))
    const pagamento = tipoDePagamento
    const totalItens = totalDeItens
    const totalPedido = totalDeItens + frete

    checkoutProducts({
      ...data,
      pagamento,
      totalItens,
      totalPedido,
    })

    navigate('/orderconfirmed')
  }

  const hasAdressErrors =
    errors.UF ||
    errors.bairro ||
    errors.cep ||
    errors.cidade ||
    errors.complemento ||
    errors.endereco

  return (
    <>
      {cartIsEmpty ? (
        <CartEmptyPage />
      ) : (
        <form onSubmit={handleSubmit(checkoutCoffeeItens)}>
          <Container>
            <div className={styles.completeOrderContent}>
              <TitleBaloo variant="sm">Complete seu pedido</TitleBaloo>
              <CompleteOrder className={hasAdressErrors ? 'errorGlobal' : ''}>
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
                  <InputContainer>
                    <InputFixedSize
                      {...register('cep')}
                      type="number"
                      placeholder="CEP"
                      className={errors.cep ? 'error' : ''}
                    />
                    {errors.cep && (
                      <span className={styles.alertInput}>
                        {errors.cep.message}
                      </span>
                    )}
                  </InputContainer>
                  <InputContainer>
                    <InputFillSize
                      {...register('endereco')}
                      placeholder="Endereço"
                      className={errors.endereco ? 'error' : ''}
                    />
                    {errors.endereco && (
                      <span className={styles.alertInput}>
                        {errors.endereco.message}
                      </span>
                    )}
                  </InputContainer>
                  <div className={styles.flex}>
                    <InputContainer>
                      <InputFixedSize
                        {...register('numero')}
                        placeholder="Número"
                        className={errors.numero ? 'error' : ''}
                      />
                      {errors.numero && (
                        <span className={styles.alertInput}>
                          {errors.numero.message}
                        </span>
                      )}
                    </InputContainer>
                    <InputContainer>
                      <InputFillSize
                        {...register('complemento')}
                        placeholder="Complemento"
                      />
                      {errors.complemento && (
                        <span className={styles.alertInput}>
                          {errors.complemento.message}
                        </span>
                      )}
                    </InputContainer>
                  </div>
                  <div className={styles.flex}>
                    <InputContainer>
                      <InputFixedSize
                        {...register('bairro')}
                        placeholder="Bairro"
                        className={errors.bairro ? 'error' : ''}
                      />
                      {errors.bairro && (
                        <span className={styles.alertInput}>
                          {errors.bairro.message}
                        </span>
                      )}
                    </InputContainer>
                    <div>
                      <InputFillSize
                        {...register('cidade')}
                        placeholder="Cidade"
                        className={errors.cidade ? 'error' : ''}
                      />
                      {errors.cidade && (
                        <span className={styles.alertInput}>
                          {errors.cidade.message}
                        </span>
                      )}
                    </div>
                    <InputContainer>
                      <SelectUF
                        {...register('UF')}
                        name="UF"
                        id="UF"
                        className={errors.UF ? 'error' : ''}
                      >
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
                      {errors.UF && (
                        <span className={styles.alertInput}>
                          {errors.UF.message}
                        </span>
                      )}
                    </InputContainer>
                  </div>
                </div>
              </CompleteOrder>

              <ChoseYourPaymentMethod
                className={errors.metodoPagamento ? 'errorPayment' : ''}
              >
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
                    <div>
                      {/* estou condicionando a montagem do input com o seu value={tipoDepagamento}, por conta das closures. ou seja, somente se tiver algum valor no estado, ele que vai montar, isso garantirá que exista algum valor em value={tipoDePagamento} e não ''. obs: descobrir como fazer isso da forma correta */}
                      {/* {tipoDePagamentoExists ? (
                        <input
                          readOnly
                          type="text"
                          value={tipoDePagamento}
                          {...register('metodoPagamento')}
                        />
                      ) : null} */}
                    </div>
                    <div className={styles['flex-column']}>
                      <div className={styles.flex}>
                        <button
                          onClick={(event) => {
                            event.preventDefault()
                            setTipoDePagamento('Crédito')
                            setValue('metodoPagamento', 'Crédito')
                          }}
                          className={
                            tipoDePagamento === 'Crédito' ? 'isActive' : ''
                          }
                        >
                          <img src={creditCardIcon} alt="" />
                          Cartão de Crédito
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault()
                            setTipoDePagamento('Débito')
                            setValue('metodoPagamento', 'Débito')
                          }}
                          className={
                            tipoDePagamento === 'Débito' ? 'isActive' : ''
                          }
                        >
                          <img src={debitoIcon} alt="" />
                          Cartão de Débito
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault()
                            setTipoDePagamento('Dinheiro')
                            setValue('metodoPagamento', 'Dinheiro')
                          }}
                          className={
                            tipoDePagamento === 'Dinheiro' ? 'isActive' : ''
                          }
                        >
                          <img src={moneyIcon} alt="" />
                          Dinheiro
                        </button>
                      </div>
                      <div className={styles.errorMetodoPagamento}>
                        {errors.metodoPagamento && (
                          <span className={styles.alertInput}>
                            Selecione um método de pagamento
                          </span>
                        )}
                      </div>
                    </div>
                  </PaymentMethodsContainer>
                </div>
              </ChoseYourPaymentMethod>
            </div>

            <div className={styles.selectedCoffes}>
              <TitleBaloo variant="sm">Cafés selecionados</TitleBaloo>
              <div className={styles.cartCheckout}>
                {cart.map((item) => {
                  return <CoffeeOnCart key={item.id} data={item} />
                })}
                <ConfirmCheckoutSection>
                  <div className={styles.flexSpaceBetween}>
                    <TextRoboto variant="sm">total de itens</TextRoboto>
                    <TextRoboto variant="sm">
                      {totalDeItensFormatted}
                    </TextRoboto>
                  </div>
                  <div className={styles.flexSpaceBetween}>
                    <TextRoboto variant="sm">Entrega</TextRoboto>
                    <TextRoboto variant="sm">{freteFormatted}</TextRoboto>
                  </div>
                  <div className={styles.flexSpaceBetween}>
                    <TextRoboto className={styles.bold} variant="lg">
                      <p className={styles.bold}>Total</p>
                    </TextRoboto>
                    <TitleBaloo variant="md">
                      <p className={styles.bold}>
                        {totalDeItensAndFreteFormatted}
                      </p>
                    </TitleBaloo>
                  </div>

                  <ButtonCheckout type="submit">
                    Confirmar Pedido
                  </ButtonCheckout>
                </ConfirmCheckoutSection>
              </div>
            </div>
          </Container>
        </form>
      )}
    </>
  )
}
