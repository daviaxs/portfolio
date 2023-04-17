import { useContext } from "react"

import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { Container } from "../../shared/components/container/Container"
import { THeadingPrimary, TTitlePrimary } from "../../shared/fonts"
import { LayoutBaseDePagina } from "../../shared/layout"
import Imgs from "../../shared/assets/index"
import { theme } from "../../shared/theme"
import { useSidebarContext } from "../../shared/contexts/SidebarContext"

export const PaginaInicial = () => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { expanded } = useSidebarContext()

  return (
    <LayoutBaseDePagina flexDir={windowWidth <= 900 ? "column" : "row"}>
      <Container
        display="flex"
        height=""
        width=""
        marginTop={windowWidth <= 900 ? 2 : 0}
        marginBottom={windowWidth <= 600 ? 0 : 3}
        marginLeft={windowWidth <= 600 ? 0 : 1.5}
        marginRight={windowWidth <= 900 ? 0 : expanded ? 2 : windowWidth / 200}
        flexDir="column"
        align={windowWidth <= 900 ? "center" : "start"}
        justifyContent="center"
      >
        <TTitlePrimary
          txtColor={theme.text.secondary}
          fontSize={windowWidth >= 900 ? windowWidth / 550 : windowWidth <= 600 ? 1.5 : 2}
        >
          Olá, eu sou
        </TTitlePrimary>
        <THeadingPrimary
          txtColor={theme.text.h1}
          txtShadow="2px 2px 0px #3C427B"
          whiteSpace="nowrap"
          fontSize={windowWidth >= 900 ? windowWidth / 180 : windowWidth <= 600 ? 4.5 : 6}
        >
          Davi Alves
        </THeadingPrimary>
        <TTitlePrimary
          txtColor={theme.text.secondary}
          fontSize={windowWidth >= 900 ? windowWidth / 550 : windowWidth <= 600 ? 1.5 : 2}
        >
          Desenvolvedor front-end
        </TTitlePrimary>
      </Container>
      <img src={Imgs.AvatarImage} alt="Desenho de davi alves" />
    </LayoutBaseDePagina>
  )
}
