import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  /* justify-content: center; */
  padding: 126px 160px;
  gap: 56px;

  main {
    display: flex;
    flex-direction: column;
    gap: 60px;
    line-height: ${(props) => props.theme.fonts.lineHeight.title};

    div {
      h1 {
        font-size: ${(props) => props.theme.fonts.fontSize.titleBaloo.xl};
        font-family: '${(props) => props.theme.fonts.fontFamilies.titleBaloo}';
        padding-bottom: 8px;
      }

      p {
        font-size: ${(props) => props.theme.fonts.fontSize.textRoboto.md};
        font-family: '${(props) => props.theme.fonts.fontFamilies.textRoboto}';
      }
    }
  }

  aside {
    height: 450px;

    img {
      height: 100%;
    }
  }
`

export const IconDivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`
