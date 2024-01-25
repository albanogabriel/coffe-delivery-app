import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: center; */
  padding: 126px 160px;
  gap: 56px;

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    line-height: ${(props) => props.theme.fonts.lineHeight.title};

    h1 {
      font-size: ${(props) => props.theme.fonts.fontSize.titleBaloo.xl};
      font-family: '${(props) => props.theme.fonts.fontFamilies.titleBaloo}';
    }

    p {
      font-size: ${(props) => props.theme.fonts.fontSize.textRoboto.md};
      font-family: '${(props) => props.theme.fonts.fontFamilies.textRoboto}';
    }
  }

  aside {
    height: 450px;
    width: 100%;

    img {
      height: 100%;
    }
  }
`
