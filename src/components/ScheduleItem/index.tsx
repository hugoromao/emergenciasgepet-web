import * as S from './styles'

export type ScheduleItemProps = {
  day: number
  hideDate?: boolean
  extendedDay: string
  title: string
  subtitle: React.ReactNode
}

const ScheduleItem = ({
  day,
  extendedDay,
  hideDate,
  subtitle,
  title
}: ScheduleItemProps) => (
  <S.Wrapper>
    <h2 style={hideDate ? { visibility: 'hidden' } : {}}>
      <strong>{day}</strong>
      {extendedDay}
    </h2>
    <S.Column>
      <h1>{title}</h1>
      {subtitle}
    </S.Column>
  </S.Wrapper>
)

export default ScheduleItem
