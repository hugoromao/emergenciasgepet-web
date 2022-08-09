import Button from 'components/Button'
import Header from 'components/Header'
import Image from 'next/image'
import { Check2, FileEarmarkRichtext } from 'styled-icons/bootstrap'
import { Instagram, Whatsapp } from 'styled-icons/boxicons-logos'
import { EmailOutline } from 'styled-icons/evaicons-outline'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <S.Hero>
      <Header transparent />
      <S.HeroContent>
        <Image
          width={300}
          height={300}
          objectFit="contain"
          src="/img/logo.png"
        />
        <S.HeroText>
          <h1>1º congresso roraimense de trauma e emergências médicas</h1>
          <p>24, 25, 26 de novembro</p>
        </S.HeroText>

        <S.ButtonsWrapper>
          <Button as="a" href="/inscricao">
            Quero participar
            <Check2 />
          </Button>
          <Button as="a" href="/inscricao/artigo" backgroundColor="red">
            Submissão de artigos
            <FileEarmarkRichtext />
          </Button>
        </S.ButtonsWrapper>

        <S.SocialButtonsWrapper>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a
            href="https://wa.me/559591651886?lang=pt_br"
            target="_blank"
            rel="noreferrer"
          >
            <Whatsapp />
          </a>
          <a href="mailto:someone@yoursite.com">
            <EmailOutline />
          </a>
        </S.SocialButtonsWrapper>
      </S.HeroContent>
    </S.Hero>
  </S.Wrapper>
)

export default Home
