import { BrowserRouter } from "react-router-dom"

import { SidebarTemporaryProvider } from "./shared/contexts/SidebarTemporaryContext"
import { WindowDimensionsProvider } from "./shared/contexts/WindowDimensionsContext"
import { LanguageProvider } from "./shared/contexts/LanguageContext"
import { SettingsProvider } from "./shared/contexts/SettingsContext"
import { SidebarProvider } from "./shared/contexts/SidebarContext"
import { MenuNavProvider } from "./shared/contexts/MenuNavContext"
import { ModalProvider } from "./shared/contexts/ModalContext"
import { AppRoutes } from "./routes"

export const App = () => {
  return (
    <WindowDimensionsProvider>
      <SettingsProvider>
        <MenuNavProvider>
          <LanguageProvider>
            <SidebarProvider>
              <SidebarTemporaryProvider>
                <ModalProvider>
                  <BrowserRouter>
                    <AppRoutes />
                  </BrowserRouter>
                </ModalProvider>
              </SidebarTemporaryProvider>
            </SidebarProvider>
          </LanguageProvider>
        </MenuNavProvider>
      </SettingsProvider>
    </WindowDimensionsProvider>
  )
}
