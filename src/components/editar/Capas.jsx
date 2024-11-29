import { useContext, useRef } from "react";
import { exportComponentAsPNG } from 'react-component-export-image';


import { EditarPoloContext } from "../../state/editar-polo/EditarPoloContext";
import { Capa } from "./principal/Capa";

/**
 * El componente Capas se encarga de mostrar el editor de diseño de un polo.
 * Carga la información de capas desde el contexto global de edición de polos,
 * y muestra cada una de las capas dentro del editor de diseño.
 *
 * @returns
 */

export const Capas = () => {
  const { capas, capaActual, actualizarCapa, imprimiendo, cambiarImprimiendo } = useContext(EditarPoloContext);
  const ref = useRef();

  const exportar = () => {
    cambiarImprimiendo(true);
    // En casos avanzados, no es recomendable usar setTimeout pues no se adecua al flujo de eventos de React
    setTimeout(() => exportComponentAsPNG(ref, {fileName: "tunetoo-diseno.png"}), 300);
    setTimeout(() => cambiarImprimiendo(false), 600);
  };

  return (
    <div className="capas-container">
      <div className={"capas-inner" + (imprimiendo ? " capas-exportando" : "")} ref={ref}>
        <div className="capas-limits" id="capas-limits">
          {capas.map((capa, i) => (
            <Capa
              key={"principal-capa-" + capa.id}
              seleccionada={capaActual?.id === capa.id}
              actualizarCapa={actualizarCapa}
              capa={capa}
              pos={i}
              imprimiendo={imprimiendo}
            />
          ))}
        </div>
      </div>
      <button className="exportar" type="button" onClick={exportar}>Exportar imagen</button>
    </div>
  );
};
