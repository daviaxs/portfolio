import styled from "styled-components"

interface ButtonModalActionsProps {
  children: React.ReactNode
}

const ButtonModalActionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  width: fit-content;
  height: fit-content;
`

export function ButtonModalActions({ children }: ButtonModalActionsProps) {
  return (
    <ButtonModalActionsStyle>
      {children}
    </ButtonModalActionsStyle>
  )
}