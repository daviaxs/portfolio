import { Container } from "../../shared/components/container/Container"
import { LayoutBaseDePagina } from "../../shared/layout"
import Imgs from "../../shared/assets/index"
import { THeadingPrimary } from "../../shared/fonts"
import { theme } from "../../shared/theme"

export const PaginaInicial = () => {
  return (
    <LayoutBaseDePagina flexDir="row">
      <Container display="flex" height="100%" width="100%" align="center" justifyContent="space-between">
        <THeadingPrimary txtColor={theme.text.h1} txtShadow="2px 2px 0px #3C427B">
          Davi Alves
        </THeadingPrimary>
        <img src={Imgs.AvatarImage} alt="" style={{transform: "scale(.45)"}} />
      </Container>
    </LayoutBaseDePagina>
  )
}
