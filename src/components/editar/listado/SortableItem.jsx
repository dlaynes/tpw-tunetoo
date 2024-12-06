import PropTypes from "prop-types";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/**
 * El componente SortableItem representa una de las capas, dentro del listado de capas de la barra lateral
 * Contiene controles para editar el título de la capa, y para borrarla del listado.
 * La librería DND nos ayuda a implementar el comportamiento de reordenar las capas
 * al arrastrarlas en el listado de capas (componente padre).
 *
 * Parámetros externos (props)
 * props.capa Es una de las capas agregadas al diseño actual
 * props.borrar Función que es llamada al momento de borrar una capa
 * props.seleccionar Función que es llamada al momento de seleccionar una capa
 * props.seleccionada Indica si la capa se encuentra seleccionada o no
 *
 * @param {*} param0
 * @returns
 */
export const SortableItem = ({ capa, borrar, seleccionar, seleccionada }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: capa.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={["sortable-item", seleccionada && "chosen"].join(" ")}
      onClick={() => {
        seleccionar(capa);
      }}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <span className="title" {...listeners}>
        {capa.title || 'Sin título'}
      </span>
      <span>
        <img
          src="/images/disenador/svg/pencil-svgrepo-com.svg"
          onClick={(e) => {
            seleccionar(capa);
            e.stopPropagation();
          }}
        />
        {!!borrar && <img
          src="/images/disenador/svg/delete-svgrepo-com.svg"
          onClick={(e) => {
            borrar(capa);
            e.stopPropagation();
          }}
        />}
      </span>
    </div>
  );
};

SortableItem.propTypes = {
  capa: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    seleccionada: PropTypes.bool,
  }),
  borrar: PropTypes.func,
  seleccionar: PropTypes.func,
  seleccionada: PropTypes.bool
};
