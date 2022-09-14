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

      <Button type="submit" onClick={() => signIn('google')}>
        Entrar
      </Button>
    </S.Wrapper>
  )
}

export default SignInForm
