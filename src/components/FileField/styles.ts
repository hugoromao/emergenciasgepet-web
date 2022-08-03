import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: transparent;
    border-radius: 0.2rem;
    border: 0.2rem solid;
    padding: 0.6rem 1.2rem;
    border-style: dashed;
    border-color: #cbd5e1;
    gap: ${theme.spacings.xxsmall};

    svg {
      height: 2.4rem;
      width: 2.4rem;
      min-width: 2.4rem;
    }

    p {
      font-size: ${theme.font.sizes.small};
      font-weight: 300;
      color: ${theme.colors.lightGray1};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray1};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    outline: none;
    width: 100%;
    display: none;

    cursor: pointer;

    &::placeholder {
      color: ${lighten(0.4, theme.colors.lightGray1)};
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray1} inset;
      filter: none;
    }
  `}
`

export const Wrapper = styled.div`
  ${() => css``}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};

    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    color: ${theme.colors.lightGray1};
    cursor: pointer;
  `}
`
