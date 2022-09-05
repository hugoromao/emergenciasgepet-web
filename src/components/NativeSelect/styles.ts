import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.4rem;

  #expand {
    height: 2.4rem;
    position: absolute;
    bottom: 0.7rem;
    right: 1rem;
    pointer-events: none;
  }
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.lightGray1};
    cursor: pointer;
  `}
`

export const Select = styled.select`
  ${({ theme }) => css`
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    padding-right: 2.4rem;
    padding: 0.8rem 1.6rem;
    padding-right: 3.2rem;

    outline: none;
    cursor: pointer;

    border: none;
    border-radius: 0.2rem;

    background-color: transparent;
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray1};

    color: ${theme.colors.lightGray1};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};

    text-overflow: ellipsis;
    max-width: 24rem;

    option {
      padding: 1.6rem 0;
    }

    &::after {
      content: '';
      width: 0.8em;
      height: 0.5em;
      background-color: #777;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }

    &::-ms-expand {
      display: none;
    }

    ${media.lessThan('large')`
      max-width: initial;
    `}
  `}
`

export const Option = styled.option``
