import Button from 'components/Button'
import FileField from 'components/FileField'
import TextField from 'components/TextField'
import Image from 'next/image'
import { Warning } from 'styled-icons/material-outlined'
import * as S from './styles'

const SubscriptionForm = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Title>
          INSCRIÇÃO - 1º congresso roraimense de trauma e emergências médicas
        </S.Title>
        <S.FormGrid>
          <TextField label="Nome completo" />
          <TextField label="E-mail" />
          <TextField label="Telefone/Celular" />
        </S.FormGrid>
        <S.FormInfo>Pagamento</S.FormInfo>
        <S.Payment>
          <Image
            src="/img/qrcode.png"
            width="240"
            height="240"
            objectFit="contain"
          />
          <S.Column>
            <S.Column style={{ gap: 0 }}>
              <S.Title>R$ 35,00</S.Title>
              <S.Name>Fulana de Souza Lima</S.Name>
            </S.Column>
            <S.Warning>
              <Warning />
              <p>You may only place scheduled orders right now for pick up.</p>
            </S.Warning>
            <FileField />
          </S.Column>
        </S.Payment>
        <Button type="submit" style={{ width: 'fit-content' }}>
          Enviar
        </Button>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default SubscriptionForm
