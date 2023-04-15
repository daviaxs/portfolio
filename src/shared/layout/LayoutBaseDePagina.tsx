import { Box } from "../components/box/Box"
import { Sidebar } from "../components/sidebar/Sidebar"
import { theme } from "../theme"

export const LayoutBaseDePagina = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box bg={theme.bg.bg_linear} flexDir="row">
      <Sidebar />
      {children}
    </Box>
  )
}
