import { HTMLAttributes, ReactNode } from 'react'
import { RobotoText } from './styles'

type TitleVariants = 'lg' | 'md' | 'sm' | 'xs'

export interface TitleVariantProps {
  variant: TitleVariants
}

interface TitleType extends HTMLAttributes<HTMLHeadingElement> {
  variant: TitleVariants
  children: ReactNode
}

export function TextRoboto({ variant, children, ...props }: TitleType) {
  return (
    <RobotoText {...props} variant={variant}>
      {children}
    </RobotoText>
  )
}
