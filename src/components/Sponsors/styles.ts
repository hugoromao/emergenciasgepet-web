import styled, { css } from 'styled-components'
import { Container } from 'templates/Home/styles'
import media from 'styled-media-query'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 6.4rem;
  padding: 2.4rem;

  margin: 0 auto;
  margin-top: 5.4rem;
  margin-bottom: 5.4rem;

  min-height: auto !important;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;

  ${media.lessThan('medium')`
    flex-direction: column;

    img[src="/img/uerr.PNG"] {
      height: 10rem;
    }
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    box-shadow: 0px 7px 29px rgba(100 100 111 / 20%);
    border-radius: 0.8rem;
    padding: 1.6rem;
    overflow: hidden;
    position: relative;

    img {
      height: 16rem;
    }

    &::before {
      content: '';
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.8rem;
      background-color: ${theme.colors.darkRed};
    }
  `}
`
