import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Content, RadialBackground } from './styles'

export function DefaultLayout() {
  return (
    <RadialBackground>
      <Content>
        <Header />
        <Outlet />
      </Content>
    </RadialBackground>
  )
}
