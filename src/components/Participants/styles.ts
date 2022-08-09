import styled from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'templates/Home/styles'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6.4rem;
  padding: 2.4rem;
`

export const Grid = styled.div`
  display: grid;
  gap: 4.2rem;
  grid-template-columns: 1fr 1fr 1fr;

  ${media.between('medium', 'large')`
      grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('medium')`
      grid-template-columns: 1fr;
  `}
`

export const Title = styled.strong`
  font-size: 6.4rem;
  font-weight: 700;
  position: relative;

  ${media.lessThan('medium')`
      font-size: 4.8rem;
  `}
`
