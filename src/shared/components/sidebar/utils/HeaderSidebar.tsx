import styled from "styled-components"
import { themeConstants } from "../../../theme"

interface IHeaderSidebarProps {
  justifyContent: "space-between" | "center"
}

export const HeaderSidebar = styled.header<IHeaderSidebarProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};

  width: 244px;
  height: ${themeConstants.sizes["8xl"]}rem;

  padding: ${themeConstants.sizes["2xl"]}rem ${themeConstants.sizes.lg}rem;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
`
