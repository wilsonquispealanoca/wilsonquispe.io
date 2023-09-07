import React, { useState } from "react";
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
import { OrderNumbers } from "./orderNumbers";
import { useEffect } from "react";

const style = {
  padding: "1rem",
  width: "100%",
};

export default function DragOrderNumbers({ initialState, onItemsReordered }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const correctOrderIds = initialState.answer;

  // Estado local para mantener el orden actual
  const [items, setItems] = useState(initialState.numbers);

  useEffect(() => {
    // Esto se ejecutará cada vez que `initialState.numbers` cambie
    // Actualiza el estado local de `items` para reflejar los cambios
    setItems(initialState.numbers);
  }, [initialState.numbers]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((v) => v.id === active.id);
      const newIndex = items.findIndex((v) => v.id === over.id);

      // Actualizamos el estado local de items al mover los elementos
      const newItems = arrayMove([...items], oldIndex, newIndex);
      setItems(newItems);
      onItemsReordered(newItems);
    }
  };

  return (
    <>
      <h2 className="text-xl font-outfitsemibold text-white text-center mt-4">
        {initialState.title}
      </h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items} // Usamos el estado local items
          strategy={verticalListSortingStrategy}
        >
          <ul style={style}>
            {items.map((item) => (
              <OrderNumbers key={item.id} item={item} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </>
  );
}
