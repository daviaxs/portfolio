import styled from "styled-components"

import { theme, themeConstants } from "../../theme"
import { PageHeader } from "./PageHeader"
import { useMenuNavContext } from "../../contexts/MenuNavContext"
import { useSidebarContext } from "../../contexts/SidebarContext"
import { useContext } from "react"
import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { MenuNav } from "../../components/menuNav/MenuNav"

interface IPageLayoutProps extends IPageContentProps {
  children: React.ReactNode
}

interface IPageContentProps {
  flexDir: string
}

const PageLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-x: hidden;

  background: ${theme.bg.primary};
`

const PageContentStyle = styled.main<IPageContentProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  flex: 1;

  overflow-y: auto;
  overflow-x: hidden;
  margin-top: ${themeConstants.sizes["8xl"]}rem;

  background: ${theme.bg.primary};
`

export const PageLayout: React.FC<IPageLayoutProps> = ({ flexDir, children }) => {
  const { expandedMenu } = useMenuNavContext()
  const { sidebarOptions } = useSidebarContext()
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  const selectedOption = sidebarOptions.find((option) => option.to === window.location.pathname)

  return (
    <PageLayoutStyle>
      <PageHeader label={selectedOption?.label || ""} />
      <MenuNav display={expandedMenu && windowWidth <= 600 ? "flex" : "none"}/>
      <PageContentStyle flexDir={flexDir}>{children}</PageContentStyle>
    </PageLayoutStyle>
  )
}
