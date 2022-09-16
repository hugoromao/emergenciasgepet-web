import { Story, Meta } from '@storybook/react'
import ArticleRulesModal from '.'

export default {
  title: 'ArticleRulesModal',
  component: ArticleRulesModal
} as Meta

export const Default: Story = () => (
  <ArticleRulesModal open setOpen={() => ({})} />
)
