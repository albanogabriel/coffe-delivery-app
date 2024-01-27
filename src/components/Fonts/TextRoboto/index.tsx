import { ReactNode } from 'react'
import { RobotoText } from './styles'

type TitleVariants = 'lg' | 'md' | 'sm' | 'xs'

export interface TitleVariantProps {
  variant: TitleVariants
}

interface TitleType {
  variant: TitleVariants
  children: ReactNode
}

export function TextRoboto({ variant, children }: TitleType) {
  return <RobotoText variant={variant}>{children}</RobotoText>
}
