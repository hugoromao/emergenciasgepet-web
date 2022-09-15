/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'

import { ErrorText, Wrapper } from 'components/SignInForm/styles'
import api from 'services/api'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

type Inputs = {
  name: string
  lastName: string
  email: string
  password: string
}

const SignUpForm = () => {
  const [loading, setLoading] = useState(false)

  const { handleSubmit, register, formState } = useForm<Inputs>()

  const [errorMessage, setErrorMessage] = useState(null)

  async function onSubmit({ lastName, name, password, email }: Inputs) {
    try {
      setLoading(true)
      const inputs = {
        username: `${email}`,
        email,
        password,
        name,
        lastname: lastName,
        confirmed: true,
        blocked: false,
        role: 1
      }
      const { data } = await api.post('/auth/local/register', inputs)
      signIn('credentials', {
        identifier: data.user.username,
        password,
        callbackUrl: '/'
      })

      setLoading(false)
    } catch (err) {
      const error = err as any
      setErrorMessage(error.response.data.error.message)
      setLoading(false)
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Criar nova conta</h1>

      <TextField
        label="Nome"
        register={register('name', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.name?.message}
      />
      <TextField
        label="Sobrenome"
        register={register('lastName', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.lastName?.message}
      />
      <TextField
        label="E-mail"
        type="email"
        register={register('email', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.email?.message}
      />
      <TextField
        label="Senha"
        register={register('password', {
          required: 'Este campo é obrigatório',
          minLength: {
            message: 'A senha deve possuir no mínimo 6 letras',
            value: 6
          }
        })}
        error={formState.errors.password?.message}
      />

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

      <Button type="submit" loading={loading}>
        Entrar
      </Button>
    </Wrapper>
  )
}

export default SignUpForm
