import styled from "styled-components"

interface ButtonModalRootProps {
  children: React.ReactNode
}

const ButtonModalRootStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.75rem;
`

export function ButtonModalRoot({ children }: ButtonModalRootProps) {
  return (
    <ButtonModalRootStyle>{children}</ButtonModalRootStyle>
  )
}