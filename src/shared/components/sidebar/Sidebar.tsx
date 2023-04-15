import { useContext } from "react"

import { Container } from "../container/Container"
import { WindowDimensionsContext } from "../../contexts/WindowDimensionsContext"
import { HeaderSidebar } from "./utils/HeaderSidebar"
import { TTitleTertiary } from "../../fonts"
import { IconButton } from "../icon/iconButton"
import { Icon } from "../icon/icon"

export const Sidebar = () => {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <Container width="" height="100%" display={windowWidth <= 600 ? "none" : "flex"}>
      <Container width="" height="" flexDir="column" display={windowWidth <= 900 ? "none" : "flex"}>
        <HeaderSidebar justifyContent="space-between">
          <TTitleTertiary>
            Explorar
          </TTitleTertiary>
          <IconButton height={2.25} width={2.25}>
            <Icon name="arrowClose"/>
          </IconButton>
        </HeaderSidebar>
      </Container>
    </Container>
  )
}
