import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1.6rem;

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
    padding: 1.6rem;
    justify-content: start;
    width: fit-content;
    margin: 0 auto;

    img {
      height: 2.4rem;
    }
  }
`
