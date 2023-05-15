import styled from "styled-components"
import { theme, themeConstants } from "@/shared/theme"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  width: string
  height: string

  onClick?: () => void
}

const ButtonSecondaryStyle = styled.button<{ width: string; height: string }>`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${theme.buttons.bg_default_secondary};
  padding: 1rem ${themeConstants.sizes["6xl"]}rem;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  transition: background 0.3s ease-out, transform 0.1s ease-in;

  &:hover {
    background: ${theme.buttons.border_focus_visible};
  }

  &:focus-visible {
    outline: 2.5px solid ${theme.buttons.border_focus_visible};
    outline-offset: -2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ButtonSecondary: React.FC<IButtonProps> = ({ onClick, className, disabled, width, height, children }) => {
  return (
    <ButtonSecondaryStyle onClick={onClick} className={className} disabled={disabled} width={width} height={height}>
      {children}
    </ButtonSecondaryStyle>
  )
}
