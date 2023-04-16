import styled from "styled-components"

import { theme, themeConstants } from "../../theme"
import { PageHeader } from "./PageHeader"

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
  return (
    <PageLayoutStyle>
      <PageHeader label="Test"/>
      <PageContentStyle flexDir={flexDir}>{children}</PageContentStyle>
    </PageLayoutStyle>
  )
}
