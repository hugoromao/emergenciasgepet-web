import { Story, Meta } from '@storybook/react'
import FileField from '.'

export default {
  title: 'Form/FileField',
  component: FileField,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1'
    }
  }
} as Meta

export const Default: Story = () => <FileField />
