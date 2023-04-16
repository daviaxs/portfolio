import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { PaginaInicial } from "../pages/pagina-inicial/PaginaInicial"
import { useSidebarContext } from "../shared/contexts/SidebarContext"

export const AppRoutes = () => {
  const { setSidebarOptions: setDrawerOptions } = useSidebarContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página inicial",
        icon: "home",
        to: "/pagina-inicial"
      }
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
