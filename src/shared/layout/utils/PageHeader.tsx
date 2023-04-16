import styled from "styled-components"

import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { IconButton } from "../../components/icon/iconButton"
import { theme, themeConstants } from "../../theme"
import { Icon } from "../../components/icon/icon"
import { TTitleTertiary } from "../../fonts"
import { useContext } from "react"

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

  background: ${theme.bg.secondary};

  .iconMenu {
    position: fixed;
    left: 0;
    margin-left: ${themeConstants.sizes.xl}rem;
  }
`

export const PageHeader: React.FC<IPageHeaderProps> = ({ label }) => {
  const {width: windowWidth} = useContext(WindowDimensionsContext)

  return (
    <PageHeaderStyle>
      <TTitleTertiary txtColor={theme.text.quaternary}>{label}</TTitleTertiary>
      <IconButton display={windowWidth <= 600 ? "flex" : "none"} className="iconMenu" height={2.6} width={2.6} onClick={() => alert('hello world')}>
        <Icon name="options"/>
      </IconButton>
    </PageHeaderStyle>
  )
}
