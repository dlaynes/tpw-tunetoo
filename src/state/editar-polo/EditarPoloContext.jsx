import { createContext } from "react";

/**
 * Declaración de las variables globales concernientes a la edición de un polo
 */
export const EditarPoloContext = createContext({
  capas: [],
  capaActual: {},
  imprimiendo: false,
  seleccionarCapa: () => {},
  cambiarCapas: () => {},
  agregarCapa: () => {},
  actualizarCapa: () => {},
  borrarCapa: () => {},
  cambiarImprimiendo: () => {}
});
