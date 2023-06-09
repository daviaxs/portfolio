import { useContext } from "react"
import styled from "styled-components"

import { Icon } from "@/shared/components/icone/Icone"
import { IconButton } from "@/shared/components/icone/IconeButton"
import { useMenuNavContext } from "@/shared/contexts/MenuNavContext"
import { useSettingsContext } from "@/shared/contexts/SettingsContext"
import { useSidebarContext } from "@/shared/contexts/SidebarContext"
import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { TTitleSecondary } from "@/shared/fonts"
import { theme, themeConstants } from "@/shared/theme"

interface IPageHeaderProps {
  label: string
}

const PageHeaderStyle = styled.header<{ displaySettings: "flex" | "none" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;

  height: ${themeConstants.sizes["8xl"]}rem;
  width: 100%;
  padding-inline: 4rem;

  background: ${theme.bg.secondary};

  .iconMenu {
    position: fixed;
    left: 0;
    margin-left: ${themeConstants.sizes.xl}rem;
  }

  .iconSettings {
    position: fixed;
    right: 0;
    margin-right: ${themeConstants.sizes.xl}rem;

    display: ${(props) => props.displaySettings};
  }
`

export const PageHeader: React.FC<IPageHeaderProps> = ({ label }) => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { expandedMenu, toggleMenuNav } = useMenuNavContext()
  const { openSettings, handleOpenSettings } = useSettingsContext()
  const { expanded } = useSidebarContext()

  return (
    <PageHeaderStyle displaySettings={expandedMenu ? "none" : "flex"}>
      <TTitleSecondary fontSize={1} txtColor={theme.text.quaternary} display={!expanded || windowWidth <= 900 ? "flex" : "none"}>
        {label}
      </TTitleSecondary>
      <IconButton title={expandedMenu ? "Fechar menu de navegação" : "Abrir menu de navegação"} display={windowWidth <= 600 ? "flex" : "none"} className="iconMenu" height={2.6} width={2.6} onClick={toggleMenuNav}>
        <Icon name={expandedMenu ? "arrowBack" : "options"} size={20} fill={theme.text.quaternary} />
      </IconButton>
      <IconButton title={openSettings ? "Fechar configurações" : "Abrir configurações"} className="iconSettings" height={2.6} width={2.6} onClick={handleOpenSettings}>
        <Icon name={openSettings ? "xClose" : "settings"} size={25} fill={theme.text.quaternary} />
      </IconButton>
    </PageHeaderStyle>
  )
}
