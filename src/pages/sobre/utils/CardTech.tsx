import styled from "styled-components"

import logosTech from "../../../shared/assets/logos-tech"
import { theme, themeConstants } from "../../../shared/theme"
import { Container } from "../../../shared/components/container/Container"
import { TTextTertiary, TTitlePrimary } from "../../../shared/fonts"
import { ImageTech } from "./ImageTech"

interface ICardTechProps {
  img: keyof typeof logosTech
  label: string
  description: string
}
export const CardTechContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${themeConstants.sizes["5xl"]}rem;
  width: 100%;

  background: ${theme.caixas.hover};
  border-radius: ${themeConstants.sizes.md}rem;
  outline: 1px solid ${theme.buttons.bg_default_secondary};
`

const CardTechStyle = styled.li`
  display: flex;
  width: 100%;
  padding: ${themeConstants.sizes.md}rem;

  background: ${theme.caixas.hover};
  border-radius: ${themeConstants.sizes.md}rem;
`

export const CardTech: React.FC<ICardTechProps> = ({ label, description, img }) => {
  return (
    <CardTechStyle>
      <ImageTech img={img} />
      <Container display="flex" flexDir="column" width="" height="">
        <TTitlePrimary fontSize={2}>{label}</TTitlePrimary>
        <TTextTertiary txtColor={theme.text.secondary}>{description}</TTextTertiary>
      </Container>
    </CardTechStyle>
  )
}
