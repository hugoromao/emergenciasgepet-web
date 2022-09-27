import Participant from 'components/Participant'
import { Strong } from 'components/ScheduleSection/styles'
import * as S from './styles'

const Participants = () => (
  <S.Wrapper>
    <Strong>PALESTRANTES</Strong>

    <S.Grid>
      <Participant
        src="/img/Foto_Dr_Fernando_Tallo.jpg"
        title="Dr. Fernando Tallo"
        text="ACLS"
      />
      <Participant
        src="/img/Foto_Dr_Marcos_Tobias_Machado.png"
        title="Dr. Marcos Tobias Machado"
        text="Emergências Urológicas"
      />
      <Participant
        src="/img/Foto_Dr_Hassan_Syagha.jpeg"
        title="Dr. Hassan Syagha"
        text="Emergências Cardíacas"
      />
      <Participant
        src="/img/Foto_Dra_Paula_Trintinela.jpg"
        title="Dra. Paula Trintinalharo"
        text="Emergências Vasculares"
      />
      <Participant
        src="/img/Foto_Dr_Mario_Maciel.jpg"
        title="Dr. Mário Maciel de Lima Jr"
        text="Emergências Urológicas"
      />
      <Participant
        src="/img/Foto_Dr_Odair_Vaz.jpeg"
        title="Dr. Odair Vaz Machado"
        text="Trauma Abdominal"
      />
      <Participant
        src="/img/Foto_Dr_Marcos_Barroso.jpeg"
        title="Dr. Marcos Barroso"
        text="Trauma Torácico"
      />
      <Participant
        src="/img/Foto_Dr_Andre_Trolese.jpg"
        title="Dr. André Trolese"
        text="Emergências Reumatológicas"
      />
      <Participant
        src="/img/Foto_Dr_Jonathas_Lopes.jpg"
        title="Dr. Jonathas Lopes"
        text="Emergências Ortopédicas"
      />
      <Participant
        src="/img/Foto_Dra_Vitoria_Gandur.jpg"
        title="Dra. Vitória Gandur"
        text="Emergências Dermatológicas"
      />
      <Participant
        src="/img/Foto_Dra_Patricia_Cavalcante.jpg"
        title="Dra. Patrícia Cavalcante"
        text="Emergências Pediátricas"
      />
      <Participant
        src="/img/luis.jpeg"
        title="Dr. Luis Fernando"
        text="Emergências Gastroenterológicas"
      />
      <Participant
        src="/img/mayron.JPG"
        title="Dr. Mayron Melo"
        text="Emergências Otorrinolaringológicas"
      />
      <Participant
        src="/img/joselito.jpeg"
        title="Dr. Joselito Barbosa"
        text="Emergências Oftálmicas"
      />
      <Participant
        src="/img/amon.jpeg"
        title="Dr. Amon Rheingantz Machado"
        text="Emergências Respiratórias"
      />
    </S.Grid>
  </S.Wrapper>
)

export default Participants
