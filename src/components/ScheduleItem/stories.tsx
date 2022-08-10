import { Story, Meta } from '@storybook/react'
import ScheduleItem, { ScheduleItemProps } from '.'

export default {
  title: 'ScheduleItem',
  component: ScheduleItem,
  args: {
    day: 1,
    extendedDay: 'quita',
    local: 'kasmdka',
    title: 'titile'
  } as ScheduleItemProps
} as Meta

export const Default: Story<ScheduleItemProps> = (args) => (
  <ScheduleItem {...args} />
)
