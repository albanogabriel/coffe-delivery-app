import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  padding: 160px 60px;
  gap: 32px;
`

export const CompleteOrder = styled.div`
  border-radius: 6px;
  background-color: rgba(144, 144, 144, 0.1);
  padding: 40px;

  &.errorGlobal {
    border: 1px solid red;
  }
`

export const ChoseYourPaymentMethod = styled.div`
  border-radius: 6px;
  background-color: rgba(144, 144, 144, 0.1);
  padding: 40px;

  &.errorPayment {
    border: 1px solid red;
  }
`

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.gray['gray-200']};
  border: 1px solid ${(props) => props.theme.colors.gray['gray-500']};
  border-radius: 4px;

  &:focus {
    box-shadow: 0 0 0 1.25px ${(props) => props.theme.colors.purple.purple};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.gray['gray-600']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const InputFixedSize = styled(Input)`
  width: 200px;
  display: flex;
  flex-direction: column;

  &.error {
    border: 1px solid red;
  }
`
export const InputSmallFixedSize = styled(Input)`
  width: 60px;
`

export const InputFillSize = styled(Input)`
  width: 100%;
  display: flex;
  flex-direction: column;

  &.error {
    border: 1px solid red;
  }
`

export const SelectUF = styled.select`
  padding: 12px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.gray['gray-200']};
  border: 1px solid ${(props) => props.theme.colors.gray['gray-500']};
  border-radius: 4px;
  width: 100px;
  color: ${(props) => props.theme.colors.gray['gray-600']};

  // -webkit-appearance: none; /* Remove a aparência padrão da seta em alguns navegadores */
  // background-image: url('src/assets/arrow-down.svg'); /* Substitua 'sua-imagem-da-seta.png' pelo caminho da sua imagem de seta */~
  // background-position: right 8px center; /* Ajuste o valor do padding-right conforme necessário */
  // background-repeat: no-repeat;
  // background-size: auto 11px;

  &.error {
    border: 1px solid red;
  }
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 12px;

  input {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${(props) => props.theme.colors.gray['gray-300']};
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.purple['purple-light']};
      background: ${(props) => props.theme.colors.purple['purple-light']};
    }

    &:focus {
      outline: transparent; /* removes the default focus */
      box-shadow: none;
    }

    &.isActive {
      border: 2px solid ${(props) => props.theme.colors.purple.purple};
      background: ${(props) => props.theme.colors.purple['purple-light']};
    }
  }
`

export const ButtonCheckout = styled.button`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.yellow['yellow-dark']};
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow.yellow};
  }
`

export const ConfirmCheckoutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
