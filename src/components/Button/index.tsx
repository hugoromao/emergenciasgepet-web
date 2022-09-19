import Loading from 'components/Loading'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  styleType?: 'default' | 'outline' | 'minimal' | 'icon'
  loading?: boolean
  children: React.ReactNode
  backgroundColor?: 'gray' | 'red' | 'green'
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  styleType = 'default',
  loading,
  children,
  backgroundColor = 'gray',
  onClick,
  ...props
}: ButtonProps) => {
  function handleOnClick(
    e:
      | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
      | MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!loading && onClick) onClick(e as any)
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
