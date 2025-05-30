import React, { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  TouchSensor,
  MouseSensor,
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

const DragOrderNumbers = ({ initialState, setIsCorrect }) => {
  const sensors = useSensors(
    useSensor(TouchSensor),
    useSensor(MouseSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const correctOrderIds = initialState.correctAnswerUI;
  const name = initialState.numbers.map((number) => number.name);

  const [items, setItems] = useState(name);

  useEffect(() => {
    // Actualizar los elementos solo si el número de elementos cambia
    if (items.length !== name.length) {
      setItems(name);
    }
  }, [name, items]);

  return (
    <>
      <h2 className="text-xl font-outfitsemibold text-white text-center my-4">
        {initialState.title}
      </h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div>
            {items.map((item) => (
              <OrderNumbers key={item.id} id={item} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        const newItems = arrayMove(items, oldIndex, newIndex);

        const isCorrectOrder =
          JSON.stringify(newItems) === JSON.stringify(correctOrderIds);

        // Llamar a setIsCorrect con el resultado de la verificación
        setIsCorrect(isCorrectOrder);
        return newItems;
      });
    }
  }
};

export default DragOrderNumbers;
