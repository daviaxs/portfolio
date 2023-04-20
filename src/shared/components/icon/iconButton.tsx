import styled from "styled-components"
import { theme } from "../../theme"

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: number
  height: number
  borderRadius?: number
  children: React.ReactNode
  display?: "flex" | "none"

  onClick?: () => void
}

const IconButtonStyle = styled.button<IIconButtonProps>`
  border: none;
  background-color: transparent;
  outline: none;
  box-shadow: none;

  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  border-radius: ${(props) => props.borderRadius}px;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${theme.icons.hover_bg};
  }

  &:active {
    transform: scale(0.95);
  }
`

export const IconButton: React.FC<IIconButtonProps> = ({ width, height, borderRadius = 9999, display = "flex", onClick, children, ...rest }) => {
  return (
    <IconButtonStyle onClick={onClick} width={width} height={height} borderRadius={borderRadius} display={display} {...rest}>
      {children}
    </IconButtonStyle>
  )
}
