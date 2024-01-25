import styled from 'styled-components'

interface HeaderLayoutProps {
  isScrolled: boolean
}

export const HeaderLayout = styled.header<HeaderLayoutProps>`
  position: fixed; //or sticky
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
  background-color: ${(props) =>
    props.isScrolled ? 'rgba(255, 255, 255, 0.990)' : 'transparent'};
  transition: background-color 0.3s ease;
  box-shadow: ${(props) =>
    props.isScrolled ? '0px 2px 5px rgba(0, 0, 0, 0.025)' : 'none'};

  div {
    display: flex;
    gap: 12px;
  }
`
