import { createContext } from "react";

/**
 * Declaración de las variables globales concernientes al estado de autenticación de un usuario
 */
export const AutenticacionContext = createContext({
  usuario: null,
  error: null,
  registro: async () => {},
  ingresar: async () => {},
  salir: async () => {}
});
