import { useContext } from "react"
import { WindowDimensionsContext } from "../../shared/contexts/WindowDimensionsContext"
import { THeadingPrimary } from "../../shared/fonts"

export const PaginaInicial = () => {
  const {width} = useContext(WindowDimensionsContext)
  console.log(width)

  return <THeadingPrimary>Hello World</THeadingPrimary>
}
