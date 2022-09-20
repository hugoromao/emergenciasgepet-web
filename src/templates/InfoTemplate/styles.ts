import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  padding-bottom: 4.2rem;

  height: 25rem;
  background: linear-gradient(338.56deg, #e52521 -3.74%, #b71e1a 103.67%);
`

export const Title = styled.h1`
  width: 100%;
  max-width: 130rem;
  font-size: 5.2rem;
  margin: 0 auto;
  margin-top: auto;
  color: white;
  word-break: break-all;
  ${media.lessThan('medium')`
    font-size: 3.6rem;
  `}
`

export const Indent = styled.p`
  margin-left: 2.4rem;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 2.4rem;
    height: fit-content;
    width: -webkit-fill-available;
    /* position: relative; */

    button {
      position: sticky;
      bottom: 2.4rem;
      right: 2.4rem;
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
