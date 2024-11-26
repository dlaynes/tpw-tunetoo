import { createContext } from "react";

/**
 * Declaración de las variables globales concernientes a los polos de un usuario
 */
export const PolosContext = createContext({
  polos: [],
  cambiarPolos: () => {},
  agregarPolo: () => {},
  actualizarPolo: () => {},
  borrarPolo: () => {},
});
