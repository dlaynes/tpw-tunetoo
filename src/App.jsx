
import { BrowserRouter, Routes, Route } from "react-router";
import { Index } from "./paginas/Index";
import { Crear } from "./paginas/Crear";
import { Equipo } from "./paginas/Equipo";
import { Nosotros } from "./paginas/Nosotros";
import { Artshop } from "./paginas/Artshop";

import { Body } from "./components/Body";
import { PolosProvider } from "./state/polos/PolosProvider";
import { EditarPoloProvider } from "./state/editar-polo/EditarPoloProvider";
import { Polos } from "./paginas/Polos";

/**
 * El componente App sirve para navegar entre las páginas del proyecto
 * Para el efecto, se definen rutas de navegación, y cada ruta se asocia a un componente respectivo.
 * Asimismo, se encarga de poner a disposición las variables y funciones globales disponibles en los proveedores de contexto (Providers)
 *
 * Nota: El tipo de navegación usado implica que se necesita un servidor web
 * configurado para que se redirijan a la ruta base del proyecto las peticiones.
 */
function App() {
  return (
    <BrowserRouter>
      <PolosProvider>
        <EditarPoloProvider>
          <Body>
            <Routes>
              <Route index element={<Index />} />
              <Route path="/artshop" element={<Artshop />} />
              <Route path="/crear" element={<Crear />} />
              <Route path="/editar" element={<Polos />} />
              <Route path="/editar/:poloId" element={<Polos />} />
              <Route path="/equipo" element={<Equipo />} />
              <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
          </Body>
        </EditarPoloProvider>
      </PolosProvider>
    </BrowserRouter>
  )
}

export default App
