import { useContext, useState } from "react"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { SidebarTemporaryContainer, SidebarTemporaryContent } from "./utils"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { HeaderSidebar } from "./utils/SidebarHeader"
import { theme, themeConstants } from "../../theme"
import { Container } from "../container/Container"
import { NavButton } from "../navButton/NavButton"
import { IconButton } from "../icon/IconButton"
import { TTitleSecondary } from "../../fonts"
import { Icon } from "../icon/Icon"
import { Nav } from "../nav/Nav"

export const Sidebar = () => {
  const { sidebarOptions, expanded, toggleExpanded } = useSidebarContext()
  const [tempSidebarVisible, setTempSidebarVisible] = useState(false)
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  const toggleTempsidebar = () => {
    setTempSidebarVisible(!tempSidebarVisible)
  }

  return (
    <Container width="" height="100%" display={windowWidth <= 600 ? "none" : "flex"} bg={theme.bg.bg_sidebar}>
      {/* Sidebar permanente */}
      <Container
        width={expanded ? "15.25rem" : "4.5rem"}
        height=""
        flexDir="column"
        display={windowWidth <= 912 ? "none" : "flex"}

        transitionName="width"
        transitionTime={0.2}
      >
        <HeaderSidebar justifyContent={expanded ? "space-between" : "center"}>
          <TTitleSecondary fontSize={1} display={expanded ? "flex" : "none"} className="animation-scale">
            Explorar
          </TTitleSecondary>
          <IconButton height={2.25} width={2.25} onClick={toggleExpanded}>
            <Icon name={expanded ? "arrowClose" : "arrowOpen"} size={18} />
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
                <TTitleSecondary fontSize={1} className={`title animation-scale`} display={expanded ? "flex" : "none"} whiteSpace="nowrap">
                  {drawerOptions.label}
                </TTitleSecondary>
              </NavButton>
            ))}
          </Nav>
        </Container>
      </Container>

      {/* Sidebar responsiva (para telas menores do que 900px) */}
      <Container width="" height="100%" flexDir="column" display={windowWidth <= 912 ? "flex" : "none"}>
        {/* Sidebar temporaria */}
        <SidebarTemporaryContainer className={tempSidebarVisible ? "open" : "close"}>
          <SidebarTemporaryContent className={tempSidebarVisible ? "open" : "close"}>
            <Container width="" height="100%" flexDir="column" display="flex">
              <HeaderSidebar justifyContent="space-between">
                <TTitleSecondary fontSize={1} display="flex" className="animation-scale">
                  Explorar
                </TTitleSecondary>
                <IconButton height={2.25} width={2.25} onClick={toggleTempsidebar}>
                  <Icon name="arrowClose" size={18} />
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
                      <TTitleSecondary fontSize={1} className="title animation-scale" display="flex" whiteSpace="nowrap">
                        {drawerOptions.label}
                      </TTitleSecondary>
                    </NavButton>
                  ))}
                </Nav>
              </Container>
            </Container>
          </SidebarTemporaryContent>

          <Container width="100%" height="100%" display="flex" onClick={toggleTempsidebar} />
        </SidebarTemporaryContainer>

        {/* Sidebar pequena */}
        {windowWidth <= 912 && (
          <Container width="4.5rem" height="100%" flexDir="column" display="flex">
            <HeaderSidebar justifyContent="center">
              <IconButton height={2.25} width={2.25} onClick={toggleTempsidebar}>
                <Icon name="arrowOpen" size={18} />
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
