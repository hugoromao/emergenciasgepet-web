import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-image: url('/img/success.png');
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 72rem;
    min-height: 42rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: white;
    gap: ${theme.spacings.xxsmall};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: ${theme.spacings.small};
    }

    p {
      text-align: center;
      font-size: 1.6rem;
      max-width: 20rem;
      margin-bottom: ${theme.spacings.small};
    }

    button {
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
    }

    ${media.lessThan('medium')`
      width: 100%;
      height: 100%;
      padding: ${theme.spacings.xsmall};
    `}
  `}
`
