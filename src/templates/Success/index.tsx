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

        <h1>Inscrição confirmada!</h1>

        <Link href="/" passHref>
          <Button>Início</Button>
        </Link>
      </S.Content>
    </S.Wrapper>
  )
}

export default Success
