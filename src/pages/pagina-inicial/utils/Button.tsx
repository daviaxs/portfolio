import styled from "styled-components"

import { theme } from "../../../shared/theme"

interface IButtonProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
  height: number
  width: number

  children: React.ReactNode
  href?: string

  onClick?: () => void
}

const ButtonStyle = styled.a<IButtonProps>`
  /* border: none;
  background-color: transparent;
  outline: none; */
  cursor: pointer;
  opacity: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  border-radius: 9999px;

  background-color: ${theme.text.secondary};
  transition: all 0.2s ease-out;

  box-shadow: 0px 0px 68px rgba(169, 177, 255, 0.25);

  &:hover {
    opacity: 100%;
    transform: scale(1.05);
    box-shadow: 0px 0px 68px rgba(169, 178, 255, 0.565);
  }

  &:active {
    transform: scale(0.95);
  }
`
export const Button: React.FC<IButtonProps> = ({ height, width, href, onClick, children }) => {
  return (
    <ButtonStyle height={height} width={width} href={href} target="_blank" onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}
