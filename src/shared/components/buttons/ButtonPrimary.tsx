import styled from "styled-components"
import { theme, themeConstants } from "../../theme"
import { TTitleSecondary } from "../../fonts"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  disabled?: boolean

  onClick?: () => void
}

const ButtonPrimaryStyle = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: none;
  border-radius: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${theme.buttons.bg_default_primary};
  padding: ${themeConstants.sizes.lg}rem ${themeConstants.sizes["6xl"]}rem;

  transition: background 0.3s ease-out, transform 0.1s ease-in;

  &:hover {
    background: ${theme.buttons.hover};
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2.5px solid ${theme.buttons.border_focus_visible};
    outline-offset: -2px;
  }

  &:disabled {
    opacity: .50;
    cursor: not-allowed;
  }
`

export const ButtonPrimary: React.FC<IButtonProps> = ({ onClick, className, disabled, children }) => {
  return (
    <ButtonPrimaryStyle onClick={onClick} className={className} disabled={disabled}>
      {children}
    </ButtonPrimaryStyle>
  )
}
