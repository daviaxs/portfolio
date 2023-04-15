import { Box } from "../components/box/Box"
import { theme } from "../theme"


export const LayoutBaseDePagina = ({children}: {children: React.ReactNode}) => {

  return (
    <Box bg={theme.bg.bg_linear} flexDir="row">
      {children}
    </Box>
  )
}