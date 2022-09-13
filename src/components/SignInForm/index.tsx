import Button from 'components/Button'
import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'
import * as S from './styles'

type Inputs = {
  username: string
  password: string
}

const SignInForm = () => {
  const { handleSubmit, register, formState } = useForm<Inputs>()

  async function onSubmit(data: Inputs) {
    console.log(data)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Seja bem vindo!</h1>

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
    </S.Wrapper>
  )
}

export default SignInForm
