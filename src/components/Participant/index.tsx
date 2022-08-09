import * as S from './styles'

export type ParticipantProps = {
  title: string
  text: string
  src: string
}

const Participant = ({ src, text, title }: ParticipantProps) => (
  <S.Wrapper>
    <S.Image src={src} />
    <S.Strong>{title}</S.Strong>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default Participant
