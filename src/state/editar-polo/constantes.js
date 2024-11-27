/** Tipos de capa posibles */
export const TIPO_CAPA = {
  texto: 1,
  imagen: 2,
  galeria: 3
};

export const CAPA_BASE = {
  tipo: TIPO_CAPA.texto,
  seleccionada: false,
  zIndex: 1,
  top: 50,
  left: 50,
  width: 100,
  height: 100,
  texto: "",
  url: "",
  color: "",
  rotationDeg: 0
};

export const GALERIA = [
  {nombre: "General", carpeta: "general", fotos: []}
];
