import Image from 'next/image'
import { Menu } from 'styled-icons/material-rounded'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Image src="/img/logo.png" width={35} height={35} />

    <Menu />
  </S.Wrapper>
)

export default Header
