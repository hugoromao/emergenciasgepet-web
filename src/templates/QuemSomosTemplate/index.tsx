/* eslint-disable @next/next/no-img-element */
import Header from 'components/Header'
import { HeadingWrapper, Title } from 'templates/InfoTemplate/styles'
import * as S from './styles'

const QuemSomosTemplate = () => (
  <S.Wrapper>
    <HeadingWrapper>
      <Header transparent />

      <Title>Quem Somos</Title>
    </HeadingWrapper>

    <S.Content>
      <p>
        O Grupo de Estudos em Pacientes de Emergência e Trauma (GEPET) é um
        projeto vinculado ao curso de Medicina da Universidade Estadual de
        Roraima. Criado em 2019, o GEPET tem por objetivo proporcionar uma
        formação mais aprofundada sobre os temas de Trauma, Urgência e
        Emergência. Para isso, contamos com capacitações mensais, experiências
        em plantões no Grande Trauma do Hospital Geral de Roraima (HGR),
        participações em cursos (ATLS, PHTLS, BLS, ACLS), realização de
        extensões e produção de trabalhos científicos.
      </p>

      <p>
        Neste ano de 2022, o grupo realiza o seu primeiro congresso, intitulado
        I CONGRESSO RORAIMENSE DE TRAUMA E EMERGÊNCIAS MÉDICAS, que visa
        fomentar o ensino de medicina de emergência no estado tanto para
        acadêmicos quanto para profissionais formados. O congresso abrangerá as
        mais diversas áreas de emergência em clínica médica e cirúrgica.
      </p>

      <span style={{ margin: '0 auto' }}>
        <img src="/img/logo-red.png" alt="gepet" />
        <p>Fundação: 2019</p>
      </span>

      <span style={{ margin: '0 auto' }}>
        <img src="/img/1.png" alt="gepet" style={{ width: '100%' }} />
        <p>I Curso de Sutura: 2019</p>
      </span>

      <span style={{ margin: '0 auto' }}>
        <img src="/img/image10.jpg" alt="gepet" style={{ width: '100%' }} />
        <p>I Minicurso de Trauma e Emergências Médicas: 2021</p>
      </span>

      <span style={{ margin: '0 auto' }}>
        <img src="/img/image6.jpg" alt="gepet" style={{ width: '100%' }} />
        <p>I Congresso Roraimense de Trauma e Emergências Médicas: 2022</p>
      </span>

      <strong>Diretoria atual</strong>

      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image8.jpg" alt="gepet" />
        <p>Jéssica Souza: Presidente</p>
      </span>
      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image7.jpg" alt="gepet" />
        <p>Antônio Railan: Vice-Presidente</p>
      </span>
      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image12.jpg" alt="gepet" />
        <p>Aryanne Barros: Diretora Científica e de Pesquisa</p>
      </span>
      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image2.jpg" alt="gepet" />
        <p>Sarah Moura: Diretora de Marketing</p>
      </span>
      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image3.jpg" alt="gepet" />
        <p>Laura Paiva: Diretora Financeira</p>
      </span>

      <strong>Comissão Editorial</strong>

      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image4.jpg" alt="gepet" />
        <p>Dra. Iara Leão Luna de Souza</p>
      </span>
      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image5.jpg" alt="gepet" />
        <p>Aryanne Barros</p>
      </span>
      <span style={{ margin: '0 auto' }} className="people">
        <img src="/img/image11.jpg" alt="gepet" />
        <p>Jéssica Souza</p>
      </span>
    </S.Content>
  </S.Wrapper>
)

export default QuemSomosTemplate
