import { IconButton } from "../../shared/components/icon/iconButton"
import { Icon } from "../../shared/components/icon/icon"
import { Container } from "../../shared/components/container/Container"

export const PaginaInicial = () => {
  return (
    <Container
      height="100px"
      width="100px"

      display="flex"
      align="center"
      justifyContent="center"

      borderRadius={.8}
      bg={"#2f2f2f"}
    >
      <IconButton height={4} width={4}>
        <Icon name="xClose" size={1.5} />
      </IconButton>
    </Container>
  )
}
