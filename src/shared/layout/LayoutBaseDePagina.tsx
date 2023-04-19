import { Sidebar } from "../components/sidebar/Sidebar"
import { PageLayout } from "./utils/PageLayout"
import { Box } from "../components/box/Box"
import { theme } from "../theme"

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode
  flexDir: "column" | "row"
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ flexDir, children }) => {
  return (
    <Box bg={theme.bg.bg_linear} flexDir="row">
      <Sidebar />
      <PageLayout flexDir={flexDir}>{children}</PageLayout>
    </Box>
  )
}
