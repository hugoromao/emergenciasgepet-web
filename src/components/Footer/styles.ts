import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  border-top: 0.1rem solid #d1b53f;
  padding: 4.2rem 2.4rem;
`

export const Grid = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  gap: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${media.lessThan('large')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('medium')`
    #event,
    #madeby {
      display: none;
    }
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  img {
    height: 13rem;
  }
`

export const Row = styled.span`
  display: flex;
  gap: 2.4rem;
`

export const Strong = styled.strong`
  font-size: 2.4rem;
  font-weight: 700;
`

export const TextRow = styled.span`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  svg {
    height: 2.4rem;
  }

  p {
    font-size: 1.6rem;
  }
`

export const Copyright = styled.div`
  grid-column: span 4;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  margin-top: 4.2rem;

  ${media.lessThan('large')`
    grid-column: span 2;
  `}
`
