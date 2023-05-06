import { useEffect } from "react"

import { useSettingsContext } from "../shared/contexts/SettingsContext"
import { Settings } from "../shared/components/settings/Settings"
import { LayoutBaseDePagina } from "../shared/layout"

export const Test = () => {
  const { setOptions } = useSettingsContext()

  useEffect(() => {
    setOptions([
      {
        icon: "world",
        label: "Idioma",
        description: "PT-BR",
        onClick: () => alert("Hello world")
      }
    ])
  }, [])

  return (
    <LayoutBaseDePagina flexDir="column">
      <Settings />
    </LayoutBaseDePagina>
  )
}
