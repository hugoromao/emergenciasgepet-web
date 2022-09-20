import styled from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'templates/Home/styles'

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

export const Subtitle = styled.p`
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  margin-top: 0.8rem;
  font-size: 2.4rem;
  color: white;
  word-break: break-all;
  ${media.lessThan('medium')`
    font-size: 3.6rem;
  `}
`

export const Content = styled(Container)`
  padding: 3.2rem;
`

export const SectionText = styled.h2`
  margin: 3.2rem 0;
  font-size: 3.2rem;
`

export const NotFount = styled.h3`
  margin: auto;
`
