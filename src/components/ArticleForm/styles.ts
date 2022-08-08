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

    display: flex;
    flex-direction: column;
    justify-content: center;
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
