import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonPrimaryStyle, ButtonSecundaryStyle } from './styles'

interface PrimaryButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export interface SecundaryButtonType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon: string
}

export function PrimaryButton({ children, ...props }: PrimaryButtonType) {
  return <ButtonPrimaryStyle {...props}>{children}</ButtonPrimaryStyle>
}

export function SecundaryButton({
  children,
  icon,
  ...props
}: SecundaryButtonType) {
  return (
    <ButtonSecundaryStyle {...props}>
      <img src={icon} alt="" />
      {children}
    </ButtonSecundaryStyle>
  )
}
