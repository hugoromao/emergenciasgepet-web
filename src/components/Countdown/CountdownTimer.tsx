import { useState, useEffect } from 'react'
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils'

import * as S from './styles'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00'
}

type CountdownTimerProps = {
  countdownTimestampMs: number
}

const CountdownTimer = ({ countdownTimestampMs }: CountdownTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

  function updateRemainingTime(countdown: number) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <S.TimerWrapper>
      <S.Timer>
        <S.Number>{remainingTime.days}</S.Number>
        <span>Dia(s)</span>
      </S.Timer>
      <S.Timer>
        <S.Number>{remainingTime.hours}</S.Number>
        <span>Hora(s)</span>
      </S.Timer>
      <S.Timer>
        <S.Number>{remainingTime.minutes}</S.Number>
        <span>Minuto(s)</span>
      </S.Timer>
      <S.Timer>
        <S.Number>{remainingTime.seconds}</S.Number>
        <span>Segundo(s)</span>
      </S.Timer>
    </S.TimerWrapper>
  )
}

export default CountdownTimer
