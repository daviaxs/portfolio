import { useContext } from "react"
import styled from "styled-components"

import { Card, CardContainerStyle, TechUsed } from "@/pages/projetos/utils/Card"
import { Container } from "@/shared/components/container/Container"
import { Icon } from "@/shared/components/icone/Icone"
import { useLanguageContext } from "@/shared/contexts/LanguageContext"
import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { THeadingLinearPrimary, TTextPrimary } from "@/shared/fonts"
import { languageTexts } from "@/shared/language"
import { LayoutBaseDePagina } from "@/shared/layout"
import { theme, themeConstants } from "@/shared/theme"

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
          img="dxStore"
          label="DX Store"
          description={
            currentLanguage
              ? languageTexts["pt-br"].projectsPage.projects.dxStore.description
              : languageTexts["en"].projectsPage.projects.dxStore.description
          }
          toDeploy="https://dx-store.vercel.app"
          toGithub="https://github.com/daviaxs/DX-Store"
        >
          <TechUsed label="react js" />
          <TechUsed label="next-auth" />
          <TechUsed label="typescript" />
          <TechUsed label="prisma" />
          <TechUsed label="tailwindcss" />
          <TechUsed label="stripe" />
        </Card>

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
        >
          <TechUsed label="html" />
          <TechUsed label="css" />
          <TechUsed label="js" />
        </Card>

        <Card
          img="ecommerceDX"
          label="E-commerce"
          description={
            currentLanguage
              ? languageTexts["pt-br"].projectsPage.projects.ecommerceDX.description
              : languageTexts["en"].projectsPage.projects.ecommerceDX.description
          }
          toDeploy="https://loja-virtual-dx.vercel.app/pagina-inicial"
          toGithub="https://github.com/daviaxs/eccomerce-dx"
        >
          <TechUsed label="react js" />
          <TechUsed label="Typescript" />
          <TechUsed label="Styled components" />
        </Card>

        <Card
          img="dtMoney"
          label="DT Money"
          description={
            currentLanguage
              ? languageTexts["pt-br"].projectsPage.projects.dtMoney.description
              : languageTexts["en"].projectsPage.projects.dtMoney.description
          }
          toDeploy="https://dt-money-daviaxs.vercel.app"
          toGithub="https://github.com/daviaxs/dt-money"
        >
          <TechUsed label="react js" />
          <TechUsed label="Typescript" />
          <TechUsed label="Styled components" />
          <TechUsed label="zod" />
          <TechUsed label="radix-ui" />
        </Card>
      </CardContainerStyle>
    </LayoutBaseDePagina>
  )
}
