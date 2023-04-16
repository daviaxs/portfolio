import styled from "styled-components"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { useMenuNavContext } from "../../contexts/MenuNavContext"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { theme, themeConstants } from "../../theme"
import { PageHeader } from "../../layout/utils/PageHeader"
import { NavButton } from "../navButton/NavButton"
import { Nav } from "../nav/Nav"
import { TTitleTertiary } from "../../fonts"

interface IMenuNavProps {
  display: "flex" | "none"
}

const MenuNavStyle = styled.div<IMenuNavProps>`
  display: ${(props) => props.display};
  position: fixed;
  flex-direction: column;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;

  height: 100vh;
  width: 100vw;

  .navigation {
    margin-top: ${themeConstants.sizes["8xl"]}rem;
    background: ${theme.bg.primary};
    z-index: -1;
  }
`

export const MenuNav: React.FC<IMenuNavProps> = ({ display }) => {
  const { toggleMenuNav } = useMenuNavContext()
  const { sidebarOptions } = useSidebarContext()

  return (
    <MenuNavStyle display={display}>
      <PageHeader label="Navegar" />
      <Nav className="navigation" paddingInline={0}>
        {sidebarOptions.map((menuOptions) => (
          <NavButton
            key={menuOptions.to}
            iconName={menuOptions.icon}
            to={menuOptions.to}
            onClick={toggleMenuNav}
            borderSize={1}
            height={3.8}
            bottomMargin={1}
            widthDefault={100}
            widthFocus={100}
            iconMarginLeft={1}
          >
            <TTitleTertiary className="title animation-scale" display="flex">
              {menuOptions.label}
            </TTitleTertiary>
          </NavButton>
        ))}
      </Nav>
    </MenuNavStyle>
  )
}
