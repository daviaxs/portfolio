import { useContext } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { Rectangle, Rectangles } from "../../shared/components/rectangle/Reactangles.style"
import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { Container } from "../../shared/components/container/Container"
import { TTextPrimary, TTitleSecondary } from "../../shared/fonts"
import { CardTech, CardTechContainer } from "./utils/CardTech"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"
import { CardProfile } from "./utils/CardProfile"

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
