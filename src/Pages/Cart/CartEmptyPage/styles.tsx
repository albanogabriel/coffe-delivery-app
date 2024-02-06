import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center; // Adiciona esta propriedade para centralizar horizontalmente
  justify-content: center;
  height: 80vh; // Define a altura total da viewport
  padding: 0 160px;
`

export const ButtonReturn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 260px;
  padding: 16px 12px;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.gray['gray-100']};
  font-weight: bold;
  background: ${(props) => props.theme.colors.yellow.yellow};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${(props) => props.theme.colors.yellow['yellow-dark']};
  }

  span {
    display: flex;
    justify-content: center;
  }

  &:hover span {
    transform: translateX(-100%);
  }
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`
