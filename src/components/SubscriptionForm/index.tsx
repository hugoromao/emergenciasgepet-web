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
  doc: string
  email: string
  phone: string
  categorie:
    | 'medicine-student'
    | 'doctor'
    | 'graduation-student'
    | 'health-professional'
  undergraduateSemester: number
  institution: string
  country: string
  city: string
  uf: string
  postalCode: string
  address: string
  addressNumber: string
  neightborhood: string
  payerName: string
  payerDoc: string
  // categoryVoucher: file
  // paymentVoucher: file
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
    push('/inscricao/success')
  }

  return (
    <S.ContentWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        INSCRIÇÃO - 1º congresso roraimense de trauma e emergências médicas
      </S.Title>
      <S.FormGrid>
        <TextField
          label="Nome completo*"
          name="name"
          register={register('name', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.name?.message}
        />
        <TextField
          label="CPF*"
          name="doc"
          register={register('doc', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.doc?.message}
        />
        <TextField
          label="E-mail*"
          type="email"
          name="email"
          register={register('email', {
            required: 'Este campo é obrigatório'
          })}
          autoCapitalize="off"
          size={30}
          error={errors.email?.message}
        />
        <TextField
          label="Telefone(celular)*"
          name="phone"
          register={register('phone', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.phone?.message}
        />

        <input type="radio" id="huey" name="drone" value="huey" />
        <input type="radio" id="dewey" name="drone" value="dewey" />

        <TextField
          label="Instituição/Empresa**"
          name="institution"
          register={register('institution', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.institution?.message}
        />

        <TextField
          label="País**"
          name="country"
          register={register('country', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.country?.message}
        />

        <TextField
          label="Cidade**"
          name="city"
          register={register('city', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.city?.message}
        />

        <TextField
          label="UF**"
          name="uf"
          register={register('uf', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.uf?.message}
        />

        <TextField
          label="CEP**"
          name="postalCode"
          register={register('postalCode', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.postalCode?.message}
        />

        <TextField
          label="Endereço*"
          name="address"
          register={register('address', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.address?.message}
        />

        <TextField
          label="Bairro*"
          name="neightborhood"
          register={register('neightborhood', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.neightborhood?.message}
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
      <FileField name="paymentVoucher" label="Comprovante de pagamento *" />

      <Button type="submit" style={{ width: 'fit-content' }} loading={loading}>
        Enviar
      </Button>
    </S.ContentWrapper>
  )
}

export default SubscriptionForm
