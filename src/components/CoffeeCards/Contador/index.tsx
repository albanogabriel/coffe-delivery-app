import { useState } from 'react'

interface ContadorProps {
  onCountChange: (contador: number) => void
}

export function Contador({ onCountChange }: ContadorProps) {
  const [contador, setContador] = useState(0)

  function handleIncrement() {
    setContador(contador + 1)
    onCountChange(contador + 1)
  }

  function handleDecrement() {
    setContador(contador - 1)
    onCountChange(contador - 1)
  }

  return (
    <>
      <span onClick={handleDecrement}>-</span>
      <span>{contador}</span>
      <span onClick={handleIncrement}>+</span>
    </>
  )
}
