import { useContext } from "react"

import { useSidebarTemporaryContext } from "@/shared/contexts/SidebarTemporaryContext"
import { SidebarTemporary } from "@/shared/components/sidebar/utils/SidebarTemporary"
import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { HeaderSidebar } from "@/shared/components/sidebar/utils/SidebarHeader"
import { useLanguageContext } from "@/shared/contexts/LanguageContext"
import { useSidebarContext } from "@/shared/contexts/SidebarContext"
import { Container } from "@/shared/components/container/Container"
import { NavButton } from "@/shared/components/navButton/NavButton"
import { IconButton } from "@/shared/components/icone/IconeButton"
import { theme, themeConstants } from "@/shared/theme"
import { Icon } from "@/shared/components/icone/Icone"
import { Nav } from "@/shared/components/nav/Nav"
import { TTitleSecondary } from "@/shared/fonts"

export const Sidebar = () => {
  const { sidebarOptions, expanded, toggleExpanded } = useSidebarContext()
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { toggleSidebarTemporary } = useSidebarTemporaryContext()
  const { currentLanguage } = useLanguageContext()

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
          <TTitleSecondary fontSize={1} display={expanded ? "flex" : "none"} whiteSpace="nowrap">
            {currentLanguage ? "Explorar" : "Explore"}
          </TTitleSecondary>
          <IconButton height={2.25} width={2.25} onClick={toggleExpanded} title={expanded ? "Fechar menu lateral" : "Abrir menu lateral"}>
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
                <TTitleSecondary fontSize={1} className={`title`} display={expanded ? "flex" : "none"} whiteSpace="nowrap">
                  {drawerOptions.label}
                </TTitleSecondary>
              </NavButton>
            ))}
          </Nav>
        </Container>
      </Container>

      {/* Sidebar responsiva (para telas menores do que 900px) */}
      <Container width="" height="100%" flexDir="column" display={windowWidth <= 912 ? "flex" : "none"}>
        {windowWidth <= 912 && windowWidth >= 600 && <SidebarTemporary />}

        {/* Sidebar pequena */}
        {windowWidth <= 912 && (
          <Container width="4.5rem" height="100%" flexDir="column" display="flex">
            <HeaderSidebar justifyContent="center">
              <IconButton height={2.25} width={2.25} onClick={toggleSidebarTemporary} title="Abrir menu lateral">
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
