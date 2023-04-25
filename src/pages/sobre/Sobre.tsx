import { useContext } from "react"

import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { LayoutBaseDePagina } from "../../shared/layout"
import { themeConstants } from "../../shared/theme"
import { CardProfile } from "./utils/CardProfile"
import { TTextPrimary } from "../../shared/fonts"
import { Container } from "../../shared/components/container/Container"

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
          Olá, seja bem-vindo ao meu mundo digital! Me chamo Davi, e tenho a paixão de criar experiências incríveis para as pessoas através da
          programação. Sou um jovem de 17 anos, atualmente desenvolvedor front-end. E sempre busco alcançar a excelência em tudo o que faço.
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
          Navegue pelo meu portfólio e confira alguns dos meus projetos. E se precisar de ajuda para criar algo inovador e desafiador, entre em
          contato comigo agora mesmo!
        </TTextPrimary>
      </Container>
    </LayoutBaseDePagina>
  )
}
