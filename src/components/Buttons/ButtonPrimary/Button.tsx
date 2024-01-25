import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonPrimaryStyle } from './styles'

interface PrimaryButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function PrimaryButton({ children, ...props }: PrimaryButtonType) {
  return <ButtonPrimaryStyle {...props}>{children}</ButtonPrimaryStyle>
}
