import { NavLink } from "react-router-dom"
import styled from "styled-components"

import icons from "@/shared/assets/icons"
import { Icon } from "@/shared/components/icone/Icone"
import { theme, themeConstants } from "@/shared/theme"

interface INavButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  to: string
  iconName: keyof typeof icons
  children: React.ReactNode

  height?: number

  iconMarginLeft?: number
  bottomMargin?: number

  widthDefault: number
  widthFocus: number

  borderSize?: number
  borderRadius?: number
}

const NavButtonStyle = styled.button<INavButtonProps>`
  display: flex;
  align-items: center;
  justify-content: left;

  background: ${theme.sidebarButtons.default};
  background-blend-mode: overlay;
  color: ${theme.text.primary};

  width: ${(props) => props.widthDefault}rem;
  height: ${(props) => props.height}rem;

  gap: ${themeConstants.sizes.lg}rem;
  padding-inline: ${themeConstants.sizes.md}rem;
  margin-bottom: ${(props) => props.bottomMargin}rem;

  border-radius: ${(props) => props.borderRadius}rem;
  border: 0;

  white-space: nowrap;
  cursor: pointer;
  transition: 0.2s ease-out;

  border-bottom: ${(props) => props.borderSize}px solid rgba(255, 255, 255, 0.25);

  &&:hover {
    background: ${theme.sidebarButtons.hover};
    width: ${(props) => props.widthFocus}rem;
  }

  .title {
    margin-top: 0.1rem;
  }

  .icon {
    transition: all 0.5s;
  }

  &&:hover .icon {
    transform: scale(1.1);
  }

  &.active {
    background: ${theme.sidebarButtons.selected};
    width: ${(props) => props.widthFocus}rem;
  }

  &.active .icon {
    margin-left: ${(props) => props.iconMarginLeft}rem;
    opacity: ${theme.icons.selected};
  }

  &.inactive {
    background: ${theme.sidebarButtons.default};
  }

  &.inactive .icon {
    opacity: ${theme.icons.default};
    margin-left: ${(props) => props.iconMarginLeft}rem;
  }
`

export const NavButton: React.FC<INavButtonProps> = ({
  to,
  iconName,
  height = 2.5,
  widthDefault,
  widthFocus,
  iconMarginLeft,
  bottomMargin = 0.5,
  borderSize = 0,
  borderRadius = 0.25,
  children,
  ...rest
}) => {
  return (
    <NavLink to={to}>
      {(props) => (
        <NavButtonStyle
          className={props.isActive ? "active" : "inactive"}
          height={height}
          widthDefault={widthDefault}
          widthFocus={widthFocus}
          iconMarginLeft={iconMarginLeft}
          bottomMargin={bottomMargin}
          borderSize={borderSize}
          borderRadius={borderRadius}
          iconName={iconName}
          title={`Navegar para ${to}`}
          to={to}
          {...rest}
        >
          <Icon name={iconName} size={18} />
          {children}
        </NavButtonStyle>
      )}
    </NavLink>
  )
}
