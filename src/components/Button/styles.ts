import { lighten } from 'polished'

import styled, { css, DefaultTheme } from 'styled-components'

type ButtonProps = {
  backgroundColor: 'gray' | 'red'
  styleType: 'default' | 'outline' | 'minimal' | 'icon'
}

const backgrounds = {
  gray: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray};
    border: 1px solid ${theme.colors.gray};
  `,
  red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkRed};
    border: 1px solid ${theme.colors.darkRed};
  `
}

const buttonModifiers = {
  default: () => css``,

  outline: (theme: DefaultTheme) => css`
    background-color: white;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};

    &:hover {
      background-color: white;
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    border: none;
    background-color: white;
    color: ${theme.colors.primary};
    border: 1px solid white;

    svg,
    circle {
      fill: ${theme.colors.primary};
    }

    &:hover {
      background-color: white;
    }
  `,
  icon: (theme: DefaultTheme) => css`
    border: none;
    background-color: white;
    color: ${theme.colors.primary};
    border: 1px solid white;
    width: min-content;
    min-width: auto;
    padding: 0.8rem;
    box-shadow: none;
    border: none;

    svg {
      height: 2.4rem;
      fill: ${theme.colors.black};
    }

    &:hover {
      border: none;
      background-color: white;
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, backgroundColor, styleType }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 3.6rem;

    font-family: ${theme.font.family};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    min-width: 6.7rem;
    border: none;
    color: white;
    border-radius: ${theme.border.radius};

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;

    box-shadow: ${theme.shadows.default};

    transition: ${theme.transition.fast};

    position: relative;

    &:hover {
      background-color: ${lighten(0.1, theme.colors[backgroundColor])};
      border: 1px solid ${lighten(0.1, theme.colors[backgroundColor])};
    }

    &:disabled {
      outline: black;
      background-color: white;
      color: ${theme.colors.lightGray};
      border: 1px solid white;
      cursor: not-allowed;
    }

    ${backgrounds[backgroundColor](theme)}

    ${buttonModifiers[styleType](theme)}
  `}
`
