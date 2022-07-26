import Loading from 'components/Loading'
import { ButtonHTMLAttributes, MouseEvent } from 'react'

import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  styleType?: 'default' | 'outline' | 'minimal' | 'icon'
  loading?: boolean
  children: React.ReactNode
  backgroundColor?: 'blue' | 'green'
} & ButtonTypes

const Button = ({
  styleType = 'default',
  loading,
  children,
  backgroundColor,
  onClick,
  ...props
}: ButtonProps) => {
  function handleOnClick(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    if (!loading && onClick) onClick(e)
  }

  return (
    <S.Button
      {...props}
      styleType={styleType}
      backgroundColor={backgroundColor}
      onClick={handleOnClick}
    >
      {loading ? <Loading /> : children}
    </S.Button>
  )
}

export default Button
