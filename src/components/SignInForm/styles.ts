import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.6rem;

  button {
    height: 4.8rem;
  }

  button[type='submit'] {
    margin-top: auto;
  }

  #google {
    border-radius: 0.4rem;
    background: white;
    color: rgba(0, 0, 0, 0.54);
    box-shadow: 0px 0px 2.41919px rgba(0, 0, 0, 0.084),
      0px 2.41919px 2.41919px rgba(0, 0, 0, 0.168);
    border: none;

    display: flex;
    gap: 2.4rem;
    padding: 1.2rem 1.6rem;
    /* justify-content: start; */
    width: 100%;
    margin: 0 auto;

    img {
      height: 2.4rem;
    }
  }
`

export const Span = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    gap: 2.4rem;

    p {
      font-size: 1.4rem;
      color: #707070;
    }

    hr {
      width: 100%;
      height: 0.1rem;
      border: none;
      background-color: #707070;
    }

    a {
      color: ${theme.colors.darkRed};
      font-weight: 700;
    }
  `}
`
