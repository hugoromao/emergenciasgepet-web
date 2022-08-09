import { Story, Meta } from '@storybook/react'
import Participant, { ParticipantProps } from '.'

export default {
  title: 'Participant',
  component: Participant,
  args: {
    src: 'https://cdn.dribbble.com/users/77224/avatars/normal/67af2e02cc98b66c12df27abfa72e062.png?1654018916',
    title: 'Cécile L. Parker',
    text: 'Product designer and Illustrator. Mother to 59 houseplants.'
  } as ParticipantProps
} as Meta

export const Default: Story<ParticipantProps> = (args) => (
  <Participant {...args} />
)
