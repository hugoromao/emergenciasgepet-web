import styled, { css, DefaultTheme } from 'styled-components'
import { lighten } from 'polished'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: transparent;
    border-radius: 0.2rem;
    /* padding: 0 ${theme.spacings.xsmall}; */
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray1};
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.lightGray1};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};

    &::placeholder {
      color: ${lighten(0.4, theme.colors.lightGray1)};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray1} inset;
      filter: none
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray1};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.lightGray1};
    order: ${iconPosition === 'right' ? 1 : 0};
    padding-left: ${iconPosition === 'left' ? '0.8rem' : 0};
    padding-right: ${iconPosition === 'right' ? '0.8rem' : 0};

    & > svg {
      width: 2.2rem;
      height: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkRed};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.darkRed};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.darkRed};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: ${lighten(0.4, theme.colors.lightGray1)};
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
