import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    border-radius: 0.8rem;
    padding: 1.6rem 2.4rem;

    border: 0.1rem solid ${theme.colors.lightGray1};
    color: ${theme.colors.lightGray1};

    svg {
      height: 4.2rem;
      fill: ${theme.colors.lightGray1};
    }

    strong {
      font-size: 2.4rem;
    }

    width: fit-content;

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
