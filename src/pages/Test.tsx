import { useEffect } from "react"

import { useSettingsContext } from "../shared/contexts/SettingsContext"
import { Settings } from "../shared/components/settings/Settings"
import { LayoutBaseDePagina } from "../shared/layout"

export const Test = () => {
  const { setOptions, openSettings, handleOpenSettings } = useSettingsContext()

  useEffect(() => {
    setOptions([
      {
        icon: "world",
        label: "Idioma",
        description: "PT-BR",
        onClick: handleOpenSettings
      }
    ])
  }, [handleOpenSettings])

  return (
    <LayoutBaseDePagina flexDir="column">
      <Settings />
      <p>{openSettings ? "Teste1" : "Teste2"}</p>
    </LayoutBaseDePagina>
  )
}
