import { SubmitHandler, useForm } from 'react-hook-form'

import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import FileField from 'components/FileField'

type Inputs = {
  name: string
  email: string
  phone: string
}

const ArticleForm = () => {
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
    <S.Wrapper>
      <S.ContentWrapper onSubmit={handleSubmit(onSubmit)}>
        <S.Title>
          SUBMISSÃO DE ARTIGO - 1º congresso roraimense de trauma e emergências
          médicas
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

        <FileField />

        <Button
          type="submit"
          style={{ width: 'fit-content' }}
          loading={loading}
        >
          Enviar Artigo
        </Button>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ArticleForm
