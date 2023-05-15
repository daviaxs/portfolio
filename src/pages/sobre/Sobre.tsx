import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { Rectangle, Rectangles } from "@/shared/components/rectangle/Reactangles.style"
import { WindowDimensionsContext } from "@/shared/contexts/WindowDimensionsContext"
import { useLanguageContext } from "@/shared/contexts/LanguageContext"
import { Container } from "@/shared/components/container/Container"
import { TTextPrimary, TTitleSecondary } from "@/shared/fonts"
import { CardTech, CardTechContainer } from "./utils/CardTech"
import { CardProfile } from "@/pages/sobre/utils/CardProfile"
import { theme, themeConstants } from "@/shared/theme"
import { LayoutBaseDePagina } from "@/shared/layout"
import { languageTexts } from "@/shared/language"

interface ItextStyleProps {
  txtColor: string
}

const TextStyle = styled.span<ItextStyleProps>`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;

  color: ${(props) => props.txtColor};
`

const TextLinkStyle = styled.span<ItextStyleProps>`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;

  text-decoration-line: underline;
  color: ${(props) => props.txtColor};
  cursor: pointer;
`

export const Sobre = () => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { currentLanguage } = useLanguageContext()

  return (
    <LayoutBaseDePagina flexDir="column" paddingInline={themeConstants.sizes["5xl"]} paddingTop={themeConstants.sizes["5xl"]}>
      <CardProfile
        flexDir={windowWidth <= 350 ? "column" : "row"}
        label={currentLanguage ? languageTexts["pt-br"].aboutPage.texts.title : languageTexts["en"].aboutPage.texts.title}
        width={windowWidth <= 600 ? "100%" : "25rem"}
        fontSize={windowWidth <= 380 ? 2 : 2.5}
        lineWidth={windowWidth <= 380 ? 5 : 7}
      />
      <Container display="flex" width="" height="" marginTop={themeConstants.sizes["6xl"]}>
        <TTextPrimary fontSize={1.3}>
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part1 : languageTexts["en"].aboutPage.texts.textAbout.part1}{" "}
          <TextStyle txtColor={theme.text.secondary}>Davi</TextStyle>,{" "}
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part3 : languageTexts["en"].aboutPage.texts.textAbout.part3}{" "}
          <TextStyle txtColor={theme.text.secondary}>
            {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part4 : languageTexts["en"].aboutPage.texts.textAbout.part4}
          </TextStyle>
          , {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part5 : languageTexts["en"].aboutPage.texts.textAbout.part5}
          <br />
          <br />
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part6 : languageTexts["en"].aboutPage.texts.textAbout.part6}
          <br />
          <br />
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part7 : languageTexts["en"].aboutPage.texts.textAbout.part7}
          <br />
          <br />
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part8 : languageTexts["en"].aboutPage.texts.textAbout.part8}{" "}
          <NavLink to={"/projetos"}>
            <TextLinkStyle txtColor={theme.text.fifth}>
              {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part9 : languageTexts["en"].aboutPage.texts.textAbout.part9}
            </TextLinkStyle>
          </NavLink>{" "}
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part10 : languageTexts["en"].aboutPage.texts.textAbout.part10}{" "}
          <NavLink to={"/contato"}>
            <TextLinkStyle txtColor={theme.text.fifth}>
              {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part11 : languageTexts["en"].aboutPage.texts.textAbout.part11}
            </TextLinkStyle>
          </NavLink>{" "}
          {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.textAbout.part12 : languageTexts["en"].aboutPage.texts.textAbout.part12}
        </TTextPrimary>
      </Container>
      <Container
        display="flex"
        justifyContent="center"
        flexDir="column"
        align="center"
        width=" 100%"
        height=""
        marginTop={themeConstants.sizes["8xl"]}
        marginBottom={themeConstants.sizes["8xl"]}
      >
        <Rectangles>
          <Rectangle
            height={1.625}
            width={2.25}
            style={{
              right: `${currentLanguage ? (windowWidth <= 400 ? "6.5rem" : "7.7rem") : windowWidth <= 400 ? "2.5rem" : "3rem"}`,
              top: "-0.3rem",
            }}
          />
          <Rectangle
            height={1.625}
            width={2.25}
            style={{
              left: `${currentLanguage ? (windowWidth <= 400 ? "6.5rem" : "7.7rem") : windowWidth <= 400 ? "2.5rem" : "3rem"}`,
              top: "0.6rem",
            }}
          />
        </Rectangles>
        <Container display="flex" flexDir="column" align="center" height="" width="100%" zIndex={2} gap={themeConstants.sizes["4xl"]}>
          <TTitleSecondary whiteSpace="nowrap" fontSize={windowWidth <= 400 ? 1.8 : 2}>
            {currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.title : languageTexts["en"].aboutPage.texts.skills.title}
          </TTitleSecondary>
          <CardTechContainer flexDir={windowWidth <= 600 ? "row" : "column"} height="">
            <CardTech
              img="javaScript"
              label="JavaScript"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.texts.js : languageTexts["en"].aboutPage.texts.skills.texts.js
              }
            />
            <CardTech
              img="react"
              label="ReactJS"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage
                  ? languageTexts["pt-br"].aboutPage.texts.skills.texts.reactJs
                  : languageTexts["en"].aboutPage.texts.skills.texts.reactJs
              }
            />
            <CardTech
              img="typeScript"
              label="TypeScript"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.texts.ts : languageTexts["en"].aboutPage.texts.skills.texts.ts
              }
            />
            <CardTech
              img="css"
              label="CSS"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.texts.css : languageTexts["en"].aboutPage.texts.skills.texts.css
              }
            />
            <CardTech
              img="styledComponents"
              label="Styled components"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage
                  ? languageTexts["pt-br"].aboutPage.texts.skills.texts.styledComponents
                  : languageTexts["en"].aboutPage.texts.skills.texts.styledComponents
              }
            />
            <CardTech
              img="mui"
              label="Material UI"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.texts.mui : languageTexts["en"].aboutPage.texts.skills.texts.mui
              }
            />
            <CardTech
              img="figma"
              label="Figma"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.texts.figma : languageTexts["en"].aboutPage.texts.skills.texts.figma
              }
            />
            <CardTech
              img="git"
              label="Git"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description={
                currentLanguage ? languageTexts["pt-br"].aboutPage.texts.skills.texts.git : languageTexts["en"].aboutPage.texts.skills.texts.git
              }
            />
          </CardTechContainer>
        </Container>
      </Container>
    </LayoutBaseDePagina>
  )
}
