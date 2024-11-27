
import { v4 as uuidv4 } from "uuid";

import { CAPA_BASE } from "./constantes";

/**
 * Generamos un color hexadecimal RGB aleatorio
 *
 * @returns string
 */
export function colorAleatorio(){
  const banco = "ABCDEF0123456789";
  let aleatoria = "#";
  for (let i = 0; i < 6; i++) {
      aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
  }
  return aleatoria;
}

/**
 * Función que inicializa una capa nueva, usando los datos provistos
 *
 * @param {*} capa
 * @param {number} desplazamiento Representa la posición actual
 * @returns
 */
export function crearCapa(capa, desplazamiento) {
  return Object.assign({}, CAPA_BASE, {
    ...capa,
    id: uuidv4(),
    title: "Capa " + (desplazamiento+1),
    top: CAPA_BASE.top + 10 * desplazamiento,
    left: CAPA_BASE.left + 10 * desplazamiento,
  });
};
