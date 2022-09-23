import Button from 'components/Button'
import Header from 'components/Header'
import dayjs from 'dayjs'
import Link from 'next/link'

import { HeadingWrapper, Title } from 'templates/InfoTemplate/styles'

import * as S from './styles'

export function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const isAfter3009 = dayjs().isAfter('2022-09-30')

const categoriesPrices = {
  'Estudante de graduação (MEDICINA)': {
    price: formatPrice(isAfter3009 ? 80 : 70),
    label: 'Estudante de graduação (medicina)'
  },
  MÉDICO: {
    price: formatPrice(isAfter3009 ? 115 : 100),
    label: 'Médico'
  },
  'Estudante de graduação (Outro curso da saúde)': {
    price: formatPrice(isAfter3009 ? 90 : 80),
    label: 'Estudante de graduação (outro curso da saúde) (vagas limitadas)'
  },
  'Outros profissionais da saúde': {
    price: formatPrice(isAfter3009 ? 120 : 115),
    label: 'Outros profissionais da saúde'
  }
}

const ValoresTemplate = () => (
  <S.Wrapper>
    <HeadingWrapper>
      <Header transparent />

      <Title>TABELA DE PREÇOS</Title>
    </HeadingWrapper>

    <S.Content>
      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>Categoria</S.Th>
            <S.Th>Valor</S.Th>
          </S.Tr>
        </S.THead>
        <S.TBody>
          <S.Tr>
            <S.Td>Estudante de Graduação (MEDICINA)</S.Td>
            <S.Td>
              {categoriesPrices['Estudante de graduação (MEDICINA)'].price}
            </S.Td>
          </S.Tr>
          <S.Tr>
            <S.Td>
              Estudante de Graduação (OUTRO CURSO DA SAÚDE) (VAGAS LIMITADAS)
            </S.Td>
            <S.Td>
              {' '}
              {
                categoriesPrices[
                  'Estudante de graduação (Outro curso da saúde)'
                ].price
              }
            </S.Td>
          </S.Tr>
          <S.Tr>
            <S.Td>MÉDICO (VAGAS LIMITADAS)</S.Td>
            <S.Td> {categoriesPrices.MÉDICO.price}</S.Td>
          </S.Tr>
          <S.Tr>
            <S.Td>OUTROS PROFISSIONAIS DA SAÚDE (VAGAS LIMITADAS)</S.Td>
            <S.Td>
              {' '}
              {categoriesPrices['Outros profissionais da saúde'].price}
            </S.Td>
          </S.Tr>
        </S.TBody>
      </S.Table>

      <Link href="/inscricao">
        <a>
          <Button type="button">Fazer minha inscrição</Button>
        </a>
      </Link>
    </S.Content>
  </S.Wrapper>
)

export default ValoresTemplate
