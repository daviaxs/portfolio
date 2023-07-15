import { Icon } from "@/shared/components/icone/Icone"
import { theme } from "@/shared/theme"
import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

interface ButtonModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: "copy" | "redirect"
}

const Button = styled.button`
  border: none;
  background-color: ${theme.buttons.bg_default_primary};

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: fit-content;
  height: fit-content;

  padding: 0.5rem 0.75rem;
`

export function ButtonModalAction({ iconName, ...rest }: ButtonModalActionProps) {
  return (
    <Button {...rest}>
      <Icon name={iconName} size={48} fill={theme.text.fifth} className="iconButtonAction" />
    </Button >
  )
}