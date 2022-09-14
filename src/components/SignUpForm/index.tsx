import Button from 'components/Button'
import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'

import { Wrapper } from 'components/SignInForm/styles'
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

  async function onSubmit({ lastName, name, password, email }: Inputs) {
    try {
      setLoading(true)
      const inputs = {
        username: `${name} ${lastName}`,
        email,
        password,
        name,
        lastname: lastName,
        confirmed: true,
        blocked: false,
        role: 1
      }
      const { data } = await api.post('/auth/local/register', inputs)
      signIn('credentials', { ...data, callbackUrl: '/' })

      setLoading(false)
    } catch {
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

      <Button type="submit" loading={loading}>
        Entrar
      </Button>
    </Wrapper>
  )
}

export default SignUpForm
