import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Container } from 'templates/Home/styles'

export const Wrapper = styled.main``

export const Table = styled.table`
  ${({ theme }) => css`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 40rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
      background-color: ${theme.colors.darkRed};
      color: #ffffff;
      text-align: left;
      font-weight: 700;
    }

    th,
    td {
      padding: 12px 15px;
    }

    tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid ${theme.colors.darkRed};
    }

    ${media.lessThan('medium')`
      min-width: auto;
    `}
  `}
`

export const THead = styled.thead``

export const TBody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  & + & {
    white-space: nowrap;
  }
`

export const Td = styled.td`
  & + & {
    white-space: nowrap;
  }
`

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;

  a,
  button {
    width: 100%;
    text-transform: uppercase;
  }
`
