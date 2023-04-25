import { Sidebar } from "../components/sidebar/Sidebar"
import { PageLayout } from "./utils/PageLayout"
import { Box } from "../components/box/Box"
import { theme } from "../theme"
import { Modal } from "../components/modal/Modal"

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode
  paddingInline?: number
  paddingTop?: number
  flexDir: "column" | "row"
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ flexDir, paddingInline, paddingTop, children }) => {
  return (
    <Box bg={theme.bg.bg_linear} flexDir="row">
      <Sidebar />
      <Modal/>
      <PageLayout flexDir={flexDir} paddingInline={paddingInline} paddingTop={paddingTop}>{children}</PageLayout>
    </Box>
  )
}
