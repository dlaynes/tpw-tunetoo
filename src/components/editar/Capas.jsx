import { useContext } from "react";
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
  const { capas, actualizarCapa } = useContext(EditarPoloContext);

  return (
    <div className="capas-container">
      <div className="capas-inner">
        <div className="capas-limits" id="capas-limits">
          {capas.map((capa, i) => (
            <Capa
              key={"principal-capa-" + capa.id}
              actualizarCapa={actualizarCapa}
              capa={capa}
              pos={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
