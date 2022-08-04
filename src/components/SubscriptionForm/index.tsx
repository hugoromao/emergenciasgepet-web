/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Warning } from 'styled-icons/material-outlined'
import { useSnackbar } from 'notistack'

import Button from 'components/Button'
import FileField from 'components/FileField'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import CategoryRadio from 'components/CategoryRadio'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import api from 'services/api'

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
    | string
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paymentVoucher: File
  categoryVoucher: File
}

const isAfter1509 = dayjs().isAfter('2022-09-15')

const categoriesPrices = {
  'medicine-student': {
    price: isAfter1509 ? 80 : 70,
    label: 'Estudante de graduação (medicina)'
  },
  doctor: {
    price: isAfter1509 ? 90 : 80,
    label: 'Médico'
  },
  'graduation-student': {
    price: isAfter1509 ? 115 : 100,
    label: 'Estudante de graduação (outro curso da saúde) (vagas limitadas)'
  },
  'health-professional': {
    price: isAfter1509 ? 120 : 115,
    label: 'Outros profissionais da saúde'
  }
}

const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues
  } = useForm<Inputs>({
    defaultValues: {
      undergraduateSemester: 1
    }
  })

  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true)
      console.log(data)

      await api
        .post('/subscriptions', {
          data: {
            nome: data.name,
            email: data.email,
            phone: data.phone
          }
        })
        .then(async (r) => {
          const formData = new FormData()
          formData.append('files', (data as any).paymentVoucher[0])
          formData.append('refId', String(r.data.data.id))
          formData.append('ref', 'api::subscription.subscription')
          formData.append('field', 'payment_voucher')
          await api.post('/upload', formData)

          push('/inscricao/success')
        })
        .catch(() => {
          setLoading(false)
          enqueueSnackbar('Falha ao completar inscrição', {
            variant: 'error'
          })
        })
    } catch {
      setLoading(false)
      enqueueSnackbar('Falha ao completar inscrição', {
        variant: 'error'
      })
    }
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
          mask="999.999.999-99"
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
          mask="99 999999999"
          name="phone"
          register={register('phone', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.phone?.message}
        />
      </S.FormGrid>

      <S.CategoriesGrid>
        <S.FormInfo>Selecione a categoria</S.FormInfo>

        <CategoryRadio
          id="medicine-student"
          name="medicine-student"
          value="medicine-student"
          isSelected={getValues('categorie') === 'medicine-student'}
          register={register('categorie', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Estudante de graduação (medicina)"
          prices={[
            { label: 'Preço até 15/09', price: 70 },
            { label: 'Preço até 15/10', price: 80 }
          ]}
          error={errors.categorie?.message}
        />

        <CategoryRadio
          id="graduation-student"
          name="graduation-student"
          value="graduation-student"
          isSelected={getValues('categorie') === 'graduation-student'}
          register={register('categorie', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Estudante de graduação 
  (outro curso da saúde) (vagas 
  limitadas)"
          prices={[
            { label: 'Preço até 15/09', price: 80 },
            { label: 'Preço até 15/10', price: 90 }
          ]}
          error={errors.categorie?.message}
        />

        <CategoryRadio
          id="doctor"
          name="doctor"
          value="doctor"
          isSelected={getValues('categorie') === 'doctor'}
          register={register('categorie', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Médico (vagas limitadas)"
          prices={[
            { label: 'Preço até 15/09', price: 100 },
            { label: 'Preço até 15/10', price: 115 }
          ]}
          error={errors.categorie?.message}
        />

        <CategoryRadio
          id="health-professional"
          name="health-professional"
          value="health-professional"
          isSelected={getValues('categorie') === 'health-professional'}
          register={register('categorie', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Outros profissionais da saúde (vagas limitadas)"
          prices={[
            { label: 'Preço até 15/09', price: 115 },
            { label: 'Preço até 15/10', price: 120 }
          ]}
          error={errors.categorie?.message}
        />
      </S.CategoriesGrid>

      <S.FormGrid>
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

        <FileField
          name="categoryVoucher"
          label="Comprovante de categoria *"
          register={register('categoryVoucher', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.categoryVoucher?.message as string | undefined}
        />

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
          mask="99999-999"
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
          type="number"
          label="Número*"
          name="address"
          register={register('addressNumber', {
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
        <S.BorderWrapper>
          <S.QRCodeWrapper>
            <Image src="/img/qrcode.png" layout="fill" objectFit="fill" />
          </S.QRCodeWrapper>
        </S.BorderWrapper>
        <S.Column>
          <S.Column style={{ gap: 0 }}>
            {watch('categorie') && (
              <S.Title>
                R${' '}
                {String(
                  categoriesPrices[
                    watch('categorie') as 'medicine-student'
                  ].price.toFixed(2)
                ).replace('.', ',')}
              </S.Title>
            )}
            <S.Name>Chave Pix: 030.742.562-22</S.Name>
          </S.Column>
          <S.Warning>
            <Warning />
            <p>
              ATENÇÃO: por favor, confirme os dados do recebedor antes de
              confirmar a transferência: Laura Beatriz Rocha Bacelar Paiva, com
              CPF 030.742.562-22, CAIXA.
            </p>
          </S.Warning>
        </S.Column>
      </S.Payment>

      <S.FormGrid>
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
          type="tel"
          name="payerDoc"
          mask="999.999.999-99"
          register={register('payerDoc', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.payerDoc?.message}
        />
        <FileField
          name="paymentVoucher"
          label="Comprovante de pagamento *"
          register={register('paymentVoucher', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.paymentVoucher?.message as string | undefined}
        />
      </S.FormGrid>

      <Button type="submit" style={{ width: 'fit-content' }} loading={loading}>
        Enviar
      </Button>
    </S.ContentWrapper>
  )
}

export default SubscriptionForm
