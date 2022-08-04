import { Error } from 'components/TextField/styles'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useRef, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import * as S from './styles'

type CategoryRadioProps = {
  id: string
  name: string
  value: string
  title: string
  prices: { label: string; price: number }[]
  register?: UseFormRegisterReturn
  error?: string
}

const CategoryRadio = ({
  id,
  name,
  value,
  register,
  prices,
  title,
  error
}: CategoryRadioProps) => {
  const ref = useRef(null)
  const [focus, setFocus] = useState(false)

  useOnClickOutside(ref, () => setFocus(false))

  return (
    <>
      <S.Wrapper
        ref={ref}
        htmlFor={id}
        onClick={() => setFocus(true)}
        focus={focus}
      >
        <input type="radio" id={id} name={name} value={value} {...register} />
        <strong>{title}</strong>
        <S.PriceWrapper>
          {prices.map((price) => (
            <S.Price key={price.label}>
              <p>{price.label}</p>
              <strong>R$ {price.price}</strong>
            </S.Price>
          ))}
        </S.PriceWrapper>
      </S.Wrapper>
      {!!error && <Error>{error}</Error>}
    </>
  )
}

export default CategoryRadio
