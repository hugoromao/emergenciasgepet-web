import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const LinksWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: ${theme.spacings.small};
  `}
`

type LinkProps = {
  active?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, active }) => css`
    width: fit-content;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    color: #000;
    text-align: center;
    margin: 0 auto;

    ${active &&
    css`
      &::after {
        content: '';
        display: flex;
        height: 0.4rem;
        background: ${theme.gradients.red};
        width: 100%;
      }
    `}
  `}
`

type WrapperProps = {
  transparent: boolean
}

export const Wrapper = styled.header<WrapperProps>`
  ${({ theme, transparent }) => css`
    display: flex;
    background-color: ${theme.colors.darkRed};
    width: 100%;
    max-width: 130rem;
    margin: 0 auto;

    ${transparent &&
    css`
      background-color: transparent;
    `}
  `}
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`

export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: ${theme.layers.menu};

    align-items: center;
    justify-content: center;

    button {
      position: absolute;
      right: 1.6rem;
      top: 1.6rem;

      svg {
        height: 3.2rem;
      }
    }
  `}
`

type ContainerProps = {
  hideLogo: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, hideLogo }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-left: auto; */
    width: 100%;

    position: relative;

    img {
      height: 4.2rem;
    }

    svg {
      height: 3.2rem;
      fill: ${theme.colors.white};
    }

    ${media.greaterThan('large')`
      #menu {
        display: none;
      }
    `}

    ${hideLogo &&
    css`
      img {
        visibility: hidden;
      }
    `}

    ${LinksWrapper} {
      display: flex;
      flex-direction: row;
      ${media.lessThan('medium')`
        display: none;
      `}
    }

    ${Link} {
      color: white;
      font-size: 1.6rem;
      text-transform: uppercase;
    }
  `}
`
