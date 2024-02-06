import { ButtonReturn, Container, StyledNavLink } from './styles'
import { ArrowLeft } from 'phosphor-react'

export function CartEmptyPage() {
  return (
    <Container>
      <h1>Seu carrinho está vazio</h1>
      <StyledNavLink to="/">
        <ButtonReturn>
          {' '}
          <span>
            <ArrowLeft />
          </span>
          Escolher cafés deliciosos
        </ButtonReturn>
      </StyledNavLink>
    </Container>
  )
}
