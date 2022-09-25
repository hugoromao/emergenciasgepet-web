/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Close, Menu } from 'styled-icons/material-rounded'

import * as S from './styles'
import Button from 'components/Button'
import { signOut, useSession } from 'next-auth/react'

type HeaderProps = {
  transparent?: boolean
  hideLogo?: boolean
}

const Header = ({ transparent = false, hideLogo = false }: HeaderProps) => {
  const { status } = useSession()
  const [openMenu, setOpenMenu] = useState(false)

  const router = useRouter()

  return (
    <>
      <S.Wrapper transparent={transparent}>
        <S.Container hideLogo={hideLogo}>
          <img src="/img/logo.png" />
          <S.LinksWrapper>
            <S.Link href="/">Início</S.Link>
            <S.Link href="/valores">Inscrições</S.Link>
            <S.Link href="/info">Envio de artigos</S.Link>
            <S.Link href="/programacao">Programação</S.Link>
            <S.Link href="/quemSomos">Quem Somos</S.Link>
            {status === 'authenticated' && (
              <S.Link href="/perfil">
                <Button type="button" backgroundColor="gray">
                  Área do usuário
                </Button>
              </S.Link>
            )}
            {status !== 'authenticated' ? (
              <S.Link href="/signIn?callbackUrl=/">
                <Button type="button" backgroundColor="gray">
                  Entrar
                </Button>
              </S.Link>
            ) : (
              <Button
                type="button"
                backgroundColor="gray"
                onClick={() => {
                  signOut()
                }}
              >
                Sair
              </Button>
            )}
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
            <Link href="/valores" passHref>
              <S.Link active={router.route === '/incricao'}>Inscrições</S.Link>
            </Link>
            <Link href="/info" passHref>
              <S.Link active={router.route === '/info'}>Submissões</S.Link>
            </Link>
            <Link href="/programacao" passHref>
              <S.Link active={router.route === '/programacao'}>
                Programação
              </S.Link>
            </Link>
            <Link href="/quemSomos" passHref>
              <S.Link active={router.route === '/quemSomos'}>Quem Somos</S.Link>
            </Link>
            {status === 'authenticated' && (
              <Link href="/perfil" passHref>
                <S.Link>Área do usuário</S.Link>
              </Link>
            )}
            {status !== 'authenticated' ? (
              <Link href="/signIn?callbackUrl=/" passHref>
                <S.Link>Entrar</S.Link>
              </Link>
            ) : (
              <S.Link
                onClick={() => {
                  signOut()
                }}
              >
                Sair
              </S.Link>
            )}
          </S.LinksWrapper>
        </S.MenuWrapper>
      )}
    </>
  )
}

export default Header
