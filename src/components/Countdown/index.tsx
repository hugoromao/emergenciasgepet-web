import * as S from './styles'

import CountdownTimer from './CountdownTimer'

const Countdown = () => {
  return (
    <S.Wrapper>
      <strong>Está chegando o grande dia!</strong>

      <p>De 17 a 19 de novembro</p>

      <CountdownTimer countdownTimestampMs={1668670518000} />

      <S.Column>
        <S.Info>Inscrições: 26/09 a 26/10</S.Info>
        <S.Info>Submissão de artigos: 30/09 a 30/10</S.Info>
      </S.Column>
    </S.Wrapper>
  )
}

export default Countdown
