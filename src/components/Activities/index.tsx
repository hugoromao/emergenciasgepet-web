import { Strong } from 'components/ScheduleSection/styles'
import { School } from 'styled-icons/material-rounded'
import * as S from './styles'

type CardProps = {
  title: string
  text: string
}

const Card = ({ title, text }: CardProps) => {
  return (
    <S.Card>
      <span>
        <School />
        <strong>{title}</strong>
      </span>

      <div>
        <p>{text}</p>
      </div>
    </S.Card>
  )
}

const Activities = () => (
  <S.Wrapper>
    <Strong>O QUE VAMOS OFERTAR?</Strong>

    <S.Grid>
      <Card
        title="Palestras"
        text="Apresentações orais de médicos de referência sobre as diversas especialidades da medicina, focando em emergências dessas áreas, com base nos guidelines atuais."
      />
      <Card
        title="Discussões de casos clínicos"
        text="O médico responsável mediará uma discussão acerca do caso escolhido, na qual os congressistas interessados no tema participarão."
      />
      <Card
        title="Mesas redondas"
        text="Diferentes especialistas discutirão o tema escolhido, debatendo sobre condutas das suas áreas e atualizações, além de responder dúvidas de congressistas interessados."
      />
      <Card
        title="Apresentação de pôsters"
        text="Relatos de caso e resumos submetidos e aprovados previamente serão apresentados em formato de pôster pelos autores congressistas."
      />
      <Card
        title="Apresentação oral de artigos"
        text="Artigos científicos submetidos e aprovados previamente serão apresentados pelos autores congressistas e avaliados por banca de médicos doutores."
      />
      <Card
        title="Prêmios para os melhores trabalhos"
        text="Os trabalhos apresentados oralmente serão avaliados por profissionais capacitados e, os melhores, receberão premiação no último dia do evento."
      />
      <Card
        title="Minicursos"
        text="Os grupos de estudo e pesquisa do curso de medicina da UERR comandarão minicursos sobre diferentes áreas da medicina, os quais ocorrerão durante o evento."
      />
      <Card
        title="Feira cultural"
        text="Comidas típicas, artesanato e outro estarão disponíveis para apreciação e compra no local do evento."
      />
      <Card
        title="Certificação"
        text="Os congressistas ganharão certificado de 40 horas em congresso."
      />
    </S.Grid>
  </S.Wrapper>
)

export default Activities
