import styled, { css } from 'styled-components'

export const Wrapper = styled.main``
import media from 'styled-media-query'
import { Container } from 'templates/Home/styles'

export const Content = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    height: fit-content;
    width: -webkit-fill-available;
    /* position: relative; */
    text-align: justify;

    h1 {
      font-size: 1.6rem;
    }

    b {
      color: ${theme.colors.darkRed};
    }

    strong {
      font-size: 3.2rem;
      text-align: center;
      margin: 1.6rem 0;
      font-weight: 700;
      text-transform: uppercase;
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
