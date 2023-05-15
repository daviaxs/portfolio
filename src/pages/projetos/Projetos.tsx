import { useContext } from "react"
import styled from "styled-components"

import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { useLanguageContext } from "@/shared/contexts/LanguageContext"
import { THeadingLinearPrimary, TTextPrimary } from "@/shared/fonts"
import { Container } from "@/shared/components/container/Container"
import { Card, CardContainerStyle, TechUsed } from "@/pages/projetos/utils/Card"
import { theme, themeConstants } from "@/shared/theme"
import { Icon } from "@/shared/components/icon/Icon"
import { LayoutBaseDePagina } from "@/shared/layout"
import { languageTexts } from "@/shared/language"

const Separator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: ${themeConstants.sizes["6xl"]}rem;
`

const Line = styled.span`
  background: ${theme.buttons.bg_default_secondary};
  width: 100%;
  height: 0.05rem;
`

export const Projetos: React.FC = () => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { currentLanguage } = useLanguageContext()

  return (
    <LayoutBaseDePagina flexDir="column" paddingInline={themeConstants.sizes["5xl"]} paddingTop={themeConstants.sizes["5xl"]}>
      <Container display="flex" flexDir="column" width="100%" height="" gap={0.5}>
        <THeadingLinearPrimary fontSize={windowWidth <= 600 ? 1.5 : 2.5} textAlign={windowWidth <= 600 ? "center" : "start"}>
          {currentLanguage ? languageTexts["pt-br"].projectsPage.texts.title : languageTexts["en"].projectsPage.texts.title}
        </THeadingLinearPrimary>
        <TTextPrimary fontSize={windowWidth <= 600 ? 1 : 1.25} txtColor={theme.text.secondary} textAlign={windowWidth <= 600 ? "center" : "start"}>
          {currentLanguage ? languageTexts["pt-br"].projectsPage.texts.text : languageTexts["en"].projectsPage.texts.text}
        </TTextPrimary>
      </Container>

      <Separator>
        <Line />
        <Icon name="arrowDown" size={32} fill={theme.buttons.bg_default_secondary} />
        <Line />
      </Separator>
      <CardContainerStyle>
        <Card
          img="habits"
          label="Habits"
          description={
            currentLanguage
              ? languageTexts["pt-br"].projectsPage.projects.habits.description
              : languageTexts["en"].projectsPage.projects.habits.description
          }
          toDeploy="https://habits-mocha.vercel.app"
          toGithub="https://github.com/daviaxs/habits"
          flexDir={windowWidth <= 600 ? "column" : "row"}
          align={windowWidth <= 600 ? "center" : "start"}
          justifyContent={windowWidth <= 600 ? "center" : "start"}
        >
          <TechUsed label="html" />
          <TechUsed label="css" />
          <TechUsed label="js" />
        </Card>
      </CardContainerStyle>
    </LayoutBaseDePagina>
  )
}
