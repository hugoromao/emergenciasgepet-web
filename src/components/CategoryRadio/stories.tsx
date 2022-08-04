import { Story, Meta } from '@storybook/react'
import CategoryRadio, { CategoryRadioProps } from '.'

export default {
  title: 'CategoryRadio',
  component: CategoryRadio,
  args: {
    id: '1',
    isSelected: false,
    name: 'teste',
    prices: [{ label: 'label', price: 1 }],
    title: 'title',
    value: 'value',
    error: undefined
  } as CategoryRadioProps
} as Meta

export const Default: Story<CategoryRadioProps> = (args) => (
  <CategoryRadio {...args} />
)
