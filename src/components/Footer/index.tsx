/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Instagram, Whatsapp } from 'styled-icons/boxicons-logos'
import { EmailOutline } from 'styled-icons/evaicons-outline'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Grid>
      <S.Column id="contact">
        <S.Strong>Contato</S.Strong>
        <S.TextRow>
          <Whatsapp />
          (95) 8119-0726
        </S.TextRow>
        <S.TextRow>
          <Instagram />
          @gepet_medicine
        </S.TextRow>
        <S.TextRow>
          <EmailOutline />
          grupogepet46@gmail.com
        </S.TextRow>
      </S.Column>

      <S.Column id="event">
        <S.Strong>Evento</S.Strong>
        <Link href="/">Início</Link>
        <Link href="/inscricao">Incrições</Link>
        <Link href="/inscricao/artigo">Envio de artigos</Link>
        <Link href="/programacao">Programação</Link>
      </S.Column>

      <S.Column id="madeby">
        <S.Strong>Realização</S.Strong>

        <img src="/img/logo-red.png" alt="logo" />
      </S.Column>

      <S.Copyright>
        Copyright © 2022 – 1º Congresso Roraimense de Trauma e Emergências
        Médicas
      </S.Copyright>
    </S.Grid>
  </S.Wrapper>
)

export default Footer
