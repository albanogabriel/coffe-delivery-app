import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 120px;
  padding: 160px 160px;
  gap: 32px;
`

export const InfoItemBorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: 1.125px solid ${(props) => props.theme.colors.yellow.yellow};
  border-radius: 6px 36px;
  padding: 40px;
`

export const InfoAndImg = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 80px;
`

export const InfoItem = styled.div`
  display: flex;
  gap: 12px;
`
export const InfoItemText = styled.div`
  display: flex;
  flex-direction: column;
`
