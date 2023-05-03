import { Sidebar } from "../components/sidebar/Sidebar"
import { Modal } from "../components/modal/Modal"
import { PageLayout } from "./utils/PageLayout"
import { Box } from "../components/box/Box"
import { theme } from "../theme"

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode
  paddingInline?: number
  paddingTop?: number
  paddingBottom?: number
  flexDir: "column" | "row"
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ flexDir, paddingInline, paddingTop, paddingBottom, children }) => {
  return (
    <Box bg={theme.bg.bg_linear} flexDir="row">
      <Sidebar />
      <Modal/>
      <PageLayout flexDir={flexDir} paddingInline={paddingInline} paddingTop={paddingTop} paddingBottom={paddingBottom}>{children}</PageLayout>
    </Box>
  )
}
