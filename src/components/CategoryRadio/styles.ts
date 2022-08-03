import styled, { css } from 'styled-components'

type WrapperProps = {
  focus: boolean
}

export const Wrapper = styled.label<WrapperProps>`
  ${({ theme, focus }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
    gap: 1.2rem;

    border-radius: 0.4rem;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    border: 0.1rem solid transparent;

    ${focus &&
    css`
      border: 0.1rem solid ${theme.colors.darkRed};
    `}

    cursor: pointer;

    input {
      display: none;
    }

    transition: all 0.4s;

    strong {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
    }
  `}
`

export const PriceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.6rem;
`

export const Price = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    p {
      font-size: ${theme.font.sizes.medium};
    }

    strong {
      font-weight: ${theme.font.bold};
    }
  `}
`
