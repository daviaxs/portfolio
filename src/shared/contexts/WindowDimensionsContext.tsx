import { createContext, useEffect, useState } from "react"

interface IWindowDimensionsContextProps {
  width: number
  height: number
}

interface IWindowDimensionsProviderProps {
  children: React.ReactNode
}

export const WindowDimensionsContext =
  createContext<IWindowDimensionsContextProps>(
    {} as IWindowDimensionsContextProps
  )

export const WindowDimensionsProvider: React.FC<
  IWindowDimensionsProviderProps
> = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <WindowDimensionsContext.Provider value={windowDimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  )
}
