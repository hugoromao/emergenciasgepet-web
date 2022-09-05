import { InputHTMLAttributes, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
  register?: UseFormRegisterReturn
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  isChecked = false,
  value,
  register,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const status = !checked
    setChecked(status)
    register?.onChange(event)
    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        checked={checked}
        value={value}
        {...props}
        {...register}
        onChange={onChange}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
