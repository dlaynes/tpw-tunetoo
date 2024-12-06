import { createContext } from "react";

/**
 * Declaración de las variables globales concernientes a los polos de un usuario
 */
export const PolosContext = createContext({
  polos: [],
  poloSeleccionado: null,
  cambiarPolos: () => {},
  agregarPolo: () => {},
  actualizarPolo: () => {},
  borrarPolo: () => {},
  seleccionarPolo: () => {}
});
