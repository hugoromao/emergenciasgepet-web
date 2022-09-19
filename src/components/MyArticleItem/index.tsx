import { Article } from 'styled-icons/material-rounded'
import * as S from './styles'

const MyArticleItem = () => (
  <S.Wrapper>
    <Article />

    <S.Column>
      <strong>MyArticleItem</strong>
      <p>Teste</p>
    </S.Column>
  </S.Wrapper>
)

export default MyArticleItem
