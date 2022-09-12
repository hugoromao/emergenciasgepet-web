/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Close, Menu } from 'styled-icons/material-rounded'

import * as S from './styles'

type HeaderProps = {
  transparent?: boolean
  hideLogo?: boolean
}

const Header = ({ transparent = false, hideLogo = false }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  const router = useRouter()

  return (
    <>
      <S.Wrapper transparent={transparent}>
        <S.Container hideLogo={hideLogo}>
          <img src="/img/logo.png" />
          <S.LinksWrapper>
            <S.Link href="/">Início</S.Link>
            <S.Link href="/inscricao">Inscrições</S.Link>
            <S.Link href="/inscricao/artigo">Envio de artigos</S.Link>
            <S.Link href="/programacao">Programação</S.Link>
          </S.LinksWrapper>
          <S.Button id="menu" onClick={() => setOpenMenu(true)}>
            <Menu />
          </S.Button>
        </S.Container>
      </S.Wrapper>

      {openMenu && (
        <S.MenuWrapper>
          <S.Button onClick={() => setOpenMenu(false)}>
            <Close />
          </S.Button>

          <S.LinksWrapper>
            <Link href="/" passHref>
              <S.Link active={router.route === '/'}>Início</S.Link>
            </Link>
            <Link href="/incricao" passHref>
              <S.Link active={router.route === '/incricao'}>Inscrições</S.Link>
            </Link>
            <Link href="/inscricao/artigo" passHref>
              <S.Link active={router.route === '/inscricao/artigo'}>
                Submissões
              </S.Link>
            </Link>
            <Link href="/programacao" passHref>
              <S.Link active={router.route === '/programacao'}>
                Programação
              </S.Link>
            </Link>
          </S.LinksWrapper>
        </S.MenuWrapper>
      )}
    </>
  )
}

export default Header
