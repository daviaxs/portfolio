import { createContext, useCallback, useContext, useState } from "react"
import icons from "../assets/icons"

interface ISettingsContextData {
  settings: IOption[]
  setOptions: (newSettingsOptions: IOption[]) => void
}

interface IOption {
  icon: keyof typeof icons
  label: string
  description?: string
  onClick: () => void
}

interface IOptionsProviderProps {
  children: React.ReactNode
}

const SettingsContext = createContext({} as ISettingsContextData)

export const useSettingsContext = () => {
  return useContext(SettingsContext)
}

export const SettingsProvider: React.FC<IOptionsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<IOption[]>([])

  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = useCallback(() => {
    const newExpanded = !expanded
    setExpanded(newExpanded)
  }, [expanded])

  const handleSetSettings = useCallback((newSidebarOptions: IOption[]) => {
    setSettings(newSidebarOptions)
  }, [])

  return <SettingsContext.Provider value={{ settings: settings, setOptions: handleSetSettings }}>{children}</SettingsContext.Provider>
}
