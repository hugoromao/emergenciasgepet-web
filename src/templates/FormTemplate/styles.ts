import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  position: relative;
`

export const Strong = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: white;
    text-align: center;
    text-transform: uppercase;
    max-width: 45rem;
  `}
`

export const ImageWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  position: absolute;
`

export const HeroImage = styled(Image)`
  position: absolute;
  left: 0;
`

export const Hero = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    justify-content: center;
    width: 50vw;
    height: 100vh;
    z-index: ${theme.layers.base};

    background: #2b2d42;
    opacity: 0.9;

    color: white;
  `}
`

export const FormWrapper = styled.div``
