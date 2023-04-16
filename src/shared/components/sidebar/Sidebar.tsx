import { useContext } from "react"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { useSidebarContext } from "../../contexts/SidebarContext"
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
  const { sidebarOptions, expanded, toggleExpanded } = useSidebarContext()

  return (
    <Container width="" height="100%" display={windowWidth <= 600 ? "none" : "flex"} bg={theme.bg.bg_sidebar}>
      <Container width="" height="" flexDir="column" display={windowWidth <= 900 ? "none" : "flex"}>
        <HeaderSidebar justifyContent={expanded ? "space-between" : "center"}>
          <TTitleTertiary display={expanded ? "flex" : "none"} className="animation-scale">Explorar</TTitleTertiary>
          <IconButton height={2.25} width={2.25} onClick={toggleExpanded}>
            <Icon name={expanded ? "arrowClose" : "arrowOpen"} />
          </IconButton>
        </HeaderSidebar>

        <Container width="" height="100%" display="flex" overflow="auto">
          <Nav paddingInline={themeConstants.sizes.xl}>
            {sidebarOptions.map((drawerOptions) => (
              <NavButton
                key={drawerOptions.to}
                iconName={drawerOptions.icon}
                to={drawerOptions.to}
                widthDefault={expanded ? 9 : 1}
                widthFocus={expanded ? 13.25 : 2.5}
                iconMargin={expanded ? 0 : .1}
              >
                <TTitleTertiary className="title animation-scale" display={expanded ? "flex" : "none"}>
                  Página inicial
                </TTitleTertiary>
              </NavButton>
            ))}
          </Nav>
        </Container>
      </Container>
    </Container>
  )
}
