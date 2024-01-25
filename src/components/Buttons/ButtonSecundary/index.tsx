import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonSecundaryLocation, ButtonSecundaryTrash } from './styles'

import trashIcon from '../../../assets/icons/trash-purple-icon.svg'
import locationIcon from '../../../assets/icons/map-pin-fill-purple.svg'

export interface SecundaryButtonType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'trash' | 'location'
}

export function SecundaryButton({
  children,
  variant,
  ...props
}: SecundaryButtonType) {
  if (variant === 'trash') {
    return (
      <ButtonSecundaryTrash {...props}>
        <img src={trashIcon} alt="" />
        {children}
      </ButtonSecundaryTrash>
    )
  } else if (variant === 'location') {
    return (
      <ButtonSecundaryLocation {...props}>
        <img src={locationIcon} alt="" />
        {children}
      </ButtonSecundaryLocation>
    )
  } else {
    return null
  }
}
