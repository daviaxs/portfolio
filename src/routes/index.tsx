import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { useSidebarContext } from "../shared/contexts/SidebarContext"
import { PaginaInicial, Sobre, Projetos, Contato } from "../pages"

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
      {
        label: "Projetos",
        icon: "paint",
        to: "/projetos"
      },
      {
        label: "Contato",
        icon: "chat",
        to: "/contato"
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/contato" element={<Contato />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
