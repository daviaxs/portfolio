import styled from "styled-components"

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  display: "flex" | "none" | "grid" | "block"
  flexDir?: "row" | "column"
  justifyContent?: "start" | "center" | "end"
  align?: "start" | "center" | "end" | "flex-start"
  overflow?: "auto" | "visible" | "hidden"
  // children: React.ReactNode

  bg?: string
  borderRadius?: number

  width: string
  height: string

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

// export const Container: React.FC<IContainerProps> = ({
//   display,
//   flexDir = "row",
//   overflow,
//   children,

//   bg,
//   borderRadius = 0,

//   width,
//   height = "100vh",

//   padding = 0,
//   paddingTop = 0,
//   paddingRight = 0,
//   paddingBottom = 0,
//   paddingLeft = 0,
//   paddingInline = 0,
//   paddingIncolumn = 0,

//   marginTop = 0,
//   marginRight = 0,
//   marginBottom = 0,
//   marginLeft = 0,

//   onClick,
// }) => {
//   return (
//     <ContainerStyle
//       display={display}
//       flexDir={flexDir}
//       overflow={overflow}

//       bg={bg}
//       borderRadius={borderRadius}

//       width={width}
//       height={height}

//       padding={padding}
//       paddingTop={paddingTop}
//       paddingRight={paddingRight}
//       paddingBottom={paddingBottom}
//       paddingLeft={paddingLeft}
//       paddingInline={paddingInline}
//       paddingIncolumn={paddingIncolumn}

//       marginTop={marginTop}
//       marginRight={marginRight}
//       marginBottom={marginBottom}
//       marginLeft={marginLeft}
      
//       onClick={onClick}
//     >
//       {children}
//     </ContainerStyle>
//   )
// }
