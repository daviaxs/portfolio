import { useContext } from "react"
import styled from "styled-components"

import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { useMenuNavContext } from "@/shared/contexts/MenuNavContext"
import { useSidebarContext } from "@/shared/contexts/SidebarContext"
import { Settings } from "@/shared/components/settings/Settings"
import { MenuNav } from "@/shared/components/menuNav/MenuNav"
import { theme, themeConstants } from "@/shared/theme"
import { PageHeader } from "@/shared/layout/utils/PageHeader"

interface IPageLayoutProps extends IPageContentProps {
  children: React.ReactNode
}

interface IPageContentProps {
  paddingInline?: number
  paddingTop?: number
  paddingBottom?: number
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
  overflow-x: auto;

  margin-top: ${themeConstants.sizes["8xl"]}rem;
  padding-inline: ${(props) => props.paddingInline}rem;
  padding-top: ${(props) => props.paddingTop}rem;
  padding-bottom: ${(props) => props.paddingBottom}rem;

  background: ${theme.bg.primary};
`

export const PageLayout: React.FC<IPageLayoutProps> = ({ flexDir, paddingInline, paddingTop, paddingBottom, children }) => {
  const { expandedMenu } = useMenuNavContext()
  const { sidebarOptions } = useSidebarContext()
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  const selectedOption = sidebarOptions.find((option) => option.to === window.location.pathname)

  return (
    <PageLayoutStyle>
      <Settings />
      <PageHeader label={selectedOption?.label || ""} />
      <MenuNav display={expandedMenu && windowWidth <= 600 ? "flex" : "none"} />
      <PageContentStyle flexDir={flexDir} paddingInline={paddingInline} paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {children}
      </PageContentStyle>
    </PageLayoutStyle>
  )
}
