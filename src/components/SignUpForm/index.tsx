import Button from 'components/Button'
import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'

import { Wrapper } from 'components/SignInForm/styles'

type Inputs = {
  name: string
  lastName: string
  username: string
  password: string
}

const SignUpForm = () => {
  const { handleSubmit, register, formState } = useForm<Inputs>()

  async function onSubmit(data: Inputs) {
    console.log(data)
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
        register={register('username', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.username?.message}
      />
      <TextField
        label="Senha"
        register={register('password', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.password?.message}
      />

      <Button type="submit">Entrar</Button>
    </Wrapper>
  )
}

export default SignUpForm
