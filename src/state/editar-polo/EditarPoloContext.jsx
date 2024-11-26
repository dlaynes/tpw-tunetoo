import { createContext } from "react";

/**
 * Declaración de las variables globales concernientes a la edición de un polo
 */
export const EditarPoloContext = createContext({
  polo: {},
  capas: [],
  capaActual: {},
  seleccionarCapa: () => {},
  cambiarPolo: () => {},
  cambiarCapas: () => {},
  agregarCapa: () => {},
  actualizarCapa: () => {},
  borrarCapa: () => {},
});
