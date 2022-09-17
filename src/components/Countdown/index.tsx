import * as S from './styles'

import CountdownTimer from './CountdownTimer'

const Countdown = () => {
  return (
    <S.Wrapper>
      <strong>Está chegando o grande dia!</strong>

      <p>De 17 a 19 de novembro</p>

      <CountdownTimer countdownTimestampMs={1668670518000} />
      {/* <p>
        Participe do 1º Congresso Roraimense de trauma e emergências médicas
        Submissão de artigos: 21/09/2022 a 15/10/2022
      </p> */}

      <S.Column>
        <S.Info>Inscrições: 21/09 a 15/10</S.Info>
        <S.Info>Submissão de artigos: 21/09 a 15/10</S.Info>
      </S.Column>
    </S.Wrapper>
  )
}

export default Countdown
