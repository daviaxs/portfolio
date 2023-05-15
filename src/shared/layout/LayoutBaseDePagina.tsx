import { Sidebar } from "@/shared/components/sidebar/Sidebar"
import { PageLayout } from "@/shared/layout/utils/PageLayout"
import { Modal } from "@/shared/components/modal/Modal"
import { Box } from "@/shared/components/box/Box"
import { theme } from "@/shared/theme"

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
