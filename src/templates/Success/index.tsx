import Lottie from 'react-lottie'

import Button from 'components/Button'
import * as S from './styles'

import animationData from '../../../public/lottie/success.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Success = () => {
  const { query } = useRouter()

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <S.Wrapper>
      <S.Content>
        <Lottie options={defaultOptions} height={250} width={250} />

        <h1>{query.text || 'Inscrição'} enviada!</h1>
        <p>Acesse a Área do Usuário para confirmar o pagamento</p>
        <p style={{ fontSize: 12 }}>
          Você receberá a confirmação da inscrição por E-mail em até 24 horas
          após o pagamento
        </p>

        <Link href="/perfil" passHref>
          <Button>Acessar Área do Usuário</Button>
        </Link>
      </S.Content>
    </S.Wrapper>
  )
}

export default Success
