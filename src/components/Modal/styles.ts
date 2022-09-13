import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.4);
`

export const Modal = styled.div`
  ${({ theme }) => css`
    display: flex;

    width: 80vw;
    height: 40rem;
    border-radius: ${theme.border.radius};

    background: white;
    padding: ${theme.spacings.xsmall};
    position: relative;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    svg {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
      fill: #707070;
      cursor: pointer;
    }
  `}
`
