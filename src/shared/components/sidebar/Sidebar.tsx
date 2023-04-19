import { useContext, useState } from "react"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { SidebarTemporaryContainer, SidebarTemporaryContent } from "./utils"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { HeaderSidebar } from "./utils/SidebarHeader"
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
  const [tempSidebarVisible, setTempSidebarVisible] = useState(false)

  const toggleTempsidebar = () => {
    setTempSidebarVisible(!tempSidebarVisible)
  }

  return (
    <Container width="" height="100%" display={windowWidth <= 600 ? "none" : "flex"} bg={theme.bg.bg_sidebar}>
      {/* Sidebar permanente */}
      <Container width="" height="" flexDir="column" display={windowWidth <= 900 ? "none" : "flex"}>

        <HeaderSidebar justifyContent={expanded ? "space-between" : "center"}>
          <TTitleTertiary display={expanded ? "flex" : "none"} className="animation-scale">
            Explorar
          </TTitleTertiary>
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
                iconMarginLeft={expanded ? 0 : 0.1}
              >
                <TTitleTertiary className="title animation-scale" display={expanded ? "flex" : "none"} whiteSpace="nowrap">
                  {drawerOptions.label}
                </TTitleTertiary>
              </NavButton>
            ))}
          </Nav>
        </Container>
        
      </Container>

      {/* Sidebar responsiva (para telas menores do que 900px) */}
      <Container width="" height="100%" flexDir="column" display={windowWidth <= 900 ? "flex" : "none"}>
        {/* Sidebar temporaria */}
        <SidebarTemporaryContainer className={tempSidebarVisible ? "open" : "close"}>

          <SidebarTemporaryContent className={tempSidebarVisible ? "open" : "close"}>

            <Container width="" height="100%" flexDir="column" display="flex">

              <HeaderSidebar justifyContent="space-between">
                <TTitleTertiary display="flex" className="animation-scale">
                  Explorar
                </TTitleTertiary>
                <IconButton height={2.25} width={2.25} onClick={toggleTempsidebar}>
                  <Icon name="arrowClose" />
                </IconButton>
              </HeaderSidebar>

              <Container width="" height="100%" display="flex" overflow="auto">
                <Nav paddingInline={themeConstants.sizes.xl}>
                  {sidebarOptions.map((drawerOptions) => (
                    <NavButton
                      key={drawerOptions.to}
                      iconName={drawerOptions.icon}
                      to={drawerOptions.to}
                      widthDefault={9}
                      widthFocus={13.25}
                      onClick={toggleTempsidebar}
                    >
                      <TTitleTertiary className="title animation-scale" display="flex">
                        Página inicial
                      </TTitleTertiary>
                    </NavButton>
                  ))}
                </Nav>
              </Container>

            </Container>

          </SidebarTemporaryContent>

          <Container width="100%" height="100%" display="flex" onClick={toggleTempsidebar} />
        </SidebarTemporaryContainer>

        {/* Sidebar pequena */}
        {windowWidth <= 900 && (
          <Container width="" height="100%" flexDir="column" display="flex">

            <HeaderSidebar justifyContent="center">
              <IconButton height={2.25} width={2.25} onClick={toggleTempsidebar}>
                <Icon name="arrowOpen" />
              </IconButton>
            </HeaderSidebar>

            <Container width="" height="100%" display="flex" overflow="auto">
              <Nav paddingInline={themeConstants.sizes.xl}>
                {sidebarOptions.map((drawerOptions) => (
                  <NavButton
                    key={drawerOptions.to}
                    iconName={drawerOptions.icon}
                    to={drawerOptions.to}
                    widthDefault={1}
                    widthFocus={2.5}
                    iconMarginLeft={0.1}
                  >
                    {/* children */}
                  </NavButton>
                ))}
              </Nav>
            </Container>

          </Container>
        )}
      </Container>
    </Container>
  )
}
