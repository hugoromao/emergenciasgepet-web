import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50vw;
    height: 100vh;
    overflow: auto;
    padding: ${theme.spacings.medium} 0;

    overflow: auto;
  `}
`

export const ContentWrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
    max-width: 56rem;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.large} * 2);
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
    grid-template-columns: auto 1fr;
    gap: ${theme.spacings.small};

    h1 {
      margin: 0;
    }
  `}
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: black;
  `}
`

export const Warning = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.4rem 1.6rem;
    background-color: #fff9e9;
    gap: ${theme.spacings.xsmall};

    svg {
      height: 3.2rem;
      fill: #ffc02d;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: 500;
    }
  `}
`
