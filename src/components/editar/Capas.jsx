import { useContext } from "react";
import { EditarPoloContext } from "../../state/editar-polo/EditarPoloContext";
import { Capa } from "./principal/Capa";

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
