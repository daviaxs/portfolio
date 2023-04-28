import { createContext, useCallback, useContext, useState } from "react"

interface ISidebarTemporaryContextData {
  expandedSidebarTemporary: boolean
  toggleSidebarTemporary: () => void
}

interface ISidebarTemporaryProviderProps {
  children: React.ReactNode
}

const SidebarTemporaryContext = createContext({} as ISidebarTemporaryContextData)

export const useSidebarTemporaryContext = () => {
  return useContext(SidebarTemporaryContext)
}

export const SidebarTemporaryProvider: React.FC<ISidebarTemporaryProviderProps> = ({ children }) => {
  const [expandedSidebarTemporary, setExpandedSidebarTemporary] = useState(false)

  const toggleSidebarTemporary = useCallback(() => {
    const newExpandedSidebarTemporary = !expandedSidebarTemporary
    setExpandedSidebarTemporary(newExpandedSidebarTemporary)
  }, [expandedSidebarTemporary])

  return (
    <SidebarTemporaryContext.Provider value={{ toggleSidebarTemporary: toggleSidebarTemporary, expandedSidebarTemporary: expandedSidebarTemporary }}>
      {children}
    </SidebarTemporaryContext.Provider>
  )
}
