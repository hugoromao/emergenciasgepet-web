import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    gap: 2.4rem;

    h2 {
      max-width: 8rem;
      font-size: 1.6rem;
      font-weight: 700;
      color: black;
      display: flex;
      flex-direction: column;
      text-transform: uppercase;

      border: 0.1rem solid black;
      height: fit-content;
      padding: 1.6rem;
    }

    strong {
      font-size: 3.2rem;
      font-weight: 700;
      color: black;
      text-transform: uppercase;
    }
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h1 {
      max-width: 23rem;
      font-size: 2.4rem;
      font-weight: 700;
      color: black;
      text-transform: uppercase;
      background-color: ${theme.colors.darkRed};
      color: white;
      width: 100%;
    }

    p {
      font-size: 1.4rem;
      font-weight: 700;
      color: #64748b;
    }
  `}
`
