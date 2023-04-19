import styled from "styled-components"

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  display: "flex" | "none" | "grid" | "block"
  flexDir?: "row" | "column"
  justifyContent?: "start" | "center" | "end" | "space-between"
  align?: "start" | "center" | "end" | "flex-start"
  overflow?: "auto" | "visible" | "hidden"

  bg?: string
  borderRadius?: number

  width: string
  height: string
  zIndex?: number

  padding?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingIncolumn?: number
  paddingInline?: number
  paddingLeft?: number

  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number

  onClick?: () => void
}

export const Container = styled.div<IContainerProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDir};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.align};

  overflow-y: ${(props) => props.overflow};

  background: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius}rem;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  z-index: ${(props) => props.zIndex};

  padding: ${(props) => props.padding}rem;
  padding: ${(props) => props.paddingIncolumn}rem 0;
  padding: 0 ${(props) => props.paddingInline}rem;
  padding-top: ${(props) => props.paddingTop}rem;
  padding-right: ${(props) => props.paddingRight}rem;
  padding-bottom: ${(props) => props.paddingBottom}rem;
  padding-left: ${(props) => props.paddingLeft}rem;

  margin-top: ${(props) => props.marginTop}rem;
  margin-right: ${(props) => props.marginRight}rem;
  margin-bottom: ${(props) => props.marginBottom}rem;
  margin-left: ${(props) => props.marginLeft}rem;
`
