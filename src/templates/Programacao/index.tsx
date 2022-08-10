import Header from 'components/Header'
import ScheduleItem from 'components/ScheduleItem'
import * as S from './styles'

const Programacao = () => (
  <S.Wrapper>
    <S.HeadingWrapper>
      <Header transparent />

      <S.Title>PROGRAMAÇÃO</S.Title>
    </S.HeadingWrapper>

    <S.Content>
      <ScheduleItem
        day={24}
        extendedDay="quinta"
        local="Aúditório, sala 255"
        title="Palestra de abertura"
      />
      <ScheduleItem
        hideDate
        day={24}
        extendedDay="quinta"
        local="Aúditório, sala 255"
        title="Palestra de abertura"
      />
      <ScheduleItem
        day={25}
        extendedDay="quinta"
        local="Aúditório, sala 255"
        title="Roda de conversa Com professor fulano"
      />
      <ScheduleItem
        day={25}
        extendedDay="quinta"
        local="Aúditório, sala 255"
        title="Roda de conversa Com professor fulano"
      />
    </S.Content>
  </S.Wrapper>
)

export default Programacao
