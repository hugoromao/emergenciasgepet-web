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
  nome: string
  cpf: string
  email: string
  celular: string
  categoria:
    | 'Estudante de graduação (MEDICINA)'
    | 'MÉDICO'
    | 'Estudante de graduação (Outro curso da saúde)'
    | 'Outros profissionais da saúde'
    | string
  semestre_de_graduacao: number
  instituicao: string
  pais: string
  cidade: string
  uf: string
  cep: string
  endereco: string
  numero: string
  bairro: string
  nome_do_pagador: string
  cpf_do_pagador: string
  comprovante_de_pagamento: File
  comprovante_de_categoria: File
}

const isAfter1509 = dayjs().isAfter('2022-09-30')

const categoriesPrices = {
  'Estudante de graduação (MEDICINA)': {
    price: isAfter1509 ? 80 : 70,
    label: 'Estudante de graduação (medicina)'
  },
  MÉDICO: {
    price: isAfter1509 ? 115 : 100,
    label: 'Médico'
  },
  'Estudante de graduação (Outro curso da saúde)': {
    price: isAfter1509 ? 90 : 80,
    label: 'Estudante de graduação (outro curso da saúde) (vagas limitadas)'
  },
  'Outros profissionais da saúde': {
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
      semestre_de_graduacao: 1
    }
  })

  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async ({
    bairro,
    categoria,
    celular,
    cep,
    cidade,
    cpf,
    cpf_do_pagador,
    email,
    endereco,
    instituicao,
    nome,
    nome_do_pagador,
    numero,
    pais,
    semestre_de_graduacao,
    comprovante_de_categoria,
    comprovante_de_pagamento,
    uf
  }) => {
    try {
      setLoading(true)
      await api
        .post('/subscriptions', {
          data: {
            bairro,
            categoria,
            celular,
            cep,
            cidade,
            cpf,
            cpf_do_pagador,
            email,
            endereco,
            instituicao,
            nome,
            nome_do_pagador,
            numero,
            pais,
            semestre_de_graduacao: String(semestre_de_graduacao),
            uf
          }
        })
        .then(async (r) => {
          const formData = new FormData()
          formData.append('files', (comprovante_de_categoria as any)[0])
          formData.append('refId', String(r.data.data.id))
          formData.append('ref', 'api::subscription.subscription')
          formData.append('field', 'comprovante_de_categoria')
          await api.post('/upload', formData)

          const formData2 = new FormData()
          formData2.append('files', (comprovante_de_pagamento as any)[0])
          formData2.append('refId', String(r.data.data.id))
          formData2.append('ref', 'api::subscription.subscription')
          formData2.append('field', 'comprovante_de_pagamento')
          await api.post('/upload', formData2)

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
          name="nome"
          register={register('nome', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.nome?.message}
        />
        <TextField
          type="tel"
          label="CPF*"
          name="cpf"
          mask="999.999.999-99"
          register={register('cpf', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.cpf?.message}
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
          name="celular"
          register={register('celular', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.celular?.message}
        />
      </S.FormGrid>

      <S.CategoriesGrid>
        <S.FormInfo>Selecione a categoria</S.FormInfo>

        <CategoryRadio
          id="Estudante de graduação (MEDICINA)"
          name="Estudante de graduação (MEDICINA)"
          value="Estudante de graduação (MEDICINA)"
          isSelected={
            getValues('categoria') === 'Estudante de graduação (MEDICINA)'
          }
          register={register('categoria', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Estudante de graduação (medicina)"
          prices={[
            { label: 'Preço até 30/09', price: 70 },
            { label: 'Preço até 15/10', price: 80 }
          ]}
          error={errors.categoria?.message}
        />

        <CategoryRadio
          id="Estudante de graduação (Outro curso da saúde)"
          name="Estudante de graduação (Outro curso da saúde)"
          value="Estudante de graduação (Outro curso da saúde)"
          isSelected={
            getValues('categoria') ===
            'Estudante de graduação (Outro curso da saúde)'
          }
          register={register('categoria', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Estudante de graduação 
  (outro curso da saúde) (vagas 
  limitadas)"
          prices={[
            { label: 'Preço até 30/09', price: 80 },
            { label: 'Preço até 15/10', price: 90 }
          ]}
          error={errors.categoria?.message}
        />

        <CategoryRadio
          id="MÉDICO"
          name="MÉDICO"
          value="MÉDICO"
          isSelected={getValues('categoria') === 'MÉDICO'}
          register={register('categoria', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Médico (vagas limitadas)"
          prices={[
            { label: 'Preço até 30/09', price: 100 },
            { label: 'Preço até 15/10', price: 115 }
          ]}
          error={errors.categoria?.message}
        />

        <CategoryRadio
          id="Outros profissionais da saúde"
          name="Outros profissionais da saúde"
          value="Outros profissionais da saúde"
          isSelected={
            getValues('categoria') === 'Outros profissionais da saúde'
          }
          register={register('categoria', {
            required: 'Escolha pelo menos uma categoria'
          })}
          title="Outros profissionais da saúde (vagas limitadas)"
          prices={[
            { label: 'Preço até 30/09', price: 115 },
            { label: 'Preço até 15/10', price: 120 }
          ]}
          error={errors.categoria?.message}
        />
      </S.CategoriesGrid>

      <S.FormGrid>
        {(watch('categoria') ===
          'Estudante de graduação (Outro curso da saúde)' ||
          watch('categoria') === 'Estudante de graduação (MEDICINA)') && (
          <TextField
            type="tel"
            min="1"
            max="12"
            defaultValue={1}
            label="Semestre de graduação*"
            name="semestre_de_graduacao"
            register={register('semestre_de_graduacao', {
              required: 'Este campo é obrigatório',
              min: { value: 1, message: 'Escolha um valor entre 1 e 12' },
              max: { value: 12, message: 'Escolha um valor entre 1 e 12' }
            })}
            error={errors.semestre_de_graduacao?.message}
          />
        )}

        <FileField
          name="comprovante_de_categoria"
          label="Comprovante de categoria *"
          accept=".pdf, .doc, .docx, .png, .jpg"
          register={register('comprovante_de_categoria', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.comprovante_de_categoria?.message as string | undefined}
        />

        <TextField
          label="Instituição/Empresa*"
          name="instituicao"
          placeholder="UFRR, UERR, ... "
          register={register('instituicao', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.instituicao?.message}
        />

        <TextField
          label="País*"
          name="pais"
          register={register('pais', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.pais?.message}
        />

        <TextField
          label="Cidade*"
          name="cidade"
          register={register('cidade', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.cidade?.message}
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
          name="cep"
          register={register('cep', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.cep?.message}
        />

        <TextField
          label="Endereço*"
          name="endereco"
          register={register('endereco', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.endereco?.message}
        />

        <TextField
          type="number"
          label="Número*"
          name="numero"
          register={register('numero', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.numero?.message}
        />

        <TextField
          label="Bairro*"
          name="bairro"
          register={register('bairro', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.bairro?.message}
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
            {watch('categoria') && (
              <S.Title>
                R${' '}
                {String(
                  categoriesPrices[
                    watch('categoria') as 'Estudante de graduação (MEDICINA)'
                  ].price.toFixed(2)
                ).replace('.', ',')}
              </S.Title>
            )}
            <S.Name>Chave Pix: Grupogepet46@gmail.com</S.Name>
          </S.Column>
          <S.Warning>
            <Warning />
            <p>
              ATENÇÃO: por favor, confirme os dados do recebedor antes de
              confirmar a transferência: Laura Beatriz Rocha Bacelar Paiva, com
              CPF 030.742.562-22, PICPAY.
            </p>
          </S.Warning>
        </S.Column>
      </S.Payment>

      <S.FormGrid>
        <TextField
          label="Nome do pagador*"
          name="nome_do_pagador"
          register={register('nome_do_pagador', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.nome_do_pagador?.message}
        />

        <TextField
          label="CPF do pagador*"
          type="tel"
          name="cpf_do_pagador"
          mask="999.999.999-99"
          register={register('cpf_do_pagador', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.cpf_do_pagador?.message}
        />
        <FileField
          name="comprovante_de_pagamento"
          label="Comprovante de pagamento *"
          accept=".pdf, .doc, .docx, .png, .jpg"
          register={register('comprovante_de_pagamento', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.comprovante_de_pagamento?.message as string | undefined}
        />
      </S.FormGrid>

      <Button type="submit" style={{ width: 'fit-content' }} loading={loading}>
        Enviar
      </Button>
    </S.ContentWrapper>
  )
}

export default SubscriptionForm
