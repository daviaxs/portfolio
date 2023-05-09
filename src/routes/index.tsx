import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { PaginaInicial, Sobre, Projetos, Contato, FormEnviado } from "../pages"
import { useSidebarContext } from "../shared/contexts/SidebarContext"
import { useSettingsContext } from "../shared/contexts/SettingsContext"

export const AppRoutes = () => {
  const { setSidebarOptions: setDrawerOptions } = useSidebarContext()
  const { setOptions } = useSettingsContext()

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

  useEffect(() => {
    setOptions([
      {
        icon: "world",
        label: "Idioma",
        description: "PT-BR",
        onClick: () => alert("hello world")
      }
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/formulario-enviado" element={<FormEnviado />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
