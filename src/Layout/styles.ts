import styled from 'styled-components'

export const RadialBackground = styled.div`
  width: 100%;
  min-height: 100vh; /* Use min-height para garantir que o fundo cubra pelo menos 100% da altura da tela */
  position: relative; /* Adicionando posição relativa para posicionar elementos filhos */
  background: radial-gradient(circle at 10% 20%, #ffcccb, transparent 70%),
    radial-gradient(circle at 80% 70%, #f4e499, transparent 70%),
    radial-gradient(circle at 30% 80%, #ffb6c1, transparent 70%),
    radial-gradient(circle at 30% 70%, #f4e499, transparent 70%),
    radial-gradient(circle at 80% 70%, #ffb6c1, transparent 70%),
    radial-gradient(circle at 50% 50%, #ff9999, transparent 70%); /* Substitua as cores conforme necessário */

  &:before {
    z-index: 1; /* Coloque um z-index menor para o plano de fundo */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
  }
`

export const Content = styled.div`
  z-index: 2; /* Z-index maior para o conteúdo sobreposto */
  position: relative;
`
