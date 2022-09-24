/* eslint-disable @typescript-eslint/no-explicit-any */
// import Image from 'next/image'

import { SubmitHandler, useForm } from 'react-hook-form'
// import { Warning } from 'styled-icons/material-outlined'
import { useSnackbar } from 'notistack'

import Button from 'components/Button'
import FileField from 'components/FileField'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import CategoryRadio from 'components/CategoryRadio'
// import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import api from 'services/api'
import NativeSelect from 'components/NativeSelect'
import Checkbox from 'components/Checkbox'
import { ErrorText } from 'components/SignInForm/styles'

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
  nomeCracha: string
  sexo: string
  rg: string
  endereco: string
  numero: string
  bairro: string
  nome_do_pagador: string
  cpf_do_pagador: string
  comprovante_de_pagamento: File
  comprovante_de_categoria: File
}

const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    trigger
  } = useForm<Inputs>({
    defaultValues: {
      semestre_de_graduacao: 1
    }
  })

  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [prevent, setPrevent] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [invalidCpf, setInvalidCpf] = useState(false)

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
    uf,
    nomeCracha,
    rg,
    sexo
  }) => {
    try {
      if (!prevent) {
        setPrevent(true)
        setLoading(false)
        return
      }
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
            uf,
            nomeCracha,
            rg,
            sexo
          }
        })
        .then(async (r) => {
          const formData = new FormData()
          formData.append('files', (comprovante_de_categoria as any)[0])
          formData.append('refId', String(r.data.data.id))
          formData.append('ref', 'api::subscription.subscription')
          formData.append('field', 'comprovante_de_categoria')
          await api.post('/upload', formData)

          // const formData2 = new FormData()
          // formData2.append('files', (comprovante_de_pagamento as any)[0])
          // formData2.append('refId', String(r.data.data.id))
          // formData2.append('ref', 'api::subscription.subscription')
          // formData2.append('field', 'comprovante_de_pagamento')
          // await api.post('/upload', formData2)

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

  async function verifyCpf(cpf: string): Promise<boolean> {
    try {
      setLoading(true)
      const response = await api.get(`/subscriptions?filters[cpf][$eq]=${cpf}`)
      const validCpf = !response.data.data.length
      if (!validCpf) {
        setInvalidCpf(true)
        enqueueSnackbar(
          'ESTE CPF NÃO PODE SER UTILIZADO, POIS JÁ FOI CADASTRADO',
          { variant: 'error' }
        )
      }
      setLoading(false)
      return validCpf
    } catch {
      setLoading(false)
      enqueueSnackbar('Falha ao verificar cpf', {
        variant: 'error'
      })
      return false
    }
  }

  const sexoOptions = [
    { value: '', label: 'Selecionar' },
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' }
  ]

  const steps = {
    1: {
      component: () => (
        <>
          <S.FormGrid>
            <TextField
              type="tel"
              label="Digite seu CPF*"
              name="cpf"
              mask="999.999.999-99"
              register={register('cpf', {
                required: 'Este campo é obrigatório',
                validate: {
                  unusedCPF: async (v) => {
                    return await verifyCpf(v)
                  }
                }
              })}
              error={errors.cpf?.message}
            />

            {invalidCpf && (
              <ErrorText>
                ESTE CPF NÃO PODE SER UTILIZADO, POIS JÁ FOI CADASTRADO.
                {/* <Link href="/signIn" passHref>
                  <a>CLIQUE AQUI</a>
                </Link> */}
              </ErrorText>
            )}
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
        </>
      ),
      triggers: ['cpf', 'categoria']
    },
    2: {
      component: () => (
        <>
          <TextField
            label="Nome completo*"
            name="nome"
            register={register('nome', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.nome?.message}
          />

          <TextField
            label="Nome para crachá*"
            name="nomeCracha"
            register={register('nomeCracha', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.nomeCracha?.message}
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

          <NativeSelect
            label="Sexo"
            options={sexoOptions}
            register={register('sexo', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.sexo?.message}
          />

          <TextField
            label="RG*"
            name="rg"
            type="number"
            register={register('rg', {
              required: 'Este campo é obrigatório'
            })}
            error={errors.rg?.message}
          />

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
              error={
                errors.comprovante_de_categoria?.message as string | undefined
              }
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
        </>
      ),
      triggers: [
        'nome',
        'nomeCracha',
        'sexo',
        'rg',
        'semestre_de_graduacao',
        'instituicao',
        'pais',
        'cidade',
        'uf',
        'cep',
        'endereco',
        'numero',
        'bairro',
        'comprovante_de_categoria',
        'email',
        'celular'
      ]
    },
    3: {
      component: () => (
        <>
          <S.FormInfo>Confirmar Informações</S.FormInfo>

          <S.InfoGrid>
            <strong>Nome</strong>
            <p>{getValues('nome')}</p>
            <strong>CPF</strong>
            <p>{getValues('cpf')}</p>
            <strong>Email</strong>
            <p>{getValues('email')}</p>
            <strong>Celular</strong>
            <p>{getValues('celular')}</p>
            <strong>Categoria de inscrição</strong>
            <p>{getValues('categoria')}</p>
            <strong>País</strong>
            <p>{getValues('pais')}</p>
            <strong>Cidade</strong>
            <p>{getValues('cidade')}</p>
            <strong>UF</strong>
            <p>{getValues('uf')}</p>
            <strong>CEP</strong>
            <p>{getValues('cep')}</p>
            <strong>Endereço</strong>
            <p>{getValues('endereco')}</p>
            <strong>Bairro</strong>
            <p>{getValues('bairro')}</p>
          </S.InfoGrid>

          <span style={{ gridColumn: 'span 2' }}>
            <Checkbox
              label="Declaro que li e estou de acordo com as regras de inscrição"
              labelFor="terms"
              onCheck={(e) => setAcceptedTerms(e)}
            />
          </span>
        </>
      ),
      triggers: ['nome']
    }
  }

  return (
    <S.ContentWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        FICHA DE INSCRIÇÃO (ETAPA {step}/{Object.keys(steps).length})
      </S.Title>

      {steps[step as 1].component()}

      <S.StepButtonsWrapper>
        {step !== 1 && (
          <Button
            type="button"
            onClick={() => {
              setPrevent(false)
              setStep((s) => s - 1)
            }}
          >
            Voltar
          </Button>
        )}

        {step === Object.keys(steps).length ? (
          <Button
            type="submit"
            backgroundColor="green"
            disabled={!acceptedTerms}
            style={{ width: 'fit-content' }}
            loading={loading}
          >
            Enviar
          </Button>
        ) : (
          <Button
            type="button"
            backgroundColor="red"
            loading={loading}
            onClick={async () => {
              setInvalidCpf(false)
              if (await trigger(steps[step as 1].triggers as ['nome'])) {
                setStep((s) => s + 1)
              }
            }}
          >
            Próxima Etapa
          </Button>
        )}
      </S.StepButtonsWrapper>
    </S.ContentWrapper>
  )
}

export default SubscriptionForm
