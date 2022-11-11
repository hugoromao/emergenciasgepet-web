import styled, { css } from 'styled-components'
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
  /* word-break: break-all; */
  word-break: break-word;
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

export const ComprovanteWrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    border-radius: 0 0.8rem 0.8rem 0;
    padding: 2.4rem;
    margin-bottom: 2.4rem;
    box-shadow: ${theme.shadows.default};
    border-left: 0.4rem solid ${theme.colors.darkRed};
  `}
`

export const PagamentoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    border-radius: 0 0.8rem 0.8rem 0;
    padding: 2.4rem;
    margin-bottom: 2.4rem;
    box-shadow: ${theme.shadows.default};
    border-left: 0.4rem solid ${theme.colors.darkRed};
  `}
`

export const AcceptedWrapper = styled.div`
  ${({ theme }) => {
    return css`
    display: flex;
    flex-direction: column;

    padding: 2.4rem;
    border 1px solid ${theme.colors.primary};
    border-radius: 1.6rem;
    margin-bottom: 1.6rem;

    background: #FCF7B6;

    p {
      text-align: justify;
    }
  `
  }}
`

export const AcceptedInfoWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      border-radius: 1.6rem;
      margin: 0.8rem 0;
      padding: 2.4rem;
      border 1px solid ${theme.colors.disabled};
      p {
        font-weight: 700;
        color: ${theme.colors.primary};
      }
    `
  }}
`

export const AcceptedText = styled.p`
  font-size: 1.6rem;
`
