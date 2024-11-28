import PropTypes from "prop-types";

import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

/**
 * El componente SortableItem representa una de las capas, dentro del listado de capas de la barra lateral
 * Contiene controles para editar el título de la capa, y para borrarla del listado.
 * La librería DND nos ayuda a implementar el comportamiento de reordenar las capas
 * al arrastrarlas en el listado de capas (componente padre).
 *
 * Parámetros externos (props)
 * props.capa Es una de las capas agregadas al diseño actual
 *
 * @param {*} param0
 * @returns
 */
export const SortableItem = ({capa}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: capa.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="sortable-item" ref={setNodeRef} style={style} {...attributes}>
      <span className="title" {...listeners}>{capa.title}</span>
      <span>
        <img src="/images/disenador/svg/delete-svgrepo-com.svg" />
        <img src="/images/disenador/svg/pencil-svgrepo-com.svg" />
      </span>
    </div>
  );
};

SortableItem.propTypes = {
  capa: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string
  })
};
