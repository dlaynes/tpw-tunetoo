import { useState } from "react";
import PropTypes from "prop-types";

import { PolosContext } from "./PolosContext";
import { damePolosIniciales, excluirElemento } from "../utils/funciones";

/**
 * Implementación de las variables globales concernientes a los polos de un usuario
 */
export const PolosProvider = ({ children }) => {
  // Polos diseñados por el usuario
  const [polos, cambiarPolos] = useState(damePolosIniciales);
  const [poloSeleccionado, seleccionarPolo] = useState(null);

  const agregarPolo = (polo) => {
    // Creamos un nuevo array, que incluye el nuevo elemento polo a agregar a nuestro listado
    // 1) No reusamos el array anterior "polos" que existe en memoria, porque no va a funcionar la "reactividad"
    // y no se va a producir un cambio en la interfaz.
    // 2) Usamos la versión de actualización de estado de useState() en la que se pasa una función callback,
    // para evitar problemas con alguna ejecución concurrente que esté actualizando este contexto y para evitar problemas
    // con variables que no han sido todavía actualizadas por React en el ciclo actual en este contexto.
    cambiarPolos((polosPrev) => {
      // añadimos los valores anteriores, y el nuevo polo agregado, dentro de un nuevo array
      // este nuevo array es utilizado para actualizar la variable polos
      return [...polosPrev, polo];
    });
  };

  // En esta función, actualizamos un polo de nuestra lista de polos, buscándolo mediante su ID
  // Se sigue el mismo principio de reemplazar el objeto anterior que existe en memoria,
  // (en este caso, el array de polos) para que funcione la reactividad y se produzcan cambios en la interfaz.
  // Existen librerías como immer y similares, que hacen este trabajo de reemplazo de forma automática
  const actualizarPolo = (polo) => {
    cambiarPolos((polosPrev) => {
      const poloAnterior = polos.find((it) => it.id === polo.id);
      const nuevoPolo = Object.assign({}, poloAnterior, polo);

      return [...excluirElemento(polosPrev, polo), nuevoPolo];
    });
  };

  // El borrado de polos es fácil de implementar, reutilizando las funciones anteriores
  const borrarPolo = (polo) => {
    cambiarPolos((polosPrev) => [...excluirElemento(polosPrev, polo)]);
  };

  const guardarPolos = () => {};

  // Todos los componentes react que se encuentren dentro del proveedor, tendrán acceso a estas variables
  // y funciones, cuando pidan datos del contexto. También es posible tener regiones con
  // grupos de datos distintos, si tenemos múltiples instancias del proveedor (PolosProvider).
  return (
    <PolosContext.Provider
      value={{
        polos,
        poloSeleccionado,
        cambiarPolos,
        agregarPolo,
        actualizarPolo,
        borrarPolo,
        seleccionarPolo,
        guardarPolos,
      }}
    >
      {children}
    </PolosContext.Provider>
  );
};

PolosProvider.propTypes = {
  children: PropTypes.node,
};
