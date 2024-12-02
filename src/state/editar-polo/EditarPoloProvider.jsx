import { useState } from "react";
import PropTypes from "prop-types";

import { EditarPoloContext } from "./EditarPoloContext";

import { crearCapa, excluirElemento } from "../utils/funciones";
import { LIMITE_CAPAS, TIPO_CAPA } from "../utils/constantes";

/**
 * Implementación de las variables globales concernientes a la edición de un polo
 *
 * Revisar los comentarios en state/polos/PolosProvider.jsx
 */

export const EditarPoloProvider = ({ children }) => {
  // Polo sobre el cual se van a modificar las capas
  const [polo, cambiarPolo] = useState(null);

  // Booleano usado para esconder los controles de la página mientras se genera la imagen exportada.
  const [imprimiendo, cambiarImprimiendo] = useState(false);

  // Capas del diseño del polo actual. Incluímos una capa de imagen de ejemplo.
  const [capas, cambiarCapas] = useState([
    crearCapa({
      tipo: TIPO_CAPA.imagen,
      url: '/images/disenador/gallery/iconpacks/christmas-wreath-13032.png'
    }, 0)
  ]);

  // Capa seleccionada
  const [capaActual, seleccionarCapa] = useState(null);

  const agregarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      if(capasPrev.length >= LIMITE_CAPAS){
        alert("Se han alcanzado el límite de capas");
        return capasPrev;
      }
      return [...capasPrev, capa]
    });
    seleccionarCapa(capa);
  };

  const actualizarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      const capaAnterior = capasPrev.find((it) => it.id === capa.id);
      const nuevaCapa = Object.assign({}, capaAnterior, capa);
      return [...excluirElemento(capasPrev, capa), nuevaCapa];
    });
  };

  const borrarCapa = (capa) => {
    cambiarCapas((capasPrev) => [...excluirElemento(capasPrev, capa)]);
    seleccionarCapa(capas[0] || null);
  };

  return (
    <EditarPoloContext.Provider
      value={{
        polo,
        imprimiendo,
        capas,
        capaActual,
        cambiarPolo,
        seleccionarCapa,
        cambiarCapas,
        agregarCapa,
        actualizarCapa,
        borrarCapa,
        cambiarImprimiendo
      }}
    >
      {children}
    </EditarPoloContext.Provider>
  );
};

EditarPoloProvider.propTypes = {
  children: PropTypes.node,
};
