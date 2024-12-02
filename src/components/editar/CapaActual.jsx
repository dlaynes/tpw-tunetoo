import { useContext } from "react";
import { EditarPoloContext } from "../../state/editar-polo/EditarPoloContext";
import { TIPO_CAPA } from "../../state/utils/constantes";

/**
 * El componente CapaActual representa el panel desde el cual tenemos acceso a la capa seleccionada por el usuario
 * Nos permite cambiar el título, color de fondo y otras características.
 *
 * @returns
 */

export const CapaActual = () => {

  const { capaActual, capas } = useContext(EditarPoloContext);
  const capa = capas.find(it => it.id === capaActual?.id);

  return (
    <div className="capa-actual">
      <h3>Capa Actual</h3>
      <dl>
        <dt>Título</dt>
        <dd>{capa?.titulo || "Sin título"}</dd>
        <dt>Imagen</dt>
        <dd>{capa?.url ? <img src={capa.url} width={30} /> : "--"}</dd>
        <dt>Color de fondo</dt>
        <dd>{capa?.backgroundColor ? <div style={{backgroundColor: capa.backgroundColor, width: 30, height: 15, border: '1px solid black'}}></div> : '--'}</dd>
        {capa?.tipo === TIPO_CAPA.texto && <>
          <dt>Texto</dt>
          <dd>{capa?.texto || "---"}</dd>
          <dt>Color de texto</dt>
          <dd>{capa?.color ? <div style={{backgroundColor: capa.color, width: 30, height: 15, border: '1px solid black'}}></div> : '--'}</dd>
          <dt>Alineación</dt>
          <dd>{capa?.textAlign || "---"}</dd>
          <dt>Fuente</dt>
          <dd>{capa?.fontFamily || "---"}</dd>
          <dt>Tamaño</dt>
          <dd>{capa?.fontSize || "---"}</dd>
        </>}
      </dl>
    </div>
  );
};
