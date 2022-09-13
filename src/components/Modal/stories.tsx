import { Story, Meta } from '@storybook/react'
import { useState } from 'react'
import Modal from '.'

export default {
  title: 'Modal',
  component: Modal
} as Meta

export const Default: Story = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)}>Abrir</button>
      <Modal open={open} setOpen={setOpen}>
        <h1>Testee</h1>
      </Modal>
    </>
  )
}
