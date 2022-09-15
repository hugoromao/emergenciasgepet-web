/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import TextField from 'components/TextField'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'

import * as S from './styles'
import { useRouter } from 'next/router'
import { useState } from 'react'

type Inputs = {
  identifier: string
  password: string
}

const SignInForm = () => {
  const { query } = useRouter()
  const { handleSubmit, register, formState } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)

  async function onSubmit(data: Inputs) {
    setLoading(true)
    signIn('credentials', { ...data, callbackUrl: '/' })
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <TextField
        label="E-mail"
        type="identifier"
        register={register('identifier', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.identifier?.message}
      />
      <TextField
        label="Senha"
        register={register('password', {
          required: 'Este campo é obrigatório'
        })}
        error={formState.errors.password?.message}
      />

      {query.error === 'CredentialsSignin' && (
        <S.ErrorText>Email ou senha incorretos!</S.ErrorText>
      )}

      <Button type="submit" loading={loading}>
        Entrar
      </Button>

      {/* <S.Span>
        <hr />
        <p>Ou</p>
        <hr />
      </S.Span>

      <Button
        id="google"
        type="button"
        backgroundColor="gray"
        onClick={async () => {
          await signIn('google', {
            callbackUrl: String(query.callbackUrl || '/')
          })
        }}
      >
        <img src="/img/google.webp" alt="Google" />
        Logar com o Google
      </Button> */}

      <S.Span style={{ marginTop: '2.4rem' }}>
        <p>
          Ainda não possui cadastro? <a href="/signUp">Criar nova conta</a>
        </p>
      </S.Span>
    </S.Wrapper>
  )
}

export default SignInForm
