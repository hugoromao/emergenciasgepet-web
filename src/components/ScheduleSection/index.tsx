import Button from 'components/Button'
import * as S from './styles'

const ScheduleSection = () => (
  <S.Wrapper>
    <S.Strong>PROGRAMAÇÃO</S.Strong>

    <p>
      Confira em breve os mini cursos do evento, a grade de programação e os
      nossos palestrantes da edição de 2022.
    </p>

    <Button backgroundColor="red">Veja a programação completa</Button>
  </S.Wrapper>
)

export default ScheduleSection
