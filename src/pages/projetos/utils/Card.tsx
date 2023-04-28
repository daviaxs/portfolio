import styled from "styled-components"

import { Container } from "../../../shared/components/container/Container"
import { TTextSecondary, TTitleSecondary } from "../../../shared/fonts"
import { theme, themeConstants } from "../../../shared/theme"
import imgs from "../../../shared/assets/index"

interface ICardProps {
  img: string
  label: string
  description: string
}

export const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${themeConstants.sizes["7xl"]}rem;
`

const CardSTyle = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid ${theme.buttons.bg_default_secondary};
  border-radius: ${themeConstants.sizes.lg}rem;
  padding: ${themeConstants.sizes["2xl"]}rem;

  background: transparent;
  transition: background .2s ease-out;

  .image {
    width: 222px;
    border-radius: 1rem;
  }

  &:hover {
    background: ${theme.caixas.hover};
  }
`

export const Card: React.FC<ICardProps> = ({ img, label, description }) => {
  return (
    <CardSTyle>
      <img src={imgs.ProfilePicture} alt="" className="image" />
      <Container display="flex" flexDir="column" width="" height="100%" justifyContent="start" marginLeft={1} marginTop={1} gap={1}>
        <TTitleSecondary>Project name</TTitleSecondary>
        <TTextSecondary txtColor={theme.text.quaternary}>Description project</TTextSecondary>
      </Container>
    </CardSTyle>
  )
}
