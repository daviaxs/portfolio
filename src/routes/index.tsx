import { Routes, Route, Navigate } from "react-router-dom"
import { PaginaInicial } from "../pages/pagina-inicial/PaginaInicial"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<PaginaInicial />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
