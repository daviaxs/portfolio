import { useContext } from "react"

import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { LayoutBaseDePagina } from "../../shared/layout"


export const Sobre = () => {
  const { width: windowWidth, height: windowHeight } = useContext(WindowDimensionsContext)

  return (
    <LayoutBaseDePagina flexDir="column">
      
    </LayoutBaseDePagina>
  )
}
