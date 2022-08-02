import { Story, Meta } from '@storybook/react'
import SubscriptionForm from '.'

export default {
  title: 'SubscriptionForm',
  component: SubscriptionForm,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <SubscriptionForm />
