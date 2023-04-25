import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { useSidebarContext } from "../shared/contexts/SidebarContext"
import { PaginaInicial, Sobre } from "../pages"

export const AppRoutes = () => {
  const { setSidebarOptions: setDrawerOptions } = useSidebarContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página inicial",
        icon: "home",
        to: "/pagina-inicial"
      },
      {
        label: "Sobre",
        icon: "person",
        to: "/sobre"
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />
      <Route path="/sobre" element={<Sobre />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
