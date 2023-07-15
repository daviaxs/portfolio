import styled from "styled-components"

interface ButtonModalActionsProps {
  onRedirect: () => void
  onCopy: () => void
  children: React.ReactNode
}

const ButtonModalActionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  
`

export function ButtonModalActions({ onCopy, onRedirect, children }: ButtonModalActionsProps) {
  return (
    <ButtonModalActionsStyle>
      <Button onClick={onCopy}>{children}</Button>
      <Button onClick={onRedirect}>{children}</Button>
    </ButtonModalActionsStyle>
  )
}