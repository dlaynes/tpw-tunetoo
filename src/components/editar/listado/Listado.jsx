import { useContext } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { EditarPoloContext } from "../../../state/editar-polo/EditarPoloContext";
import { SortableItem } from "./SortableItem";

/**
 * El componente Listado, tiene como propósito mostrar la lista de capas en la barra lateral.
 * Obtiene el listado de capas desde el contexto (módulo de estado global) de edición de polos.
 * A cada capa agregada se le asignan las propiedades necesarias para su funcionamiento
 *
 * Mediante la librería DND, ordenamos los elementos de la lista de capas, con el propósito
 * de definir cual capa va en la parte superior en nuestro diseño
 *
 * @returns
 */
export const Listado = () => {
  const { capas, capaActual, cambiarCapas, seleccionarCapa, borrarCapa } =
    useContext(EditarPoloContext);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // En el listado de capas ordenables, cuando se suelte un elemento, entonces reordenamos en el contexto correspondiente
  // el array de capas del diseño
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over?.id && active.id !== over.id) {
      cambiarCapas((items) => {
        const oldIndex = items.findIndex((it) => it.id === active.id);
        const newIndex = items.findIndex((it) => it.id === over.id);

        const newCapas = arrayMove(items, oldIndex, newIndex);
        return newCapas;
      });
    }
  }

  const borrar = (capa) => {
    if (
      confirm("Desea borrar la capa " + (capa?.titulo || "seleccionada") + "?")
    ) {
      borrarCapa(capa);
    }
  };

  return (
    <div className="capas-ordenables">
      <h3>Listado de capas</h3>
      <div className="sortable-container">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={capas} strategy={verticalListSortingStrategy}>
            {capas.map((it) => (
              <SortableItem
                seleccionada={capaActual?.id === it.id}
                key={"draggable-key-" + it.id}
                id={it.id}
                capa={it}
                seleccionar={seleccionarCapa}
                borrar={capas.length > 1 ? borrar : null}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
