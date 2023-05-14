import { useContext } from "react"
import styled from "styled-components"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { useSettingsContext } from "../../contexts/SettingsContext"
import { useMenuNavContext } from "../../contexts/MenuNavContext"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { IconButton } from "../../components/Icon/IconButton"
import { theme, themeConstants } from "../../theme"
import { Icon } from "../../components/Icon/Icon"
import { TTitleSecondary } from "../../fonts"

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
      <IconButton display={windowWidth <= 600 ? "flex" : "none"} className="iconMenu" height={2.6} width={2.6} onClick={toggleMenuNav}>
        <Icon name={expandedMenu ? "arrowBack" : "options"} size={20} fill={theme.text.quaternary} />
      </IconButton>
      <IconButton className="iconSettings" height={2.6} width={2.6} onClick={handleOpenSettings}>
        <Icon name={openSettings ? "xClose" : "settings"} size={25} fill={theme.text.quaternary} />
      </IconButton>
    </PageHeaderStyle>
  )
}
