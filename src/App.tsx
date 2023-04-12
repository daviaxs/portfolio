import { BrowserRouter } from "react-router-dom"

import { AppRoutes } from "./routes"
import { WindowDimensionsProvider } from "./shared/contexts/WindowDimensionsContext"

export const App = () => {
  return (
    <WindowDimensionsProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WindowDimensionsProvider>
  )
}
