import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Wrapper as FileWrapper } from 'components/FileField/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50vw;
    /* height: 100vh; */
    overflow: auto;
    padding: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      width: 100%;
      padding: ${theme.spacings.xsmall};
      height: 100%;
    `}

    overflow: auto;
  `}
`

export const ContentWrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: inherit;
    max-width: 56rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    padding-bottom: 8.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.small};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xxlarge});
    color: ${theme.colors.blue};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const FormGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.xsmall};

    ${FileWrapper} {
      grid-column: span 2;
    }

    ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    width: 100%;
    ${FileWrapper} {
      grid-column: 1;
    }
    `}
  `}
`

export const CategoriesGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.xsmall};

    ${FormInfo} {
      grid-column: span 2;
    }

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      width: 100%;
      ${FormInfo} {
        grid-column: 1;
      }
    `}
  `}
`

export const Column = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Row = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.small};
  `}
`

export const FormInfo = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: black;
  `}
`

export const Payment = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacings.small};

    ${Column} {
      grid-column: span 2;
    }

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
      width: 100%;
      column-gap: 0;
    `}

    h1 {
      margin: 0;
    }
  `}
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: black;

    ${media.lessThan('small')`
      font-size: 1.2rem;
    `}
  `}
`

export const Warning = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.4rem 1.6rem;
    background-color: #fff9e9;
    gap: ${theme.spacings.xsmall};

    svg {
      width: 3.2rem;
      min-width: 3.2rem;
      fill: #ffc02d;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 500;
    }

    ${media.lessThan('small')`
      flex-direction: column;
    `}
  `}
`

export const BorderWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    height: min-content;
    border: 2rem solid ${theme.colors.darkRed};
    border-radius: 1.6rem;
  `}
`

export const QRCodeWrapper = styled.div`
  ${() => css`
    position: relative;
    /* width: 30rem; */
    /* height: 30rem; */
    border-radius: 2.4rem;
    /* margin: 1.6rem; */

    img {
      width: 100%;
    }
  `}
`

export const StepButtonsWrapper = styled.div`
  display: flex;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  button {
    width: 100% !important;
    height: 5.6rem;
    border-radius: 0;
  }

  ${media.greaterThan('medium')`
    width: 50vw;
    left: auto;
  `}
`

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
`
