import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: fit-content;
    width: -webkit-fill-available;
    /* position: relative; */

    button {
      /* position: fixed;
      bottom: 2.4rem;
      right: 2.4rem; */
    }

    h1 {
      font-size: 1.6rem;
    }

    b {
      color: ${theme.colors.darkRed};
    }

    strong {
      font-size: 2.4rem;
    }

    li {
      margin-left: 2.4rem;
    }

    ${media.lessThan('small')`
      strong {
        font-size: 1.8rem;
      }
    `}
  `}
`

export const Indent = styled.p`
  margin-left: 2.4rem;
`
