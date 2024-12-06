import { v4 as uuidv4 } from "uuid";

import { CAPA_BASE, ID_POLO_NUEVO, POLO_BASE, TIPO_CAPA } from "./constantes";
import { readData } from "./encripcion";

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

// Funciones de capas

/**
 * Función que inicializa una capa nueva, usando los datos provistos
 *
 * @param {Record<string, any>} capa
 * @param {number} desplazamiento Representa la posición actual
 * @returns {Record<string, any>}
 */
export function crearCapa(capa, desplazamiento) {
  const obj = Object.assign({}, CAPA_BASE, {
    ...capa,
    title: "Capa " + (desplazamiento + 1),
    top: CAPA_BASE.top + 10 * desplazamiento,
    left: CAPA_BASE.left + 10 * desplazamiento,
  });
  if(!obj.id){
    // Cuando creamos una nueva capa de polo, le asignamos un ID "aleatorio".
    obj.id = uuidv4();
  }
  return obj;
}

/**
 * Función que inicializa un nuevo polo, usando los datos provistos si existen.
 *
 * @param {*} polo
 * @returns
 */
export function crearPolo(polo={}) {
  const obj = Object.assign({}, POLO_BASE, {
    ...polo,
  });
  if(!obj.id){
    // Cuando creamos un nuevo polo, le asignamos un ID "aleatorio".
    obj.id = uuidv4();
  }
  return obj;
}

/**
 * Utilitario que devuelve un array, en donde no estará presente el item indicado
 *
 * @param {Array<Record<string, any>>} arrPrev
 * @param {Record<string, any>} item
 *
 * @returns {Array<Record<string, any>>}
 */
export const excluirElemento = (arrPrev, item) => {
  return arrPrev.filter((it) => it.id !== item.id);
};
// Notas:
// Se usa una de las definiciones de objetos de Typescript: Record<string, any> para ser más riguroso con la definición de la función.
// En un proyecto Javascript no es necesario, y basta con "Array" para definir el tipo del parámetro en la documentación de la función.
// En un proyecto Typescript, normalmente se utilizaría el tipo (o clase) del objeto, en vez de Record<string, any>

/**
 * Utilitario que activa el valor de la propiedad seleccionada en un elemento ubicado en el array
 * de capas, y desactiva el valor en el resto.
 *
 * @param {Array<Record<string, any>>} arrPrev
 * @param {Record<string, any>} item
 *
 * @returns {Array<Record<string, any>>}
 */
export const cambiarEstadoSeleccion = (capasPrev, capa) => {
  return capasPrev.map((it) =>
    Object.assign({}, it, { seleccionada: it.id === capa.id })
  );
};

/**
 * Color de fondo de una capa seleccionada (o no seleccionada) en el diseñador
 *
 * @param {string} backgroundColor
 * @param {boolean} seleccionada
 * @param {boolean} imprimiendo
 *
 * @returns {string}
 */
export const colorFondo = (backgroundColor, seleccionada, imprimiendo) => {
  return !seleccionada
    ? backgroundColor
    : backgroundColor !== "transparent"
    ? backgroundColor
    : imprimiendo
    ? "transparent"
    : "rgba(255,0,0,0.1)";
};

/**
 *
 * @returns
 */
export const damePolosIniciales = () => {
  const polos = readData('polos', []);
  if(!polos.length){

    const capas = [
      crearCapa({
        tipo: TIPO_CAPA.imagen,
        url: '/images/disenador/gallery/iconpacks/christmas-wreath-13032.png'
      }, 0)
    ];

    return [
      crearPolo({id: ID_POLO_NUEVO, capas: capas})
    ];
  }
  return polos;
};
