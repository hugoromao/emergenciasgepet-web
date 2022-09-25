/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { SubmitHandler, useForm } from 'react-hook-form'

import api from 'services/api'

import Button from 'components/Button'
import TextField from 'components/TextField'
import FileField from 'components/FileField'
import NativeSelect from 'components/NativeSelect'

import * as S from './styles'
import Checkbox from 'components/Checkbox'

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
  tituloDoArtigo: string
  autores: string
  modalidade: string
  modalidade_apresentacao: string
  areaDeEstudo: string
}

export const areasOptions = [
  { value: '', label: 'Selecionar' },
  { value: 'ACLS', label: 'Advanced Cardiac Life Support(ACLS)' },
  { value: 'emergencias-urologicas', label: 'Emergências Urológicas' },
  { value: 'emergencias-cardiacas', label: 'Emergências Cardíacas' },
  { value: 'emergencias-vasculares', label: 'Emergências Vasculares' },
  { value: 'emergencias-ginecologicas', label: 'Emergências Ginecológicas' },
  { value: 'emergencias-pediatricas', label: 'Emergências Pediátricas' },
  {
    value: 'emergencias-reumatologicas',
    label: 'Emergências Reumatológicas'
  },
  { value: 'emergencias-ortopedicas', label: 'Emergências Ortopédicas' },
  {
    value: 'emergencias-gastroenterologicas',
    label: 'Emergências Gastroenterológicas'
  },
  {
    value: 'emergencias-infectocontagiosas',
    label: 'Emergências Infectocontagiosas'
  },
  {
    value: 'emergencias-otorrinolaringológicas',
    label: 'Emergências Otorrinolaringológicas'
  },
  {
    value: 'emergencias-dermatologicas',
    label: 'Emergências Dermatológicas'
  },
  { value: 'emergencias-oftalmicas', label: 'Emergencias Oftálmicas' },
  { value: 'emergencias-psiquiatricas', label: 'Emergencias Psiquiátricas' },
  { value: 'emergencias-neurologicas', label: 'Emergencias Neurológicas' },
  { value: 'emergencias-pneumologicas', label: 'Emergencias Respiratórias' },
  { value: 'emergencias-nefrologicas', label: 'Emergencias Nefrológicas' },
  { value: 'trauma-abdominal', label: 'Trauma Abdominal' },
  { value: 'emergencias-toracico', label: 'Trauma Torácico' }
]

const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const { push } = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const [loading, setLoading] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

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
    artigo,
    autores,
    tituloDoArtigo,
    areaDeEstudo,
    modalidade,
    modalidade_apresentacao
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
            numero,
            autores,
            titulodoartigo: tituloDoArtigo,
            areadeestudo: areaDeEstudo,
            modalidade,
            modalidade_apresentacao
          }
        })
        .then(async (r) => {
          const formData = new FormData()
          formData.append('files', (artigo as any)[0])
          formData.append('refId', String(r.data.data.id))
          formData.append('ref', 'api::subscription.subscription')
          formData.append('field', 'comprovante_de_categoria')
          await api.post('/upload', formData)

          push({ pathname: '/inscricao/success', query: { text: 'Submissão' } })
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

  const modalityOptions = [
    { value: '', label: 'Selecionar' },
    { value: 'relatoCaso', label: 'Relato de caso' },
    { value: 'resumoSimples', label: 'Resumo' },
    { value: 'resumoExpandido', label: 'Artigo Científico' }
  ]

  const modalidadeDeApresentação1 = [
    { value: '', label: 'Selecionar' },
    { value: 'poster', label: 'Pôster' }
  ]

  const modalidadeDeApresentação2 = [
    { value: '', label: 'Selecionar' },
    { value: 'apresentacao-oral', label: 'Apresentação oral' }
  ]

  return (
    <S.ContentWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        SUBMISSÃO DE ARTIGO -I congresso roraimense de trauma e emergências
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
      </S.FormGrid>

      <FileField
        name="artigo"
        label="Artigo *"
        register={register('artigo', {
          required: 'Este campo é obrigatório'
        })}
        error={errors.artigo?.message as string | undefined}
      />

      <TextField
        label="Título"
        name="tituloDoArtigo"
        register={register('tituloDoArtigo', {
          required: 'Este campo é obrigatório'
        })}
        error={errors.tituloDoArtigo?.message}
      />

      <NativeSelect
        label="Modalidade*"
        options={modalityOptions}
        register={register('modalidade', {
          required: 'Este campo é obrigatório'
        })}
        error={errors.modalidade?.message}
      />

      <NativeSelect
        label="Modalidade de apresentação*"
        options={
          watch('modalidade') === 'relatoCaso'
            ? modalidadeDeApresentação1
            : modalidadeDeApresentação2
        }
        register={register('modalidade_apresentacao', {
          required: 'Este campo é obrigatório'
        })}
        error={errors.modalidade_apresentacao?.message}
      />

      <NativeSelect
        label="Área Temática*"
        options={areasOptions}
        register={register('areaDeEstudo', {
          required: 'Este campo é obrigatório'
        })}
        error={errors.areaDeEstudo?.message}
      />

      <TextField
        label="Autores*"
        name="autores"
        register={register('autores', {
          required: 'Este campo é obrigatório'
        })}
        error={errors.autores?.message}
      />

      <span style={{ gridColumn: 'span 2' }}>
        <Checkbox
          label="Declaro que li e estou de acordo com as regras de submissão"
          labelFor="terms"
          onCheck={(e) => setAcceptedTerms(e)}
        />
      </span>

      <Button
        type="submit"
        style={{ width: 'fit-content' }}
        loading={loading}
        disabled={!acceptedTerms}
      >
        Enviar
      </Button>
    </S.ContentWrapper>
  )
}

export default ArticleForm
