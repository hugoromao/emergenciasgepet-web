import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Hero = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: fit-content;

    background: linear-gradient(357.23deg, #e52521 19.28%, #b71e1a 128.93%);
    position: relative;
    padding: 2.4rem;

    ${media.greaterThan('medium')`
      min-height: 82rem;
    `}
  `}
`

export const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: fit-content;

  ${media.greaterThan('medium')`
      min-height: 82rem;
  `}
`

export const HeroContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'img title title title' 'buttons buttons none social';
  row-gap: 4.8rem;
  margin: auto;
  min-height: 0;

  img {
    grid-area: img;
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
  }

  &::after {
    content: '2022';
    position: absolute;
    right: 0;
    bottom: 2.4rem;
    font-size: 12.8rem;
    font-weight: 700;
    color: #b71e1a;
  }

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    row-gap: 4.8rem;
    margin: 0;

    img {
      grid-area: img;
      width: 10rem;
      height: 10rem;
    }

    &::after {
      font-size: 5.2rem;
      bottom: 1.4rem;
    }
  `}
`

export const HeroText = styled.span`
  display: flex;
  grid-area: title;
  flex-direction: column;
  max-width: 78.5rem;
  margin: auto;
  gap: 2.4rem;

  h1 {
    font-size: 5.2rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    text-align: center;
    ${media.lessThan('medium')`
      font-size: 3.2rem;
    `}
  }

  p {
    font-size: 2.4rem;
    color: white;
    text-align: center;
  }
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-area: buttons;
    gap: ${theme.spacings.xsmall};

    a {
      display: flex;
      gap: 1.6rem;
      text-transform: uppercase;
      text-decoration: none;
    }

    svg {
      height: 2.4rem;
    }

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  `}
`

export const SocialButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-area: social;
    gap: ${theme.spacings.xsmall};

    svg {
      cursor: pointer;
      height: 4.2rem;
      fill: white;
    }

    ${media.lessThan('medium')`
      align-self: start;
    `}
  `}
`

export const About = styled(Container)`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: #000;

  #about {
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  strong {
    font-size: 6.4rem;
    font-weight: 700;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
  }

  a {
    width: fit-content;
    text-decoration: none;
  }
`

export const AboutImage = styled.div`
  position: relative;

  img {
    width: 68rem;
    height: 61rem;
    object-fit: cover;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    z-index: 1;

    &::after {
      content: 'asd';
      position: absolute;
      width: 14rem;
      height: 18rem;
      background-image: url('/img/plus-right.png');
      right: 0;
      bottom: 0;
      z-index: 2;
    }
  }
`
