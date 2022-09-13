import { Dispatch, SetStateAction, useRef } from 'react'
import { Close } from 'styled-icons/material-rounded'

import { useOnClickOutside } from 'hooks/useOnClickOutside'

import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ children, open, setOpen }: ModalProps) => {
  const ref = useRef(null)

  function closeModal() {
    setOpen(false)
  }

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <S.Wrapper>
      {open && (
        <S.ModalWrapper>
          <S.Modal
            ref={ref}
            // exit={{ opacity: 0, y: 10 }}
          >
            <Close size={24} onClick={closeModal} />
            {children}
          </S.Modal>
        </S.ModalWrapper>
      )}
    </S.Wrapper>
  )
}

export default Modal
