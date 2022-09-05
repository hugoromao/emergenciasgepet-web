import { UnfoldMore } from '@styled-icons/material-rounded'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

export type SelectOption = {
  value: string | number | boolean
  label: string
}

export type NativeSelectProps = {
  label?: string
  options: SelectOption[]
  register?: UseFormRegisterReturn
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLSelectElement>

const NativeSelect = ({
  onInputChange,
  label,
  options,
  register,
  ...props
}: NativeSelectProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    register?.onChange(e)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Select {...props} {...register} onChange={onChange}>
        {options.map((op) => (
          <S.Option key={op.value as string} value={op.value as string}>
            {op.label}
          </S.Option>
        ))}
      </S.Select>
      <UnfoldMore id="expand" />
    </S.Wrapper>
  )
}

export default NativeSelect
