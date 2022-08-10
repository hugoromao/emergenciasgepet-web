import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  padding-bottom: 4.2rem;

  width: 100vw;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;

  padding: 8rem 0;

  gap: 2.4rem;
`
