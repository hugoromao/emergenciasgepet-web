/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'
import { signIn, signOut, useSession } from 'next-auth/react'

import * as S from './styles'
import { useRouter } from 'next/router'

type Inputs = {
  username: string
  password: string
}

const SignInForm = () => {
  const { query } = useRouter()
  const { handleSubmit, register, formState } = useForm<Inputs>()

  async function onSubmit(data: Inputs) {
    console.log(data)
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

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

      <S.Span>
        <hr />
        <p>Ou</p>
        <hr />
      </S.Span>

      <Button
        id="google"
        type="button"
        backgroundColor="gray"
        onClick={() => {
          signIn('google', {
            callbackUrl: String(query.callbackUrl || '/')
          })
        }}
      >
        <img src="/img/google.webp" alt="Google" />
        Logar com o Google
      </Button>

      <S.Span style={{ marginTop: '2.4rem' }}>
        <p>
          Ainda não possui cadastro? <a href="/signUp">Criar nova conta</a>
        </p>
      </S.Span>
    </S.Wrapper>
  )
}

export default SignInForm
