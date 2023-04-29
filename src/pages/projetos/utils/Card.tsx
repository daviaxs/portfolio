import { Link } from "react-router-dom"
import styled from "styled-components"

import { Container } from "../../../shared/components/container/Container"
import { TTextSecondary, TTitleSecondary } from "../../../shared/fonts"
import projectsCovers from "../../../shared/assets/projects-covers"
import { theme, themeConstants } from "../../../shared/theme"
import { Icon } from "../../../shared/components/icon/Icon"

interface ICardProps {
  img: keyof typeof projectsCovers
  label: string
  description: string

  toDeploy: string
  toGithub: string

  children: React.ReactNode
}

interface ITechContainerProps {
  label: string
}

export const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${themeConstants.sizes["7xl"]}rem;
  margin-top: ${themeConstants.sizes["5xl"]}rem;
  margin-bottom: ${themeConstants.sizes["5xl"]}rem;
`

const CardSTyle = styled.div`
  display: flex;
  flex-direction: row;

  align-items: start;
  justify-content: start;

  width: 100%;
  border: 1px solid ${theme.buttons.bg_default_secondary};
  border-radius: ${themeConstants.sizes.lg}rem;
  padding: ${themeConstants.sizes["2xl"]}rem;
  gap: ${themeConstants.sizes["2xl"]}rem;

  background: transparent;
  transition: background 0.2s ease-out;

  .image {
    width: 222px;
    border-radius: 1rem;
  }

  &:hover {
    background: ${theme.caixas.hover};
  }
`

const ButtonLink = styled.button`
  border: none;
  cursor: pointer;
  box-shadow: none;
  border-radius: 0.7rem;
  outline: 0.5px solid ${theme.text.quaternary};
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4rem 0.4rem;
  gap: ${themeConstants.sizes.md}rem;

  opacity: 50%;
  transition: 0.2s ease-out;

  &:hover {
    opacity: 100%;
  }
`

const TechContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`
export const TechUsed = styled.li<ITechContainerProps>`
  display: flex;
  align-items: center;
  justify-content: start;

  width: fit-content;
  height: fit-content;

  background: ${theme.caixas.primary};
  border-radius: ${themeConstants.sizes.md}rem;
  padding-inline: 0.4rem;
  gap: ${themeConstants.sizes.xs}rem;

  &::before {
    content: "";
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 999px;
    background-color: #00ffa3;
  }
  &::after {
    content: "${(props) => props.label}";

    text-transform: uppercase;
    color: ${theme.text.secondary};
    font-size: 1rem;

    font-weight: 600;
    font-size: 10px;
  }
`

export const Card: React.FC<ICardProps> = ({ img, label, description, toGithub, toDeploy, children }) => {
  return (
    <CardSTyle>
      <img src={projectsCovers[img]} alt={`${img} capa`} className="image" />

      <Container display="flex" flexDir="column" width="100%" height="100%" paddingTop={0.5} paddingBottom={0.5} gap={2}>
        <Container display="flex" flexDir="column" width="100%" height="100%" align="start" gap={1}>
          <TTitleSecondary fontSize={1}>{label}</TTitleSecondary>
          <TTextSecondary fontSize={1} txtColor={theme.text.quaternary}>
            {description}
          </TTextSecondary>
        </Container>

        <Container display="flex" flexDir="column" width="100%" height="100%" align="start" justifyContent="end" gap={1}>
          <TechContainer>{children}</TechContainer>
          <Container display="flex" width="100%" height="" gap={1} align="end">
            <Link to={toGithub}>
              <ButtonLink>
                <Icon name="github" size={21} fill={theme.text.quaternary} />
                <TTextSecondary txtColor={theme.text.quaternary} fontSize={1}>
                  github
                </TTextSecondary>
              </ButtonLink>
            </Link>
            <Link to={toDeploy}>
              <ButtonLink>
                <Icon name="rocket" size={21} fill={theme.text.quaternary} />
                <TTextSecondary txtColor={theme.text.quaternary} fontSize={1}>
                  deploy
                </TTextSecondary>
              </ButtonLink>
            </Link>
          </Container>
        </Container>
      </Container>
    </CardSTyle>
  )
}
