import { createContext, useCallback, useContext, useState } from "react"
import icons from "../assets/icons"

interface ISettingsContextData {
  options: IOption[]
  setOptions: (newSettingOption: IOption[]) => void
  openSettings: boolean
  handleOpenSettings: () => void
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

  const [openSettings, setOpenSettings] = useState(false)

  const toggleOpenSettings = useCallback(() => {
    const newOpenSettings = !openSettings
    setOpenSettings(newOpenSettings)
  }, [openSettings])

  const handleSetSettings = useCallback((newSettingsOptions: IOption[]) => {
    setSettings(newSettingsOptions)
  }, [])

  return (
    <SettingsContext.Provider value={{ options: settings, setOptions: handleSetSettings, openSettings, handleOpenSettings: toggleOpenSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}
