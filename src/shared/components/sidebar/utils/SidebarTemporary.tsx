import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"

import { useSidebarTemporaryContext } from "../../../contexts/SidebarTemporaryContext"
import { useLanguageContext } from "../../../contexts/LanguageContext"
import { useSidebarContext } from "../../../contexts/SidebarContext"
import { theme, themeConstants } from "../../../theme"
import { Container } from "../../container/Container"
import { NavButton } from "../../navButton/NavButton"
import { IconButton } from "../../icon/IconButton"
import { TTitleSecondary } from "../../../fonts"
import { HeaderSidebar } from "./SidebarHeader"
import { Icon } from "../../icon/Icon"
import { Nav } from "../../nav/Nav"

const SidebarTemporaryContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0px;
  right: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: inset 49px 0px 76px rgba(0, 0, 0, 0.159);

  margin-left: 15.25rem;
  display: flex;
  flex-direction: row;

  &.open {
    animation: bgIn 0.3s forwards ease-out;
  }

  &.close {
    animation: bgOut 0.3s forwards ease-out;
  }

  @keyframes bgIn {
    0% {
      left: -16rem;
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  @keyframes bgOut {
    0% {
      left: 0;
      opacity: 1;
    }
    100% {
      left: -16rem;
      background-color: rgba(0, 0, 0, 0);
      box-shadow: inset 49px 0px 76px rgba(0, 0, 0, 0);
      visibility: hidden;
    }
  }
`

const SidebarTemporaryContent = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  bottom: 0;
  width: 0;
  width: 15.25rem;
  background: ${theme.bg.bg_linear};

  &.open {
    animation: sidebarPositionAnimateIn 0.3s forwards ease-out;
  }

  &.close {
    animation: sidebarPositionAnimateOut 0.3s forwards ease-out;
  }

  @keyframes sidebarPositionAnimateIn {
    0% {
      left: -16rem;
    }
    100% {
      left: 0;
    }
  }

  @keyframes sidebarPositionAnimateOut {
    0% {
      left: 0;
    }
    100% {
      left: -16rem;
      visibility: hidden;
    }
  }
`

export const SidebarTemporary = () => {
  const { sidebarOptions } = useSidebarContext()
  const { currentLanguage } = useLanguageContext()
  const { toggleSidebarTemporary, expandedSidebarTemporary } = useSidebarTemporaryContext()
  const [shouldRenderSidebar, setShouldRenderSidebar] = useState(expandedSidebarTemporary)

  useEffect(() => {
    if (expandedSidebarTemporary) {
      setShouldRenderSidebar(true)
    }
  }, [expandedSidebarTemporary])

  const handleAnimationEnd = useCallback(() => {
    if (!expandedSidebarTemporary) {
      setShouldRenderSidebar(false)
    }
  }, [expandedSidebarTemporary])

  if (!shouldRenderSidebar) {
    return null
  }

  return (
    <SidebarTemporaryContainer className={expandedSidebarTemporary ? "open" : "close"} onAnimationEnd={handleAnimationEnd}>
      <SidebarTemporaryContent className={expandedSidebarTemporary ? "open" : "close"}>
        <Container width="" height="100%" flexDir="column" display="flex">
          <HeaderSidebar justifyContent="space-between">
            <TTitleSecondary fontSize={1} display="flex">
              {currentLanguage ? "Explorar" : "To explore"}
            </TTitleSecondary>
            <IconButton height={2.25} width={2.25} onClick={toggleSidebarTemporary}>
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
                  onClick={toggleSidebarTemporary}
                >
                  <TTitleSecondary fontSize={1} className="title" display="flex" whiteSpace="nowrap">
                    {drawerOptions.label}
                  </TTitleSecondary>
                </NavButton>
              ))}
            </Nav>
          </Container>
        </Container>
      </SidebarTemporaryContent>
      <Container width="100%" height="100%" display="flex" onClick={toggleSidebarTemporary} />
    </SidebarTemporaryContainer>
  )
}
