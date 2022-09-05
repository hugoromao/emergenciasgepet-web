import { Story, Meta } from '@storybook/react'
import NativeSelect, { NativeSelectProps } from '.'

export default {
  title: 'Form/NativeSelect',
  component: NativeSelect,
  args: {
    options: [{ label: 'teste', value: 1 }],
    label: 'Teste'
  } as NativeSelectProps
} as Meta

export const Default: Story<NativeSelectProps> = (args) => (
  <NativeSelect {...args} />
)
