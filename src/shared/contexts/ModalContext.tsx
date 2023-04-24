import { createContext, useCallback, useContext, useState } from "react"

interface IModalContextData {
  expandedModal: boolean
  toggleModal: () => void
}

interface IModalProviderProps {
  children: React.ReactNode
}

const ModalContext = createContext({} as IModalContextData)

export const useModalContext = () => {
  return useContext(ModalContext)
}

export const ModalProvider: React.FC<IModalProviderProps> = ({ children }) => {
  const [expandedModal, setExpandedModal] = useState(false)

  const toggleModal = useCallback(() => {
    const newExpandedModal = !expandedModal
    setExpandedModal(newExpandedModal)
  }, [expandedModal])

  return (
    <ModalContext.Provider value={{ toggleModal: toggleModal, expandedModal: expandedModal }}>{children}</ModalContext.Provider>
  )
}
