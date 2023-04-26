import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { Container } from "../../shared/components/container/Container"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"
import { TTextPrimary, TTitleSecondary } from "../../shared/fonts"
import { CardProfile } from "./utils/CardProfile"
import { Rectangle, Rectangles } from "../../shared/components/rectangle/Reactangles.style"

interface ItextStyleProps {
  txtColor: string
  link?: boolean
}

const TextStyle = styled.span<ItextStyleProps>`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;

  color: ${(props) => props.txtColor};
`

const TextLinkStyle = styled.a<ItextStyleProps>`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;

  text-decoration-line: underline;
  color: ${(props) => props.txtColor};
  cursor: pointer;
`

export const Sobre = () => {
  const { width: windowWidth, height: windowHeight } = useContext(WindowDimensionsContext)

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
          Olá, seja bem-vindo ao meu mundo digital! Me chamo <TextStyle txtColor={theme.text.secondary}>Davi</TextStyle>, e tenho a paixão de criar
          experiências incríveis para as pessoas através da programação. Sou um jovem de{" "}
          <TextStyle txtColor={theme.text.secondary}>17 anos</TextStyle>, atualmente desenvolvedor front-end. E sempre busco alcançar a excelência em
          tudo o que faço.
          <br />
          <br />
          Sou movido por desafios, e é isso que me motiva a buscar sempre o próximo nível em minhas aplicações. Aperfeiçoar cada detalhe, criar
          interfaces intuitivas e dinâmicas, além de proporcionar uma experiência única ao usuário, são alguns dos meus objetivos.
          <br />
          <br />
          Estou sempre em busca de novos conhecimentos e tecnologias, que possam aprimorar minhas habilidades e trazer ainda mais qualidade às minhas
          aplicações. Busco constantemente me atualizar em relação às tendências do mercado e estar sempre um passo à frente.
          <br />
          <br />
          Navegue pelo meu{" "}
          <NavLink to={"/pagina-inicial"}>
            <TextLinkStyle txtColor={theme.text.fifth}>portfólio</TextLinkStyle>
          </NavLink>{" "}
          e confira alguns dos meus projetos. E se precisar de ajuda para criar algo inovador e desafiador, entre em{" "}
          <NavLink to={"/pagina-inicial"}>
            <TextLinkStyle txtColor={theme.text.fifth}>contato</TextLinkStyle>
          </NavLink>{" "}
          comigo agora mesmo!
        </TTextPrimary>
      </Container>
      <Container
        display="flex"
        width=" 100%"
        height=""
        justifyContent="center"
        marginTop={themeConstants.sizes["8xl"]}
        style={{ transform: `${windowWidth <= 320 ? "scale(0.80)" : ""}` }}
      >
        <Container display="flex" width="" height="" zIndex={2}>
          <TTitleSecondary whiteSpace="nowrap">Minhas habilidades</TTitleSecondary>
        </Container>
        <Rectangles>
          <Rectangle height={1.625} width={2.25} style={{ right: "16.8rem", top: "-0.3rem" }} />
          <Rectangle height={1.625} width={2.25} style={{ left: "-1.5rem", top: "0.8rem" }} />
        </Rectangles>
      </Container>
    </LayoutBaseDePagina>
  )
}
