import { useContext } from "react"
import styled from "styled-components"

import { WindowDimensionsContext } from "../../../shared/contexts/WindowDimensionsContext"
import { Container } from "../../../shared/components/container/Container"
import { TTextTertiary, TTitlePrimary } from "../../../shared/fonts"
import { theme, themeConstants } from "../../../shared/theme"
import logosTech from "../../../shared/assets/logos-tech"
import { ImageTech } from "./ImageTech"

interface ICardTechContainerProps {
  flexDir: "row" | "column"
  height: string
}

interface ICardTechProps {
  img: keyof typeof logosTech
  label: string
  description: string
  labelWidth: number
}

export const CardTechContainer = styled.ul<ICardTechContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: center;
  overflow-x: scroll;

  padding: ${themeConstants.sizes["5xl"]}rem;
  gap: ${themeConstants.sizes.lg}rem;
  width: 100%;
  height: ${(props) => props.height};

  background: ${theme.caixas.hover};
  border-radius: ${themeConstants.sizes.md}rem;
  outline: 1px solid ${theme.buttons.bg_default_secondary};

  &::-webkit-scrollbar-button {
    opacity: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
  }
`

const CardTechStyle = styled.li<ICardTechProps>`
  display: flex;
  align-items: start;

  width: fit-content;
  height: 100%;
  gap: ${themeConstants.sizes.lg}rem;
  padding: ${themeConstants.sizes.md}rem;

  background: ${theme.caixas.hover};
  border-radius: ${themeConstants.sizes.md}rem;

  .label {
    width: ${(props) => props.labelWidth}rem;
  }
`

export const CardTech: React.FC<ICardTechProps> = ({ label, description, labelWidth, img }) => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <CardTechStyle description={description} img={img} label={label} labelWidth={labelWidth}>
      {windowWidth > 450 && <ImageTech img={img} />}
      <Container display="flex" flexDir="column" width="" height="" gap={0.2}>
        {windowWidth <= 450 && <ImageTech img={img} />}

        <TTitlePrimary fontSize={2} className="label">
          {label}
        </TTitlePrimary>
        <TTextTertiary txtColor={theme.text.secondary} fontSize={1}>
          {description}
        </TTextTertiary>
      </Container>
    </CardTechStyle>
  )
}
