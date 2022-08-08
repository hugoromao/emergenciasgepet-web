import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.colors.darkRed};
    padding: ${theme.spacings.xsmall};

    position: relative;

    svg {
      height: 3.2rem;
      fill: ${theme.colors.white};
    }
  `}
`
