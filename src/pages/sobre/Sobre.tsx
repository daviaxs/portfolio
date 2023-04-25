import { useContext } from "react"

import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { Container } from "../../shared/components/container/Container"
import { LayoutBaseDePagina } from "../../shared/layout"
import { theme, themeConstants } from "../../shared/theme"
import { Card } from "./utils/Card"


export const Sobre = () => {
  const { width: windowWidth, height: windowHeight } = useContext(WindowDimensionsContext)

  return (
    <LayoutBaseDePagina flexDir="column" paddingInline={themeConstants.sizes["5xl"]}>
      <Card/>
    </LayoutBaseDePagina>
  )
}
