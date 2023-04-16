import { THeadingPrimary } from "../../shared/fonts"
import { LayoutBaseDePagina } from "../../shared/layout"


export const PaginaInicial = () => {
  return (
    <LayoutBaseDePagina flexDir="row">
      <THeadingPrimary fontSize={5}>
        Hello world
      </THeadingPrimary>
    </LayoutBaseDePagina>
  )
}
