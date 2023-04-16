import { useContext } from "react"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { HeaderSidebar } from "./utils/HeaderSidebar"
import { theme, themeConstants } from "../../theme"
import { Container } from "../container/Container"
import { NavButton } from "../navButton/NavButton"
import { IconButton } from "../icon/iconButton"
import { TTitleTertiary } from "../../fonts"
import { Icon } from "../icon/icon"
import { Nav } from "../nav/Nav"

export const Sidebar = () => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <Container width="" height="100%" display={windowWidth <= 600 ? "none" : "flex"} bg={theme.bg.bg_sidebar}>
      <Container width="" height="" flexDir="column" display={windowWidth <= 900 ? "none" : "flex"}>
        <HeaderSidebar justifyContent="space-between">
          <TTitleTertiary>Explorar</TTitleTertiary>
          <IconButton height={2.25} width={2.25}>
            <Icon name="arrowClose" />
          </IconButton>
        </HeaderSidebar>

        <Container width="" height="100%" display="flex" overflow="auto">
          <Nav paddingInline={themeConstants.sizes.xl}>
            <NavButton iconName="home" to="/pagina-inicial" widthDefault={9} widthFocus={13.25}>
              Página inicial
            </NavButton>
            <NavButton iconName="paint" to="/pagin" widthDefault={9} widthFocus={13.25}>
              Página inicial
            </NavButton>
          </Nav>
        </Container>
      </Container>
    </Container>
  )
}
