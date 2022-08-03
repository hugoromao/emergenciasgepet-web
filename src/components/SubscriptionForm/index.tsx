import Image from 'next/image'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Warning } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import FileField from 'components/FileField'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import CategoryRadio from 'components/CategoryRadio'

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
    formState: { errors },
    watch
  } = useForm<Inputs>({ defaultValues: { undergraduateSemester: 1 } })

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
          type="tel"
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
          type="tel"
          label="Telefone(celular)*"
          name="phone"
          register={register('phone', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.phone?.message}
        />

        <S.FormInfo>Selecione a categoria</S.FormInfo>

        <CategoryRadio
          id="medicine-student"
          name="medicine-student"
          value="medicine-student"
          register={register('categorie', {
            required: 'Este campo é obrigatório'
          })}
          title="Estudante de graduação (medicina)"
          prices={[
            { label: 'Preço até 15/09', price: 70 },
            { label: 'Preço até 15/10', price: 80 }
          ]}
        />

        <CategoryRadio
          id="graduation-student"
          name="graduation-student"
          value="graduation-student"
          register={register('categorie', {
            required: 'Este campo é obrigatório'
          })}
          title="Estudante de graduação 
          (outro curso da saúde) (vagas 
          limitadas)"
          prices={[
            { label: 'Preço até 15/09', price: 80 },
            { label: 'Preço até 15/10', price: 90 }
          ]}
        />

        {(watch('categorie') === 'medicine-student' ||
          watch('categorie') === 'graduation-student') && (
          <TextField
            type="tel"
            min="1"
            max="12"
            defaultValue={1}
            label="Semestre de graduação*"
            name="undergraduateSemester"
            register={register('undergraduateSemester', {
              required: 'Este campo é obrigatório',
              min: { value: 1, message: 'Escolha um valor entre 1 e 12' },
              max: { value: 12, message: 'Escolha um valor entre 1 e 12' }
            })}
            error={errors.undergraduateSemester?.message}
          />
        )}

        <FileField name="" label="Comprovante de categoria *" />

        <TextField
          label="Instituição/Empresa*"
          name="institution"
          placeholder="UFRR, UERR, ... "
          register={register('institution', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.institution?.message}
        />

        <TextField
          label="País*"
          name="country"
          register={register('country', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.country?.message}
        />

        <TextField
          label="Cidade*"
          name="city"
          register={register('city', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.city?.message}
        />

        <TextField
          label="UF*"
          name="uf"
          register={register('uf', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.uf?.message}
        />

        <TextField
          label="CEP*"
          type="tel"
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

        <TextField
          label="Nome do pagador*"
          name="payerName"
          register={register('payerName', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.payerName?.message}
        />

        <TextField
          label="CPF do pagador*"
          name="payerDoc"
          register={register('payerDoc', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.payerDoc?.message}
        />
        <FileField name="paymentVoucher" label="Comprovante de pagamento *" />
      </S.Payment>

      <Button type="submit" style={{ width: 'fit-content' }} loading={loading}>
        Enviar
      </Button>
    </S.ContentWrapper>
  )
}

export default SubscriptionForm
