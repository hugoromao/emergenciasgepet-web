import { Story, Meta } from '@storybook/react'
import Countdown from '.'

export default {
  title: 'Countdown',
  component: Countdown
} as Meta

export const Default: Story = () => <Countdown />
