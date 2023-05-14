import { createContext, useCallback, useContext, useState, useEffect } from "react"

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

  useEffect(() => {
    const savedValue = window.localStorage.getItem("currentLanguage")
    if (savedValue !== null) {
      const parsedValue = JSON.parse(savedValue)
      if (parsedValue !== currentLanguage) {
        setCurrentLanguage(parsedValue)
      }
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    const newLanguage = !currentLanguage
    setCurrentLanguage(newLanguage)
    window.localStorage.setItem("currentLanguage", JSON.stringify(newLanguage))
  }, [currentLanguage])

  return (
    <LanguageContext.Provider value={{ toggleCurrentLanguage: toggleLanguage, currentLanguage: currentLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
