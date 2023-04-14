import styled from "styled-components"

interface IBoxProps {
  flexDir: "row" | "column"
  bg: string
  children: React.ReactNode
}

const BoxStyle = styled.div<IBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDir};

  height: 100vh;
  width: 100vw;

  background: ${(props) => props.bg};
`

export const Box: React.FC<IBoxProps> = ({ flexDir, bg, children }) => {
  return (
    <BoxStyle flexDir={flexDir} bg={bg}>
      {children}
    </BoxStyle>
  )
}
