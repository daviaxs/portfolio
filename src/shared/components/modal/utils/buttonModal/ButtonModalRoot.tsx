import { theme } from "@/shared/theme"
import styled from "styled-components"

interface ButtonModalRootProps {
  children: React.ReactNode
}

const ButtonModalRootStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.75rem;

  .separator {
    height: 3.5rem;
    width: 1.5px;
    background-color: ${theme.bg.secondary};
    border-radius: 9999px;

    position: absolute;
  }
`

export function ButtonModalRoot({ children }: ButtonModalRootProps) {
  return (
    <ButtonModalRootStyle>{children}</ButtonModalRootStyle>
  )
}