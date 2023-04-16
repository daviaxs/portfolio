import { createContext, useCallback, useContext, useState } from "react"

interface IMenuNavContextData {
  expandedMenu: boolean
  toggleMenuNav: () => void
}

interface IMenuNavProviderProps {
  children: React.ReactNode
}

const MenuNavContext = createContext({} as IMenuNavContextData)

export const useMenuNavContext = () => {
  return useContext(MenuNavContext)
}

export const MenuNavProvider: React.FC<IMenuNavProviderProps> = ({ children }) => {

  const [expandedMenu, setExpandedMenu] = useState(false)

  const toggleMenuNav = useCallback(() => {
    const newExpandedMenu = !expandedMenu
    setExpandedMenu(newExpandedMenu)
  }, [expandedMenu])

  return <MenuNavContext.Provider value={{toggleMenuNav, expandedMenu: expandedMenu}}>{children}</MenuNavContext.Provider>
}
