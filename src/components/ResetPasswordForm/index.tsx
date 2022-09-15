import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

type Inputs = {
  identifier: string
}

const ResetPasswordForm = () => {
  const { handleSubmit, register, formState } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)

  async function onSubmit(data: Inputs) {
    setLoading(true)
    console.log(data)
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

      <Button type="submit" loading={loading}>
        Enviar E-mail
      </Button>
    </S.Wrapper>
  )
}

export default ResetPasswordForm
