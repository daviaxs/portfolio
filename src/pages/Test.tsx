import { useEffect } from "react"
import { Settings } from "../shared/components/settings/Settings"
import { LayoutBaseDePagina } from "../shared/layout"

export const Test = () => {
  
  useEffect(() => {
    
  }, [])

  return (
    <LayoutBaseDePagina flexDir="column">
      <Settings options={options}/>
    </LayoutBaseDePagina>
  )
}
