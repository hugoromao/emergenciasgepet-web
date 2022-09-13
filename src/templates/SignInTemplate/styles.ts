import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  background-image: url('/img/doctors.jpg');
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* From https://css.glass */
    background: rgba(43, 45, 66, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`

export const Content = styled.div`
  @keyframes showUp {
    from {
      opacity: 0;
      margin-top: 2.4rem;
    }

    to {
      opacity: 1;
      margin-top: 0rem;
    }
  }

  ${({ theme }) => css`
    display: flex;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${theme.shadows.default};
    background-color: white;

    width: 80vw;
    min-height: 40rem;
    animation: showUp 1s;

    border-radius: ${theme.border.radius};
    padding: 2.4rem;

    ${media.greaterThan('small')`
      max-width: 45rem;
    `}
  `}
`
