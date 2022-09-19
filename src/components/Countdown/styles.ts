import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'templates/Home/styles'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    padding: 2.4rem;
    background-color: ${theme.colors.darkRed};

    background: linear-gradient(357.23deg, #e52521 19.28%, #b71e1a 128.93%);

    margin: 0 auto;
    margin-top: 5.4rem;
    margin-bottom: 0;
    min-height: 54rem;

    text-align: center;
    color: white;
    max-width: none;

    strong {
      font-size: 3.2rem;
      text-transform: uppercase;

      ${media.lessThan('medium')`
        font-size: 2.4rem;
      `}
    }
  `}
`

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Info = styled.p`
  /* color: #b71e1a; */
  /* font-weight: 700; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Number = styled.p`
  font-size: 3.2rem;
`

export const Timer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.gray};
    font-weight: 700;
    font-size: 1.4rem;
    border-radius: 50%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);

    width: 12rem;
    height: 12rem;
  `}
`
