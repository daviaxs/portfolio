import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { PaginaInicial, Sobre, Projetos, Contato, FormEnviado } from "../pages"
import { useSidebarContext } from "../shared/contexts/SidebarContext"
import { Test } from "../pages/Test"

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
      {
        label: "Teste",
        icon: "options",
        to: "/teste"
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/formulario-enviado" element={<FormEnviado />} />
      <Route path="/teste" element={<Test />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
