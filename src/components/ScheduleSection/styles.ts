import styled from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'templates/Home/styles'

export const Wrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  margin: 0 auto;

  ${media.lessThan('medium')`
    text-align: start;
    align-items: start;
    justify-content: start;
    padding: 2.4rem;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10rem;
    /* background-image: url('/img/plus-schedule-left.png'); */
    width: 35rem;
    height: 35rem;

    ${media.lessThan('medium')`
      display: none;
    `}

    ${media.between('medium', 'large')`
      left: -20rem;
    `}
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0rem;
    /* background-image: url('/img/plus-schedule-right.png'); */
    background-repeat: no-repeat;
    width: 26rem;
    height: 20rem;

    ${media.lessThan('medium')`
      display: none;
    `}
  }

  p {
    font-size: 1.6rem;
    max-width: 42rem;

    ${media.lessThan('medium')`
      text-align: start;
    `}

    text-align: center;
  }

  button {
    text-transform: uppercase;
  }
`

export const Strong = styled.strong`
  font-size: 6.4rem;
  font-weight: 700;
  position: relative;
  text-align: center;

  ${media.lessThan('medium')`
      font-size: 3.2rem;
  `}
`
