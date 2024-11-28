import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import { PolosContext } from "./PolosContext";

import { excluirPolo } from '../utils/funciones'

/**
 * Implementación de las variables globales concernientes a los polos de un usuario
 */
export const PolosProvider = ({ children }) => {
  // Polos diseñados por el usuario
  const [polos, cambiarPolos] = useState([]);

  const agregarPolo = (polo) => {

    // Creamos un nuevo objeto array, que incluye el nuevo elemento polo a agregar a nuestro listado
    // 1) No usamos el array anterior polos que existe en memoria, porque si no, no va a funcionar la "reactividad"
    // y no se va a producir un cambio en la interfaz
    // 2) Usamos la versión de actualización de estado de useState() en la que se pasa una función callback,
    // para evitar problemas con alguna ejecución concurrente, y para evitar problemas
    // con variables que no han sido todavía actualizadas por React en el ciclo actual.
    cambiarPolos((polosPrev) => {
      // Cuando creamos un nuevo polo, le asignamos un ID "aleatorio".
      polo.id = uuidv4();

      return [...polosPrev, polo];
    });
  };

  // En esta función, actualizamos un polo de nuestra lista de polos, buscándolo mediante su ID
  // Se sigue el mismo principio de reemplazar el objeto anterior que existe en memoria,
  // para que funcione la reactividad y se produzcan cambios en la interfaz
  // Existen librerías como immer y similares, que hacen este trabajo de reemplazo de forma automática
  const actualizarPolo = (polo) => {
    cambiarPolos((polosPrev) => {
      const poloAnterior = polos.find((it) => it.id === polo.id);
      const nuevoPolo = Object.assign({}, poloAnterior, polo);

      return [...excluirPolo(polosPrev, polo), nuevoPolo];
    });
  };

  const borrarPolo = (polo) => {
    cambiarPolos((polosPrev) => [...excluirPolo(polosPrev, polo)]);
  };

  return (
    <PolosContext.Provider
      value={{ polos, cambiarPolos, agregarPolo, actualizarPolo, borrarPolo }}
    >
      {children}
    </PolosContext.Provider>
  );
};

PolosProvider.propTypes = {
  children: PropTypes.node,
};
