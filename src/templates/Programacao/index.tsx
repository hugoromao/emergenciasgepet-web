import Footer from 'components/Footer'
import Header from 'components/Header'
import ScheduleItem from 'components/ScheduleItem'
import * as S from './styles'

const Programacao = () => (
  <S.Wrapper>
    <S.HeadingWrapper>
      <Header transparent />

      <S.Title>PROGRAMAÇÃO</S.Title>
    </S.HeadingWrapper>

    <S.ContentWrapper>
      <S.Content>
        <ScheduleItem
          day={17}
          extendedDay="NOV"
          subtitle={
            <>
              <p>Emergências Vasculares</p>
              <p>Emergências Cardiológicas</p>
              <p>Emergências Gastroenterológicas</p>
              <p>Emergências Ortopédicas</p>
            </>
          }
          title="DIA 1"
        />

        <ScheduleItem
          day={18}
          extendedDay="NOV"
          subtitle={
            <>
              <p>Emergências Pediátricas</p>
              <p>Emergências Gastroenterológicas</p>
              <p>Trauma Torácicos</p>
              <p>Emergências Neurológicas</p>
              <p>Emergências Oftalmológicas</p>
              <p>Emergências Reumatológicas</p>
              <p>Emergências Ginecológicas</p>
              <p>Emergências Psiquiátricas</p>
              <p>Emergências Dermatológicas</p>
              <p>Trauma Abdominal</p>
              <p>Emergências Cardiológicas</p>
              <p>Emergências Nefrológicas</p>
              <p>Emergências Endocrinológicas</p>
              <p>Emergências Hematológicas</p>
            </>
          }
          title="DIA 2"
        />
        <ScheduleItem
          day={19}
          extendedDay="NOV"
          subtitle={
            <>
              <p>ACLS</p>
              <p>Emergências Reumatológicas</p>
              <p>Emergências Urológicas</p>
              <p>Ventilação Mecânica</p>
            </>
          }
          title="DIA 3"
        />
      </S.Content>
    </S.ContentWrapper>

    <Footer />
  </S.Wrapper>
)

export default Programacao
