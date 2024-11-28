import { useState } from "react";
import PropTypes from "prop-types";

import { EditarPoloContext } from "./EditarPoloContext";

import { crearCapa, excluirCapa } from "./utils";
import { TIPO_CAPA } from "./constantes";

/**
 * Implementación de las variables globales concernientes a la edición de un polo
 *
 * Revisar los comentarios en PolosProvider.jsx
 */

export const EditarPoloProvider = ({ children }) => {
  // Polo sobre el cual se van a modificar las capas
  const [polo, cambiarPolo] = useState(null);
  // Capas del diseño del polo actual
  const [capas, cambiarCapas] = useState([
    crearCapa({
      tipo: TIPO_CAPA.texto,
      texto: 'Nueva capa',
      seleccionada: true
    }, 0)
  ]);
  // Capa seleccionada
  const [capaActual, seleccionarCapa] = useState(capas?.find((it) => it?.seleccionada === true));

  const agregarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      return [...capasPrev, capa]
    });
    seleccionarCapa(capa);
  };

  const actualizarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      const capaAnterior = capasPrev.find((it) => it.id === capa.id);
      const nuevaCapa = Object.assign({}, capaAnterior, capa);
      return [...excluirCapa(capasPrev, capa), nuevaCapa];
    });
    seleccionarCapa(capa);
  };

  const borrarCapa = (capa) => {
    cambiarCapas((capasPrev) => [...excluirCapa(capasPrev, capa)]);
    seleccionarCapa(capas[0] || null);
  };

  return (
    <EditarPoloContext.Provider
      value={{
        polo,
        capas,
        capaActual,
        cambiarPolo,
        seleccionarCapa,
        cambiarCapas,
        agregarCapa,
        actualizarCapa,
        borrarCapa,
      }}
    >
      {children}
    </EditarPoloContext.Provider>
  );
};

EditarPoloProvider.propTypes = {
  children: PropTypes.node,
};
