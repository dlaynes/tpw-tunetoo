import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';

import { Index } from "./paginas/Index";
import { Crear } from "./paginas/Crear";
import { Equipo } from "./paginas/Equipo";
import { Nosotros } from "./paginas/Nosotros";
import { Artshop } from "./paginas/Artshop";

import { Body } from "./components/Body";
import { PolosProvider } from "./state/polos/PolosProvider";
import { EditarPoloProvider } from "./state/editar-polo/EditarPoloProvider";
import { Polos } from "./paginas/Polos";
import { AutenticacionProvider } from "./state/autenticacion/AutenticacionProvider";
import { Disenos } from "./paginas/Disenos";

/**
 * El componente App sirve para navegar entre las páginas del proyecto.
 * Para el efecto, se definen rutas de navegación, y cada ruta se asocia a un componente respectivo.
 * Asimismo, se encarga de poner a disposición las variables y funciones
 * globales de estado mediante los proveedores de contexto (Providers)
 *
 * Nota: El tipo de navegación usado implica que se necesita un servidor web
 * configurado para que se redirijan a la ruta base del proyecto las peticiones http.
 * Revisar la documentación de HashRouter para una alternativa:
 * https://www.geeksforgeeks.org/hashrouter-in-react-router/
 *
 */
function App() {
  return (
    <BrowserRouter>
      <AutenticacionProvider>
        <PolosProvider>
          <EditarPoloProvider>
            <Body>
              <Routes>
                <Route index element={<Index />} />
                <Route path="/artshop" element={<Artshop />} />
                <Route path="/crear" element={<Crear />} />
                <Route path="/editar" element={<Polos />} />
                <Route path="/editar/:poloId" element={<Polos />} />
                <Route path="/disenos" element={<Disenos />} />
                <Route path="/equipo" element={<Equipo />} />
                <Route path="/nosotros" element={<Nosotros />} />
              </Routes>
              <ToastContainer />
            </Body>
          </EditarPoloProvider>
        </PolosProvider>
      </AutenticacionProvider>
    </BrowserRouter>
  );
}

export default App;
