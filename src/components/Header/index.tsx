/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Close, Menu } from 'styled-icons/material-rounded'
import * as S from './styles'

type HeaderProps = {
  transparent?: boolean
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false)

  const router = useRouter()

  return (
    <>
      <S.Wrapper transparent={transparent}>
        <img src="/img/logo.png" />

        <S.Button onClick={() => setOpenMenu(true)}>
          <Menu />
        </S.Button>
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
              <S.Link active={router.route === '/incricao'}>Inscrição</S.Link>
            </Link>
            <Link href="/inscricao/artigo" passHref>
              <S.Link active={router.route === '/inscricao/artigo'}>
                Envio de artigos
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
