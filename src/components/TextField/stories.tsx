import { Story } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop1'
    }
  }
}

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300 }}>
    <TextField {...args} />
  </div>
)

export const Phone: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField
      {...args}
      type="tel"
      mask="phone"
      label="Phone"
      name="Phone"
      icon={null}
    />
  </div>
)

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}
