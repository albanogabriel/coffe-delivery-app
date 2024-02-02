import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  padding: 160px 60px;
  gap: 32px;
`

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.gray['gray-200']};
  border: 1px solid ${(props) => props.theme.colors.gray['gray-500']};
  border-radius: 4px;
`

export const InputFixedSize = styled(Input)`
  width: 200px;
`
export const InputSmallFixedSize = styled(Input)`
  width: 60px;
`

export const InputFillSize = styled(Input)`
  width: 100%;
`

export const SelectUF = styled.select`
  padding: 12px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.gray['gray-200']};
  border: 1px solid ${(props) => props.theme.colors.gray['gray-500']};
  border-radius: 4px;
  width: 100px;

  // -webkit-appearance: none; /* Remove a aparência padrão da seta em alguns navegadores */
  // background-image: url('src/assets/arrow-down.svg'); /* Substitua 'sua-imagem-da-seta.png' pelo caminho da sua imagem de seta */~
  // background-position: right 8px center; /* Ajuste o valor do padding-right conforme necessário */
  // background-repeat: no-repeat;
  // background-size: auto 11px;
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 12px;

  input {
    display: none;
  }

  button {
    background-color: ${(props) => props.theme.colors.gray['gray-300']};
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 12px;

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.purple.purple};
      background: ${(props) => props.theme.colors.purple['purple-light']};
    }

    &.active {
      border: 2px solid ${(props) => props.theme.colors.purple.purple};
      background: ${(props) => props.theme.colors.purple['purple-light']};
    }
  }
`
