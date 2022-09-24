import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'templates/Home/styles'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;
  padding: 2.4rem;

  margin: 0 auto;
  margin-top: 5.4rem;
  margin-bottom: 5.4rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  width: 100%;
  text-align: justify;

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

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 0.8rem;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);

    strong {
      font-size: 2.4rem;
      color: white;
      text-transform: uppercase;
    }

    svg {
      fill: white;
      height: 2.4rem;
      min-width: 2.4rem;
    }

    span {
      padding: 1.6rem;
      background-color: ${theme.colors.darkRed};
      border-radius: 0.8rem 0.8rem 0 0;
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    div {
      padding: 1.6rem;
    }
  `}
`
