import { LoginModalContext } from '../../components/provider/LoginModalProvider.okala'
import React, { useContext } from 'react'

const useLoginModal = () => {
  const { loginModalIsOpen, setLoginModalIsOpen } = useContext(
    LoginModalContext,
  )

  return {
    openLoginModal: () => setLoginModalIsOpen(true),
    closeLoginModal: () => setLoginModalIsOpen(false),
    status: loginModalIsOpen,
    setLoginModalStatus: (status) => setLoginModalIsOpen(status),
  }
}

export default useLoginModal
