import { useEffect } from "react"

import { useSettingsContext } from "../shared/contexts/SettingsContext"
import { Settings } from "../shared/components/settings/Settings"
import { LayoutBaseDePagina } from "../shared/layout"
import { ButtonSecondary } from "../shared/components/buttons/ButtonSecondary"

export const Test = () => {
  const { setOptions, openSettings, handleOpenSettings } = useSettingsContext()

  useEffect(() => {
    setOptions([
      {
        icon: "world",
        label: "Idioma",
        description: "PT-BR",
        onClick: () => alert("hello world")
      }
    ])
  }, [handleOpenSettings])

  return (
    <LayoutBaseDePagina flexDir="column">
      <Settings />
      <p>{openSettings ? "Teste1" : "Teste2"}</p>
      <ButtonSecondary height="2.5rem" width="8rem" onClick={handleOpenSettings}>
        Abrir configurações
      </ButtonSecondary>
    </LayoutBaseDePagina>
  )
}
