import { useContext } from "react";
import { EditarPoloContext } from "../../state/editar-polo/EditarPoloContext";

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

        <dt>Texto</dt>
        <dd>{capa?.texto || ""}</dd>

        <dt>Imagen</dt>
        <dd>TODO</dd>

        <dt>Color de texto</dt>
        <dd>{capa?.color || '--'}</dd>

        <dt>Color de fondo</dt>
        <dd>{capa?.backgroundColor || '--'}</dd>
      </dl>
    </div>
  );
};
