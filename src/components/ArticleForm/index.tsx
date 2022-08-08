/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import FileField from 'components/FileField'
import { useSnackbar } from 'notistack'
import api from 'services/api'

type Inputs = {
  nome: string
  cpf: string
  email: string
  celular: string
  instituicao: string
  pais: string
  cidade: string
  uf: string
  cep: string
  endereco: string
  numero: string
  bairro: string
  artigo: File
}

const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const { push } = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async ({
    bairro,
    celular,
    cep,
    cidade,
    cpf,
    email,
    endereco,
    instituicao,
    nome,
    numero,
    pais,
    uf,
    artigo
  }) => {
    try {
      setLoading(true)
      await api
        .post('/articles', {
          data: {
            bairro,
            celular,
            cep,
            cidade,
            cpf,
            email,
            endereco,
            instituicao,
            nome,
            pais,
            uf,
            numero
          }
        })
        .then(async (r) => {
          const formData = new FormData()
          formData.append('files', (artigo as any)[0])
          formData.append('refId', String(r.data.data.id))
          formData.append('ref', 'api::subscription.subscription')
          formData.append('field', 'comprovante_de_categoria')
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
        SUBMISSÃO DE ARTIGO - 1º congresso roraimense de trauma e emergências
        médicas
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

      <S.FormGrid>
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

        <FileField
          name="artigo"
          label="Artigo *"
          register={register('artigo', {
            required: 'Este campo é obrigatório'
          })}
          error={errors.artigo?.message as string | undefined}
        />
      </S.FormGrid>

      <Button type="submit" style={{ width: 'fit-content' }} loading={loading}>
        Enviar
      </Button>
    </S.ContentWrapper>
  )
}

export default ArticleForm
