import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { useSnackbar } from 'notistack'
import api from 'services/api'

type Inputs = {
  identifier: string
}

const ForgotPasswordForm = () => {
  const { handleSubmit, register, formState } = useForm<Inputs>()
  const { enqueueSnackbar } = useSnackbar()

  const [loading, setLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  async function onSubmit(data: Inputs) {
    try {
      setLoading(true)
      api.post('/auth/forgot-password', {
        email: data.identifier
      })
      setLoading(false)

      setEmailSent(true)
    } catch {
      setLoading(false)
      enqueueSnackbar('Falha ao enviar E-mail', { variant: 'error' })
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Esqueceu a senha?</h1>
      <p>
        Digite o E-mail associado com sua conta e enviaremos um E-mail com
        instruções para redefinir sua senha.
      </p>

      <TextField
        label="E-mail"
        type="email"
        register={register('identifier', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.identifier?.message}
      />

      <Button
        type="submit"
        loading={loading}
        backgroundColor={emailSent ? 'green' : 'gray'}
      >
        {emailSent ? 'E-mail enviado com sucesso!' : 'Enviar E-mail'}
      </Button>
    </S.Wrapper>
  )
}

export default ForgotPasswordForm
