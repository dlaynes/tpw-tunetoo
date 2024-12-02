import { v4 as uuidv4 } from "uuid";

import { CAPA_BASE } from "./constantes";

/**
 * Generamos un color hexadecimal RGB aleatorio
 *
 * @returns string
 */
export function colorAleatorio() {
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
    title: "Capa " + (desplazamiento + 1),
    top: CAPA_BASE.top + 10 * desplazamiento,
    left: CAPA_BASE.left + 10 * desplazamiento,
  });
}

/** Funciones de capas */

// Utilitario que devuelve un array, en donde no estará presente el item indicado
export const excluirElemento = (arrPrev, item) => {
  return arrPrev.filter((it) => it.id !== item.id);
};

export const cambiarEstadoSeleccion = (capasPrev, capa) => {
  return capasPrev.map((it) =>
    Object.assign({}, it, { seleccionada: it.id === capa.id })
  );
};

/** Color de fondo de una capa seleccionada en el diseñador */
export const colorFondo = (backgroundColor, seleccionada, imprimiendo) => {
  return !seleccionada
    ? backgroundColor
    : backgroundColor !== "transparent"
    ? backgroundColor
    : imprimiendo
    ? "transparent"
    : "rgba(255,0,0,0.1)";
};
