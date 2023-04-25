import { useContext } from "react"

import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { LayoutBaseDePagina } from "../../shared/layout"
import { themeConstants } from "../../shared/theme"
import { CardProfile } from "./utils/CardProfile"

export const Sobre = () => {
  const { width: windowWidth, height: windowHeight } = useContext(WindowDimensionsContext)

  return (
    <LayoutBaseDePagina flexDir="column" paddingInline={themeConstants.sizes["5xl"]}>
      <CardProfile
        flexDir={windowWidth <= 350 ? "column" : "row"}
        label="Sobre mim"
        width={windowWidth <= 600 ? "100%" : "25rem"}
        fontSize={windowWidth <= 380 ? 2 : 2.5}
        lineWidth={windowWidth <= 380 ? 5 : 7}
      />
    </LayoutBaseDePagina>
  )
}
