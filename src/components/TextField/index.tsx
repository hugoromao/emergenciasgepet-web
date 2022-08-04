import { useState, InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import { UseFormRegisterReturn } from 'react-hook-form'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  register?: UseFormRegisterReturn
  mask?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  type,
  register,
  mask,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    register?.onChange(e)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        {mask ? (
          <InputMask
            mask={mask}
            alwaysShowMask={false}
            maskPlaceholder=""
            {...props}
            onChange={register?.onChange}
            onBlur={register?.onBlur}
          >
            <S.Input
              type={type}
              iconPosition={iconPosition}
              spellCheck={false}
              ref={register?.ref}
              name={register?.name}
              required={register?.required}
            />
          </InputMask>
        ) : (
          <S.Input
            type={type}
            value={value}
            iconPosition={iconPosition}
            disabled={disabled}
            name={name}
            {...register}
            onChange={onChange}
            {...(label ? { id: name } : {})}
            {...props}
          />
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
