import { useContext } from "react"

import { Rectangle, Rectangles } from "../../shared/components/rectangle/Reactangles.style"
import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { useLanguageContext } from "../../shared/contexts/LanguageContext"
import { useSidebarContext } from "../../shared/contexts/SidebarContext"
import { Container } from "../../shared/components/container/Container"
import { useModalContext } from "../../shared/contexts/ModalContext"
import { THeadingPrimary, TTitlePrimary } from "../../shared/fonts"
import { theme, themeConstants } from "../../shared/theme"
import { Icon } from "../../shared/components/icon/Icon"
import { LayoutBaseDePagina } from "../../shared/layout"
import { languageTexts } from "../../shared/language"
import Imgs from "../../shared/assets/index"
import { Button } from "./utils/Button"

export const PaginaInicial = () => {
  const { width: windowWidth, height: windowHeight } = useContext(WindowDimensionsContext)
  const { currentLanguage } = useLanguageContext()
  const { toggleModal } = useModalContext()
  const { expanded } = useSidebarContext()

  return (
    <LayoutBaseDePagina flexDir={windowWidth <= 912 ? "column" : "row"}>
      <Container
        height=""
        width=""
        zIndex={0}
        display="flex"
        flexDir="column"
        justifyContent="center"
        align={windowWidth <= 912 ? "center" : "start"}
        marginTop={windowWidth <= 912 && windowWidth > 600 ? 5 : windowWidth <= 600 ? 2 : 0}
        marginBottom={windowWidth <= 600 ? 0 : 3}
        marginLeft={windowWidth <= 600 ? 0 : themeConstants.sizes["5xl"]}
        marginRight={windowWidth <= 912 ? 0 : expanded ? 2 : windowWidth / 200}
        transitionName="margin"
        transitionTime={0.2}
        style={
          windowWidth <= 600 && windowWidth >= 390
            ? { transform: "scale(0.90)" }
            : windowWidth <= 390 && windowWidth >= 300
            ? { transform: "scale(0.70)" }
            : windowWidth <= 300
            ? { transform: "scale(0.60)" }
            : {}
        }
      >
        <Rectangles>
          {/* Primarios */}
          <Rectangle height={windowWidth > 912 ? 1.813 : 1.349} width={windowWidth > 912 ? 2.375 : 1.768} className="_1" />
          <Rectangle height={windowWidth > 912 ? 1.53 : 1.139} width={windowWidth > 912 ? 2.005 : 1.492} className="_2" />
          <Rectangle height={windowWidth > 912 ? 2.049 : 1.525} width={windowWidth > 912 ? 2.319 : 1.726} className="_3" />
          <Rectangle height={windowWidth > 912 ? 2.049 : 1.419} width={windowWidth > 912 ? 2.319 : 1.749} className="_4" />
          <Rectangle height={windowWidth > 912 ? 1.906 : 1.419} width={windowWidth > 912 ? 2.35 : 1.749} className="_5" />
          <Rectangle height={windowWidth > 912 ? 1.474 : 1.097} width={windowWidth > 912 ? 1.817 : 1.353} className="_6" />
          <Rectangle height={windowWidth > 912 ? 1.813 : 1.349} width={windowWidth > 912 ? 2.375 : 1.768} className="_7" />
          <Rectangle height={windowWidth > 912 ? 1.309 : 0.974} width={windowWidth > 912 ? 1.715 : 1.277} className="_8" />
          {/* Secundarios */}
          <Rectangle height={windowWidth > 912 ? 1.466 : 1.091} width={windowWidth > 912 ? 2.415 : 1.416} colorSecondary className="_9" />
          <Rectangle height={windowWidth > 912 ? 1.248 : 0.929} width={windowWidth > 912 ? 1.685 : 1.254} colorSecondary className="_10" />
          <Rectangle height={windowWidth > 912 ? 1.761 : 1.31} width={windowWidth > 912 ? 2.415 : 1.798} colorSecondary className="_11" />
          <Rectangle height={windowWidth > 912 ? 1.761 : 1.31} width={windowWidth > 912 ? 2.415 : 1.798} colorSecondary className="_12" />
          <Rectangle height={windowWidth > 912 ? 1.776 : 1.321} width={windowWidth > 912 ? 2.489 : 1.853} colorSecondary className="_13" />
          <Rectangle height={windowWidth > 912 ? 2.152 : 1.601} width={windowWidth > 912 ? 3.016 : 2.245} colorSecondary className="_14" />
          <Rectangle height={windowWidth > 912 ? 1.518 : 1.129} width={windowWidth > 912 ? 2.009 : 1.495} colorSecondary className="_15" />
        </Rectangles>

        <Container display="flex" flexDir="column" height="" width="" zIndex={2} align={windowWidth <= 912 ? "center" : "start"}>
          <TTitlePrimary txtColor={theme.text.secondary} fontSize={windowWidth > 912 ? 2.5 : 2}>
            {currentLanguage ? languageTexts["pt-br"].homePage.texts.title : languageTexts["en"].homePage.texts.title}
          </TTitlePrimary>
          <THeadingPrimary txtColor={theme.text.h1} txtShadow="2px 2px 0px #3C427B" whiteSpace="nowrap" fontSize={windowWidth > 912 ? 6.563 : 6}>
            Davi Alves
          </THeadingPrimary>
          <TTitlePrimary txtColor={theme.text.secondary} fontSize={windowWidth > 912 ? 2.5 : 2}>
          {currentLanguage ? languageTexts["pt-br"].homePage.texts.title2 : languageTexts["en"].homePage.texts.title2}
          </TTitlePrimary>

          <Container display="flex" width="100%" height="" justifyContent="center" gap={2} marginTop={1} marginLeft={windowWidth <= 912 ? 0 : -1}>
            <Button height={4.125} width={4.125} href="https://github.com/daviaxs">
              <Icon name="github" fill={theme.bg.primary} size={40} />
            </Button>
            <Button height={4.125} width={4.125} onClick={toggleModal}>
              <Icon name="discord" fill={theme.bg.primary} size={50} className="iconDiscord" />
            </Button>
          </Container>
        </Container>
      </Container>

      <Container
        display="flex"
        height="100%"
        width="100%"
        justifyContent="center"
        align="center"
        marginLeft={0.5}
        style={
          windowWidth <= 600 && windowWidth >= 390
            ? { transform: "scale(1)" }
            : windowWidth <= 390 && windowWidth >= 300
            ? { transform: "scale(0.90)" }
            : windowWidth <= 300
            ? { transform: "scale(0.85)" }
            : {}
        }
      >
        <img
          src={Imgs.AvatarImage}
          alt="Desenho de davi alves"
          style={{
            height: `${windowWidth > 600 ? "43.75rem" : "31.25rem"}`,
            marginTop: `${
              windowHeight <= 490 && windowHeight >= 410 && windowWidth >= 390 && windowWidth <= 912
                ? "5rem"
                : windowHeight <= 410 && windowHeight >= 345 && windowWidth >= 390 && windowWidth <= 912
                ? "10rem"
                : windowHeight <= 345 && windowWidth >= 390 && windowWidth <= 912
                ? "18rem"
                : windowWidth <= 390
                ? "-4rem"
                : ""
            }`,
          }}
        />
      </Container>
    </LayoutBaseDePagina>
  )
}
