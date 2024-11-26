import PropTypes from "prop-types";

import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


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
    <div className="sortable-item" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <span>{capa.title}</span>
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
