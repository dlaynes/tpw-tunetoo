import { v4 as uuidv4 } from "uuid";

import { CAPA_BASE, ID_POLO_NUEVO, POLO_BASE, POLOS_CLAVE_STORAGE, TIPO_CAPA } from "./constantes";
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
 * @param {Object} capa
 * @param {number} desplazamiento Representa la posición actual
 * @returns {Object}
 */
export function crearCapa(capa, desplazamiento) {
  const obj = Object.assign({}, CAPA_BASE, {
    ...capa,
    title: "Capa " + (desplazamiento + 1),
    top: CAPA_BASE.top + 10 * desplazamiento,
    left: CAPA_BASE.left + 10 * desplazamiento,
  });
  if (!obj.id) {
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
export function crearPolo(polo = {}) {
  const obj = Object.assign({}, POLO_BASE, {
    ...polo,
  });
  if (!obj.id) {
    // Cuando creamos un nuevo polo, le asignamos un ID "aleatorio".
    obj.id = uuidv4();
  }
  return obj;
}

/**
 * Utilitario que devuelve un array, en donde no estará presente el item indicado, filtrando por id
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
// Se usa una de las definiciones de objetos de Typescript: Array<Record<string, any>> para ser más riguroso con la definición de la función.
// En un proyecto Javascript no es necesario, y basta con "Array" para definir el tipo del parámetro en la documentación de la función.
// En un proyecto Typescript, normalmente se utilizaría el tipo (o clase) del objeto, en vez de Record<string, any>

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
 * Leemos los polos guardados en localStorage. Si no hay datos, generamos el polo por defecto.
 *
 * @returns {Array}
 */
export const damePolosIniciales = () => {
  const polos = readData(POLOS_CLAVE_STORAGE, []);
  // Por el momento no se maneja el caso de que alguien haya borrado el polo por defecto
  // de su listado de polos.
  if (!polos.length) {
    return [poloDeEjemplo()];
  }
  return polos;
};

/**
 * Información que es usada para crear un polo por defecto, o limpiar los datos ya existentes del polo base.
 *
 * @returns {Object}
 */
export const poloDeEjemplo = () => {
  const capas = [
    crearCapa(
      {
        tipo: TIPO_CAPA.imagen,
        url: "/images/disenador/gallery/iconpacks/christmas-wreath-13032.png",
      },
      0
    ),
  ];
  return crearPolo({ id: ID_POLO_NUEVO, capas: capas });
};

/**
 * Esta función se usa para copiar un polo, si se trata de un polo sin guardar,
 * Y agregarlo a la lista de polos. Se requiere que la id del polo haya cambiado.
 * El polo por defecto es limpiado o "reiniciado".
 *
 * @param {Array} polos
 * @param {Object} poloNuevo
 * @returns
 */
export const copiarYRenovarPoloInicial = (polos, poloNuevo) => {
  if(poloNuevo?.id === ID_POLO_NUEVO){
    console.error("Es necesario cambiar la ID del polo a guardar", poloNuevo);
    return polos;
  }
  const poloPorDefecto = poloDeEjemplo();
  polos.push(poloNuevo);
  return [...excluirElemento(polos, poloPorDefecto), poloPorDefecto];
};
