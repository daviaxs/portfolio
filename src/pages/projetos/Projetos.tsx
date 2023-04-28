import { THeadingLinearPrimary, TTextPrimary } from "../../shared/fonts"
import { theme, themeConstants } from "../../shared/theme"
import { LayoutBaseDePagina } from "../../shared/layout"
import { Container } from "../../shared/components/container/Container"

export const Projetos = () => {
  return (
    <LayoutBaseDePagina flexDir="column" paddingInline={themeConstants.sizes["5xl"]} paddingTop={themeConstants.sizes["5xl"]}>
      <Container display="flex" flexDir="column" width="100%" height="">
        <THeadingLinearPrimary fontSize={2.5}>Bem-vindo à minha seção de Projetos!</THeadingLinearPrimary>
        <TTextPrimary fontSize={1.25} txtColor={theme.text.secondary}>
          Aqui você encontrará uma seleção de trabalhos que desenvolvi durante minha jornada como programador, com informações sobre as tecnologias e
          muito mais!
        </TTextPrimary>
      </Container>
    </LayoutBaseDePagina>
  )
}
