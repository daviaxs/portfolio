import { BrowserRouter } from "react-router-dom"

import { AppRoutes } from "./routes"
import { WindowDimensionsProvider } from "./shared/contexts/WindowDimensionsContext"
import { SidebarProvider } from "./shared/contexts/SidebarContext"

export const App = () => {
  return (
    <WindowDimensionsProvider>
      <SidebarProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </SidebarProvider>
    </WindowDimensionsProvider>
  )
}
