import styled from "styled-components"

import { useMenuNavContext } from "../../contexts/MenuNavContext"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { PageHeader } from "../../layout/utils/PageHeader"
import { theme, themeConstants } from "../../theme"
import { NavButton } from "../navButton/NavButton"
import { TTitleSecondary } from "../../fonts"
import { Nav } from "../nav/Nav"

interface IMenuNavProps {
  display: "flex" | "none"
}

const MenuNavStyle = styled.div<IMenuNavProps>`
  display: ${(props) => props.display};
  position: fixed;
  flex-direction: column;
  z-index: 999;
  overflow-y: auto;
  overflow-x: hidden;

  height: 100vh;
  width: 100vw;

  .navigation {
    margin-top: 3.55rem;
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
            borderRadius={0}
            height={3.8}
            bottomMargin={0}
            widthDefault={100}
            widthFocus={100}
            iconMarginLeft={themeConstants.sizes.xl}
          >
            <TTitleSecondary fontSize={1} className="title animation-scale" display="flex">
              {menuOptions.label}
            </TTitleSecondary>
          </NavButton>
        ))}
      </Nav>
    </MenuNavStyle>
  )
}
