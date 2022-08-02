import styled, { css } from 'styled-components'

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
    height: 42rem;
    border-radius: 0.4rem;
    background-color: white;
    gap: ${theme.spacings.xxsmall};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: ${theme.spacings.small};
    }

    button {
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
    }
  `}
`
