import Image from 'next/image'

import * as S from './styles'

type FormTemplateProps = {
  children: React.ReactNode
}

const FormTemplate = ({ children }: FormTemplateProps) => (
  <S.Wrapper>
    <S.TemplateWrapper>
      <S.ImageWrapper>
        <S.HeroImage src="/img/doctors.jpg" layout="fill" objectFit="cover" />
      </S.ImageWrapper>
      <S.Hero>
        <Image width="100" height="100" src="/img/logo.png" />
        <S.Strong>
          I congresso roraimense de trauma e emergências médicas
        </S.Strong>
      </S.Hero>
    </S.TemplateWrapper>

    {children}
  </S.Wrapper>
)

export default FormTemplate
