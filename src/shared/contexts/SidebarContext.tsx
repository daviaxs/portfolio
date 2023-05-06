import { createContext, useCallback, useContext, useState } from "react"
import { WindowDimensionsContext } from "./WindowDimensionsContext"
import icons from "../assets/icons"

interface ISidebarContextData {
  sidebarOptions: ISidebarOptions[]
  setSidebarOptions: (newSidebarOptions: ISidebarOptions[]) => void
  expanded: boolean
  toggleExpanded: () => void
}

interface ISidebarOptions {
  to: string
  icon: keyof typeof icons
  label: string
}

interface ISidebarProviderProps {
  children: React.ReactNode
}

const SidebarContext = createContext({} as ISidebarContextData)

export const useSidebarContext = () => {
  return useContext(SidebarContext)
}

export const SidebarProvider: React.FC<ISidebarProviderProps> = ({ children }) => {
  const [sidebarOptions, setSidebarOptions] = useState<ISidebarOptions[]>([])
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  const [expanded, setExpanded] = useState(() => {
    const savedValue = window.localStorage.getItem("sidebarExpanded")
    return savedValue !== null ? JSON.parse(savedValue) : windowWidth >= 900
  })

  const toggleExpanded = useCallback(() => {
    const newExpanded = !expanded
    setExpanded(newExpanded)
    window.localStorage.setItem("sidebarExpanded", JSON.stringify(newExpanded))
  }, [expanded])

  const handleSetSidebarOptions = useCallback((newSidebarOptions: ISidebarOptions[]) => {
    setSidebarOptions(newSidebarOptions)
  }, [])

  return (
    <SidebarContext.Provider
      value={{ sidebarOptions: sidebarOptions, setSidebarOptions: handleSetSidebarOptions, expanded, toggleExpanded }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
