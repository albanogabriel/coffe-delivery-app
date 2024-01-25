// import { ReactNode } from 'react'
import { CircleIconSpan, ColorType, IconSpan } from './styles'

interface IconProps {
  color: ColorType
  icon: string
  text?: string | undefined
}

export function Icon({ icon, color, text }: IconProps) {
  const haveText = !!text // ou podemos -> const haveText = text && text.length > 0

  return (
    <IconSpan>
      {haveText ? (
        <div>
          <CircleIconSpan color={color}>
            <img src={icon} alt="" />
          </CircleIconSpan>
          <p>{text}</p>
        </div>
      ) : (
        <CircleIconSpan color={color}>
          <img src={icon} alt="" />
        </CircleIconSpan>
      )}
    </IconSpan>
  )
}
