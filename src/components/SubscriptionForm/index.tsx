import Image from 'next/image'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Warning } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import FileField from 'components/FileField'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'

type Inputs = {
  name: string
  email: string
  phone: string
}

const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const { push } = useRouter()

  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true)
    console.log(data)
    push('/success')
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper onSubmit={handleSubmit(onSubmit)}>
        <S.Title>
          INSCRIÇÃO - 1º congresso roraimense de trauma e emergências médicas
        </S.Title>
        <S.FormGrid>
          <TextField
            label="Nome completo"
            name="name"
            register={register('name', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.name?.message}
          />
          <TextField
            label="E-mail"
            type="email"
            name="email"
            register={register('email', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.email?.message}
          />
          <TextField
            label="Telefone/Celular"
            name="phone"
            register={register('phone', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.phone?.message}
          />
        </S.FormGrid>
        <S.FormInfo>Pagamento</S.FormInfo>
        <S.Payment>
          <Image
            src="/img/qrcode.png"
            width="240"
            height="240"
            objectFit="contain"
          />
          <S.Column>
            <S.Column style={{ gap: 0 }}>
              <S.Title>R$ 35,00</S.Title>
              <S.Name>Fulana de Souza Lima</S.Name>
            </S.Column>
            <S.Warning>
              <Warning />
              <p>You may only place scheduled orders right now for pick up.</p>
            </S.Warning>
          </S.Column>
        </S.Payment>
        <FileField />

        <Button
          type="submit"
          style={{ width: 'fit-content' }}
          loading={loading}
        >
          Enviar
        </Button>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default SubscriptionForm
