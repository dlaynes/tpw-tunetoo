import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { EditarPoloContext } from "./EditarPoloContext";

import { excluirElemento } from "../utils/funciones";
import { LIMITE_CAPAS } from "../utils/constantes";
import { PolosContext } from "../polos/PolosContext";

/**
 * Implementación de las variables globales concernientes a la edición de un polo
 *
 * Revisar los comentarios en state/polos/PolosProvider.jsx
 */

export const EditarPoloProvider = ({ children }) => {
  // Polo sobre el cual se van a modificar las capas
  const { poloSeleccionado } = useContext(PolosContext);

  // Booleano usado para esconder los controles de la página mientras se genera la imagen exportada.
  const [imprimiendo, cambiarImprimiendo] = useState(false);

  // Capas del diseño del polo actual.
  const [capas, cambiarCapas] = useState([]);

  // Capa seleccionada
  const [capaActual, seleccionarCapa] = useState(null);

  // Detección del polo Actual. Cuando cambie el polo seleccionado, asignamos sus capas.
  useEffect(() => {
    if(poloSeleccionado?.capas){
      cambiarCapas(poloSeleccionado.capas);
    }
  }, [poloSeleccionado]);

  const agregarCapa = (capa) => {
    cambiarCapas((capasPrev) => {
      if(capasPrev.length >= LIMITE_CAPAS){
        // TO DO: Quitar la alerta del contexto, para poder usar la librería react-toastify.
        alert("Se han alcanzado el límite de capas", 'Hubo un problema', 5000);
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
        imprimiendo,
        capas,
        capaActual,
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
