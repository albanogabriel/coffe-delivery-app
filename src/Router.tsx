import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { DefaultLayout } from './Layout/DefaultLayout'
import { Cart } from './Pages/Cart'
import { OrderConfirmedPage } from './Pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderconfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
