import { Story, Meta } from '@storybook/react'
import FileField, { FileFieldProps } from '.'

export default {
  title: 'Form/FileField',
  component: FileField,
  parameters: {
    viewport: {
      defaultViewport: 'desktop1'
    }
  },
  args: { name: 'teste', label: 'Comprovante' } as FileFieldProps
} as Meta

export const Default: Story<FileFieldProps> = (args) => <FileField {...args} />
