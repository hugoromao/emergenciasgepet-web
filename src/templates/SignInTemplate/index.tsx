import * as S from './styles'

type SignInTemplateProps = {
  children: React.ReactNode
}

const SignInTemplate = ({ children }: SignInTemplateProps) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default SignInTemplate
