import { useContext } from "react"
import styled from "styled-components"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { useMenuNavContext } from "../../contexts/MenuNavContext"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { IconButton } from "../../components/icon/IconButton"
import { theme, themeConstants } from "../../theme"
import { Icon } from "../../components/icon/Icon"
import { TTitleTertiary } from "../../fonts"

interface IPageHeaderProps {
  label: string
}

const PageHeaderStyle = styled.header`
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
`

export const PageHeader: React.FC<IPageHeaderProps> = ({ label }) => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { expandedMenu, toggleMenuNav } = useMenuNavContext()
  const { expanded } = useSidebarContext()

  return (
    <PageHeaderStyle>
      <TTitleTertiary txtColor={theme.text.quaternary} display={!expanded || windowWidth <= 900 ? "flex" : "none"}>
        {label}
      </TTitleTertiary>
      <IconButton
        display={windowWidth <= 600 ? "flex" : "none"}
        className="iconMenu"
        height={2.6}
        width={2.6}
        onClick={toggleMenuNav}
      >
        <Icon name={expandedMenu ? "arrowBack" : "options"} size={20} fill={theme.text.quaternary} />
      </IconButton>
    </PageHeaderStyle>
  )
}
