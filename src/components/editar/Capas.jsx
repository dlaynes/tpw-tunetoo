import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import { exportComponentAsPNG } from "react-component-export-image";

import { PolosContext } from "../../state/polos/PolosContext";
import { EditarPoloContext } from "../../state/editar-polo/EditarPoloContext";
import { Capa } from "./principal/Capa";
import { ID_POLO_NUEVO, LIMITE_POLOS } from "../../state/utils/constantes";
import { storeData } from "../../state/utils/encripcion";
import {
  copiarYRenovarPoloInicial,
  excluirElemento,
} from "../../state/utils/funciones";

/**
 * El componente Capas se encarga de mostrar el editor de diseño de un polo.
 * Carga la información de capas desde el contexto global de edición de polos,
 * y muestra cada una de las capas dentro del editor de diseño.
 *
 * @returns
 */

export const Capas = () => {
  const { capas, capaActual, actualizarCapa, imprimiendo, cambiarImprimiendo } =
    useContext(EditarPoloContext);
  const { poloSeleccionado, polos, actualizarPolo } = useContext(PolosContext);
  const ref = useRef();
  let navigate = useNavigate();

  const guardar = async () => {
    if (polos.length >= LIMITE_POLOS) {
      toast.warn(`Has llegado al límite de polos (${LIMITE_POLOS}), no es posible crear uno nuevo`);
      return;
    }
    let poloActual = {
      ...poloSeleccionado,
      capas: capas,
      ultimaActualizacion: new Date().toISOString(),
    };

    // es necesario usar un clon del array polos para guardar en el disco, porque React actualiza
    // los datos de forma asíncrona.
    if (poloActual?.id === ID_POLO_NUEVO) {
      poloActual.id = uuidv4();

      storeData("polos", copiarYRenovarPoloInicial(polos, poloActual));
      actualizarPolo(poloActual);
      await navigate("/editar/" + poloActual.id);
      toast.success("¡El polo ha sido creado!");
    } else {
      actualizarPolo(poloActual);
      storeData("polos", [...excluirElemento(polos, poloActual), poloActual]);
      toast.success("¡El polo ha sido actualizado!");
    }
  };

  const exportar = () => {
    cambiarImprimiendo(true);
    // En casos avanzados, no es recomendable usar setTimeout pues no se adecua al flujo de eventos de React
    setTimeout(
      () => exportComponentAsPNG(ref, { fileName: "tunetoo-diseno.png" }),
      300
    );
    setTimeout(() => cambiarImprimiendo(false), 600);
  };

  return (
    <div className="capas-container">
      <div
        className={"capas-inner" + (imprimiendo ? " capas-exportando" : "")}
        ref={ref}
      >
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
      <button className="action-button" type="button" onClick={exportar}>
        Exportar imagen
      </button>
      <button className="action-button" type="button" onClick={guardar}>
        Guardar diseño
      </button>
    </div>
  );
};
