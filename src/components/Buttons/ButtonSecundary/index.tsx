import { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import { ButtonSecundaryLocation, ButtonSecundaryTrash } from './styles'

import trashIcon from '../../../assets/icons/trash-purple-icon.svg'
import locationIcon from '../../../assets/icons/ma-pin-fill-purple-icon.svg'

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
  const [mouseEnter, setMouseEnter] = useState(false)

  if (variant === 'trash') {
    return (
      <ButtonSecundaryTrash {...props}>
        <img src={trashIcon} alt="" />
        {children}
      </ButtonSecundaryTrash>
    )
  } else if (variant === 'location') {
    return (
      <ButtonSecundaryLocation
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        {...props}
      >
        <img src={locationIcon} alt="" />
        {mouseEnter ? <div>{children}</div> : null}
      </ButtonSecundaryLocation>
    )
  } else {
    return null
  }
}
