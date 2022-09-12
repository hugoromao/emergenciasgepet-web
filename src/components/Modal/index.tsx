import { useState } from 'react'
import { Close } from 'styled-icons/material-rounded'

import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const [open, setOpen] = useState(true)

  function closeModal() {
    setOpen(false)
  }

  return (
    <S.Wrapper>
      <h1>{children}</h1>

      {open && (
        <S.ModalWrapper onClick={closeModal}>
          <S.Modal>
            <Close size={24} onClick={closeModal} />

            <h1>Teste</h1>
          </S.Modal>
        </S.ModalWrapper>
      )}
    </S.Wrapper>
  )
}

export default Modal
