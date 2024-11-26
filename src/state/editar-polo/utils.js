import { CAPA_BASE } from "./constantes";

export function colorAleatorio(){
  const banco = "ABCDEF0123456789";
  let aleatoria = "#";
  for (let i = 0; i < 6; i++) {
      aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
  }
  return aleatoria;
}

export function crearCapa(capa, desplazamiento) {
  return Object.assign({}, CAPA_BASE, {
    ...capa,
    top: CAPA_BASE.top + 10 * desplazamiento,
    left: CAPA_BASE.left + 10 * desplazamiento,
  });
};
