import { BrowserRouter } from "react-router-dom"

import { WindowDimensionsProvider } from "./shared/contexts/WindowDimensionsContext"
import { SidebarProvider } from "./shared/contexts/SidebarContext"
import { MenuNavProvider } from "./shared/contexts/MenuNavContext"
import { AppRoutes } from "./routes"

export const App = () => {
  return (
    <WindowDimensionsProvider>
      <MenuNavProvider>
        <SidebarProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </SidebarProvider>
      </MenuNavProvider>
    </WindowDimensionsProvider>
  )
}
