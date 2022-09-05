import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  object-position: top;
`

export const Strong = styled.strong`
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  max-width: 60%;
`

export const Text = styled.p`
  font-size: 1.6rem;
  max-width: 30rem;
  font-weight: 400;
  text-align: center;
`
