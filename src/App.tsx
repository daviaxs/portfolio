import { BrowserRouter } from "react-router-dom"

import { SidebarTemporaryProvider } from "./shared/contexts/SidebarTemporaryContext"
import { WindowDimensionsProvider } from "./shared/contexts/WindowDimensionsContext"
import { SidebarProvider } from "./shared/contexts/SidebarContext"
import { MenuNavProvider } from "./shared/contexts/MenuNavContext"
import { ModalProvider } from "./shared/contexts/ModalContext"
import { AppRoutes } from "./routes"
import { SettingsProvider } from "./shared/contexts/SettingsContext"

export const App = () => {
  return (
    <WindowDimensionsProvider>
      <SettingsProvider>
        <MenuNavProvider>
          <SidebarProvider>
            <SidebarTemporaryProvider>
              <ModalProvider>
                <BrowserRouter>
                  <AppRoutes />
                </BrowserRouter>
              </ModalProvider>
            </SidebarTemporaryProvider>
          </SidebarProvider>
        </MenuNavProvider>
      </SettingsProvider>
    </WindowDimensionsProvider>
  )
}
