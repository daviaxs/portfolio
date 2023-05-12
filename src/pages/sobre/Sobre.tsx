import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { Rectangle, Rectangles } from "../../shared/components/rectangle/Reactangles.style"
import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { useLanguageContext } from "../../shared/contexts/LanguageContext"
import { Container } from "../../shared/components/container/Container"
import { TTextPrimary, TTitleSecondary } from "../../shared/fonts"
import { CardTech, CardTechContainer } from "./utils/CardTech"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"
import { CardProfile } from "./utils/CardProfile"
import { languageTexts } from "../../shared/language"

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
        label="Sobre mim"
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
          <Rectangle height={1.625} width={2.25} style={{ right: `${windowWidth <= 400 ? "6.5rem" : "7.7rem"}`, top: "-0.3rem" }} />
          <Rectangle height={1.625} width={2.25} style={{ left: `${windowWidth <= 400 ? "6.5rem" : "7.7rem"}`, top: "0.6rem" }} />
        </Rectangles>
        <Container display="flex" flexDir="column" align="center" height="" width="100%" zIndex={2} gap={themeConstants.sizes["4xl"]}>
          <TTitleSecondary whiteSpace="nowrap" fontSize={windowWidth <= 400 ? 1.8 : 2}>
            Minhas habilidades
          </TTitleSecondary>
          <CardTechContainer flexDir={windowWidth <= 600 ? "row" : "column"} height="">
            <CardTech
              img="javaScript"
              label="JavaScript"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="JavaScript é uma linguagem dinâmica e versátil, permitindo a criação de interações ricas e complexas nas páginas web, utilizada principalmente no desenvolvimento de aplicações web front-end e back-end."
            />
            <CardTech
              img="react"
              label="ReactJS"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="ReactJS é uma biblioteca JavaScript que permite criar interfaces de usuário (UI) por meio de componentes reutilizáveis. Ele é projetado para criar aplicações web escaláveis, eficientes e fáceis de manter."
            />
            <CardTech
              img="typeScript"
              label="TypeScript"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="TypeScript é uma linguagem de programação baseada em JavaScript que adiciona recursos de tipagem
              estática ao JavaScript. Ele é projetado para ajudar a escrever código mais seguro, escalável e fácil de manter em aplicações web e outras plataformas que usam JavaScript."
            />
            <CardTech
              img="css"
              label="CSS"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="CSS é uma linguagem de estilo utilizada para estilizar elementos HTML e torná-los mais atraentes visualmente. É amplamente utilizado para criar layouts e estilos para sites e aplicativos web."
            />
            <CardTech
              img="styledComponents"
              label="Styled components"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="Styled Components é uma biblioteca para React que permite escrever estilos de forma mais legível e fácil de manter, usando JavaScript e CSS-in-JS."
            />
            <CardTech
              img="mui"
              label="Material UI"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="Material UI é uma biblioteca de componentes React que fornece uma ampla gama de componentes pré-construídos, prontos para uso, para criar interfaces de usuário modernas e atraentes."
            />
            <CardTech
              img="figma"
              label="Figma"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="Figma é uma ferramenta de design de interface de usuário baseada em navegador, que permite criar, colaborar e compartilhar designs de maneira eficiente e escalável."
            />
            <CardTech
              img="git"
              label="Git"
              labelWidth={windowWidth <= 600 ? 15 : 18}
              description="Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código-fonte de um projeto de software. Ele facilita o trabalho colaborativo em equipe, permitindo que os membros compartilhem e combinem suas alterações com segurança."
            />
          </CardTechContainer>
        </Container>
      </Container>
    </LayoutBaseDePagina>
  )
}
