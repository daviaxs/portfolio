import { createContext, useCallback, useContext, useState } from "react"

interface ILanguageContextData {
  language: boolean
  toggleLanguage: () => void
}

interface ILanguageProviderProps {
  children: React.ReactNode
}

const LanguageContext = createContext({} as ILanguageContextData)

export const useLanguageContext = () => {
  return useContext(LanguageContext)
}

export const LanguageProvider: React.FC<ILanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(false)

  const toggleLanguage = useCallback(() => {
    const newLanguage = !language
    setLanguage(newLanguage)
  }, [language])

  return (
    <LanguageContext.Provider value={{ toggleLanguage: toggleLanguage, language: language }}>{children}</LanguageContext.Provider>
  )
}
