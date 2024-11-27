import { useContext } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { EditarPoloContext } from "../../../state/editar-polo/EditarPoloContext";
import { SortableItem } from './SortableItem';

export const Listado = () => {
  const { capas, cambiarCapas } = useContext(EditarPoloContext);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const {active, over} = event;

    if (active.id !== over.id) {
      cambiarCapas((items) => {
        const oldIndex = items.findIndex(it => it.id === active.id);
        const newIndex = items.findIndex(it => it.id === over.id);

        const newCapas = arrayMove(items, oldIndex, newIndex);
        return newCapas;
      });
    }
  }

  return (

      <div className='capas-ordenables'>
        <h3>Listado de capas</h3>
        <div className="sortable-container">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={capas}
              strategy={verticalListSortingStrategy}
            >
              {capas.map( it => <SortableItem key={"draggable-key-"+it.id} id={it.id} capa={it} />)}
            </SortableContext>
          </DndContext>
        </div>
      </div>
  );
};
