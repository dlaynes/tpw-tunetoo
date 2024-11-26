import { useState } from "react";
import PropTypes from "prop-types";

import { EditarPoloContext } from "./EditarPoloContext";

import { crearCapa } from "./utils";
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

  const agregarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      return [...capasPrev, capa]
    });
  };

  const excluirCapa = (capasPrev, capa) => {
    return capasPrev.filter((it) => it.id !== capa.id);
  };

  const actualizarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      const capaAnterior = capasPrev.find((it) => it.id === capa.id);
      const nuevaCapa = Object.assign({}, capaAnterior, capa);
      return [...excluirCapa(capasPrev, capa), nuevaCapa];
    });
  };

  const borrarCapa = (capa) => {
    cambiarCapas((capasPrev) => [...excluirCapa(capasPrev, capa)]);
  };

  /**
   * Seleccionamos una de las capas de nuestro listado, mediante su id,
   * esto se realiza habilitando la propiedad "seleccionada"
   *
   * @param {*} capa
   */
  const seleccionarCapa = (capa) => {
    cambiarCapas((capasPrev) =>
      capasPrev.map((it) =>
        Object.assign({}, it, { seleccionada: it.id === capa.id })
      )
    );
  };

  // Esta variable facilita el acceso a la capa seleccionada
  const capaActual = capas?.find((it) => it?.seleccionada === true);

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
