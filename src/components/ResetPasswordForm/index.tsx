import { useState } from 'react'
import { useForm } from 'react-hook-form'
import api from 'services/api'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

type Inputs = {
  code: string
  password: string
  passwordConfirmation: string
}

const ResetPasswordForm = () => {
  const { query, push } = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const { handleSubmit, register, formState, getValues } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)

  async function onSubmit(data: Inputs) {
    try {
      setLoading(true)

      api.post('/auth/reset-password', {
        code: query.code,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation
      })
      push('/signIn')
      setLoading(false)
    } catch {
      setLoading(false)
      enqueueSnackbar('Falha ao redefinir senha', { variant: 'error' })
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Redefinir senha</h1>

      <TextField
        label="Nova senha"
        type="password"
        register={register('password', {
          required: 'Este campo é obrigatório',
          minLength: {
            value: 8,
            message: 'A senha deve ter pelo menos 8 caracteres'
          }
        })}
        error={formState.errors.password?.message}
      />

      <TextField
        label="Confirmar nova senha"
        type="password"
        register={register('passwordConfirmation', {
          required: 'Este campo é obrigatório',
          validate: (value) =>
            value === getValues('password') || 'As senhas não combinam'
        })}
        error={formState.errors.passwordConfirmation?.message}
      />

      <Button type="submit" loading={loading}>
        Redefinir senha
      </Button>
    </S.Wrapper>
  )
}

export default ResetPasswordForm
