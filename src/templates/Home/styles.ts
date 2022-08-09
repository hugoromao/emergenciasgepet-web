import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Hero = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    height: 82rem;
    background: linear-gradient(357.23deg, #e52521 19.28%, #b71e1a 128.93%);
    position: relative;
    padding: 2.4rem;
  `}
`

export const Container = styled.div`
  max-width: 130rem;
`

export const HeroContent = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'img title title title' 'buttons buttons none social';
  row-gap: 4.8rem;
  margin: auto;

  img {
    grid-area: img;
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
  `}
`
