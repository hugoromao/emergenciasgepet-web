import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.colors.darkRed};
    padding: 0.8rem ${theme.spacings.xsmall};

    position: relative;

    img {
      height: 4.2rem;
    }

    svg {
      height: 3.2rem;
      fill: ${theme.colors.white};
    }
  `}
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`

export const MenuWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;

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
`

export const LinksWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
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
