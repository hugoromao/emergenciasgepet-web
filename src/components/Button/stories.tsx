import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: { backgroundColor: 'gray' } as ButtonProps
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args}>Default</Button>
)

export const Disabled: Story<ButtonProps> = (args) => (
  <Button {...args} disabled>
    Disabled
  </Button>
)

export const Loading: Story<ButtonProps> = (args) => (
  <Button {...args} loading>
    Loading
  </Button>
)
