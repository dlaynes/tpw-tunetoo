import { useContext } from "react";
import { EditarPoloContext } from "../../state/editar-polo/EditarPoloContext";

/**
 * El componente CapaActual representa el panel desde el cual tenemos acceso a la capa seleccionada por el usuario
 * Nos permite cambiar el título, color de fondo y otras características.
 *
 * @returns
 */

export const CapaActual = () => {

  const { capaActual } = useContext(EditarPoloContext);

  return (
    <div className="capa-actual">
      <h3>Capa Actual</h3>
      <dl>
        <dt>Título</dt>
        <dd>{capaActual?.titulo || "Sin título"}</dd>

        <dt>Texto</dt>
        <dd></dd>

        <dt>Imagen</dt>
        <dd></dd>

        <dt>Color de texto</dt>
        <dd></dd>

        <dt>Color de fondo</dt>
        <dd></dd>
      </dl>
    </div>
  );
};
