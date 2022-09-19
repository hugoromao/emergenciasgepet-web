import { Article } from 'styled-icons/material-rounded'
import { SubscriptionAttributes } from 'templates/PerfilTemplate/types'
import * as S from './styles'

type SubscriptionItemProps = SubscriptionAttributes

const SubscriptionItem = ({ nome, celular, email }: SubscriptionItemProps) => {
  function hideString(string: string) {
    const hideNum = []
    for (let i = 0; i < string.length; i++) {
      if (i < 4) {
        hideNum.push('*')
      } else {
        hideNum.push(string[i])
      }
    }
    return hideNum.join('')
  }

  return (
    <S.Wrapper>
      <Article />

      <S.Column>
        <strong>{nome}</strong>
        <p>
          {hideString(celular)} • {hideString(email)}
        </p>
      </S.Column>
    </S.Wrapper>
  )
}

export default SubscriptionItem
