import { createContext, useCallback, useContext, useState } from "react"

interface ILanguageContextData {
  currentLanguage: boolean
  toggleCurrentLanguage: () => void
}

interface ILanguageProviderProps {
  children: React.ReactNode
}

const LanguageContext = createContext({} as ILanguageContextData)

export const useLanguageContext = () => {
  return useContext(LanguageContext)
}

export const LanguageProvider: React.FC<ILanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(true)

  const toggleLanguage = useCallback(() => {
    const newLanguage = !currentLanguage
    setCurrentLanguage(newLanguage)
  }, [currentLanguage])

  return (
    <LanguageContext.Provider value={{ toggleCurrentLanguage: toggleLanguage, currentLanguage: currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
