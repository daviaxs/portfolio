import styled from "styled-components"

import { themeConstants } from "@/shared/theme"

interface IHeaderSidebarProps {
  justifyContent: "space-between" | "center"
}

export const HeaderSidebar = styled.header<IHeaderSidebarProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};

  width: 100%;
  height: ${themeConstants.sizes["8xl"]}rem;

  padding: ${themeConstants.sizes["2xl"]}rem ${themeConstants.sizes.xl}rem;
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
`
