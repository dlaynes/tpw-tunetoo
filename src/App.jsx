
import { BrowserRouter, Routes, Route } from "react-router";
import { Index } from "./paginas/Index";
import { Crear } from "./paginas/Crear";
import { Equipo } from "./paginas/Equipo";
import { Nosotros } from "./paginas/Nosotros";
import { Artshop } from "./paginas/Artshop";

import { Body } from "./components/Body";

/**
 * El componente App sirve para navegar entre las páginas del proyecto
 * Para el efecto, se definen rutas de navegación, y cada ruta se asocia a un componente respectivo
 */
function App() {
  return (
    <BrowserRouter>
      <Body>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/artshop" element={<Artshop />} />
            <Route path="/crear" element={<Crear />} />
            <Route path="/editar/:poloId" element={<Crear />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
      </Body>
    </BrowserRouter>
  )
}

export default App
