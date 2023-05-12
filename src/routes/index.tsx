import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import { PaginaInicial, Sobre, Projetos, Contato, FormEnviado } from "../pages"
import { useSidebarContext } from "../shared/contexts/SidebarContext"
import { useSettingsContext } from "../shared/contexts/SettingsContext"
import { useLanguageContext } from "../shared/contexts/LanguageContext"
import { languageTexts } from "../shared/language"

export const AppRoutes = () => {
  const { setSidebarOptions: setDrawerOptions } = useSidebarContext()
  const { setOptions } = useSettingsContext()
  const { toggleCurrentLanguage, currentLanguage } = useLanguageContext()

  useEffect(() => {
    setDrawerOptions([
      {
        label: currentLanguage ? languageTexts["pt-br"].homePage.label : languageTexts["en"].homePage.label,
        icon: "home",
        to: "/pagina-inicial",
      },
      {
        label: currentLanguage ? languageTexts["pt-br"].aboutPage.label : languageTexts["en"].aboutPage.label,
        icon: "person",
        to: "/sobre",
      },
      {
        label: currentLanguage ? languageTexts["pt-br"].projectsPage.label : languageTexts["en"].projectsPage.label,
        icon: "paint",
        to: "/projetos",
      },
      {
        label: "Contato",
        icon: "chat",
        to: "/contato",
      },
    ])
  }, [toggleCurrentLanguage])

  useEffect(() => {
    setOptions([
      {
        icon: "world",
        label: currentLanguage ? "Idioma" : "Language",
        description: currentLanguage ? "PT-BR" : "EN",
        onClick: toggleCurrentLanguage,
      },
    ])
  }, [toggleCurrentLanguage])

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
