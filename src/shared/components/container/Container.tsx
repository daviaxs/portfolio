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

  gap?: number

  padding?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingInline?: number

  marginTop?: number
  marginLeft?: number
  marginBottom?: number
  marginRight?: number

  transitionName?: string
  transitionTime?: number

  onClick?: () => void
}

export const Container = styled.div<IContainerProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDir};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.align};

  overflow-y: ${(props) => props.overflow};

  transition: ${(props) => props.transitionName} ${(props) => props.transitionTime}s ease-out;

  background: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius}rem;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  z-index: ${(props) => props.zIndex};

  gap: ${(props) => props.gap}rem;

  padding: ${(props) => props.padding}rem;
  padding-inline: ${(props) => props.paddingInline}rem;
  padding-top: ${(props) => props.paddingTop}rem;
  padding-right: ${(props) => props.paddingRight}rem;
  padding-bottom: ${(props) => props.paddingBottom}rem;
  padding-left: ${(props) => props.paddingLeft}rem;

  margin-top: ${(props) => props.marginTop}rem;
  margin-right: ${(props) => props.marginRight}rem;
  margin-bottom: ${(props) => props.marginBottom}rem;
  margin-left: ${(props) => props.marginLeft}rem;
`
