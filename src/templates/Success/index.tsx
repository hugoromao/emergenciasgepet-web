import Lottie from 'react-lottie'

import Button from 'components/Button'
import * as S from './styles'

import animationData from '../../../public/lottie/success.json'
import Link from 'next/link'

const Success = () => {
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

        <h1>Inscrição enviada!</h1>
        <p>Acesse a Área do Usuário para confirmar o pagamento</p>

        <Link href="/perfil" passHref>
          <Button>Acessar Área do Usuário</Button>
        </Link>
      </S.Content>
    </S.Wrapper>
  )
}

export default Success
