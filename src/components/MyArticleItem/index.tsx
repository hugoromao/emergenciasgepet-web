import { Article } from 'styled-icons/material-rounded'
import { Daum } from 'templates/PerfilTemplate/types'
import * as S from './styles'

type MyArticleItemProps = Daum

const MyArticleItem = ({ attributes }: MyArticleItemProps) => {
  return (
    <S.Wrapper>
      <Article />

      <S.Column>
        <strong>{attributes.titulodoartigo}</strong>
        <p>
          {attributes.areadeestudo} • {attributes.instituicao}
        </p>
      </S.Column>
    </S.Wrapper>
  )
}

export default MyArticleItem
