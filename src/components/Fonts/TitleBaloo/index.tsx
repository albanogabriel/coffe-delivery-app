import { ReactNode } from 'react'
import { Title } from './styles'

type TitleVariants = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export interface TitleVariantProps {
  variant: TitleVariants
}

interface TitleType {
  variant: TitleVariants
  children: ReactNode
}

export function TitleBaloo({ variant, children }: TitleType) {
  return <Title variant={variant}>{children}</Title>
}
