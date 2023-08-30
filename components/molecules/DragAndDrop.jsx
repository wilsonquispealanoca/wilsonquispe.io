import { useState, useEffect } from "react";
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Droppable } from "../atoms/dropplable";
import { Draggable } from "../atoms/draggable";

export default function DragAndDrop({
  initialState,
  handleAnswerSubmit,
  setIsCorrect,
  resetDraggable,
  parent,
}) {
  const sensors = useSensors(
    useSensor(KeyboardSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor)
  );

  const [isDragged, setIsDragged] = useState(false);

  const draggableMarkup = (
    <Draggable
      id="draggable-image"
      image={initialState.image}
      onDragStart={() => setIsDragged(true)}
      onDragEnd={() => setIsDragged(false)}
    ></Draggable>
  );

  function handleDragEnd(event) {
    const { over } = event;
    const overId = over ? over.id : null;

    const correctOption = initialState.options.find(
      (option) => option.id === initialState.correctAnswerDrag.toString()
    );

    const isAnswerCorrect = overId === correctOption.id;
    setIsCorrect(isAnswerCorrect);

    handleAnswerSubmit(isAnswerCorrect);
  }
  return (
    <div className="w-full">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        {parent === null || (resetDraggable && isDragged) ? (
          <div>{draggableMarkup}</div>
        ) : null}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-32 lg:h-48 mt-4">
          {initialState.options.map((option) => (
            <Droppable
              key={option.id}
              id={option.id}
              className="text-white w-full flex justify-center items-center h-32 lg:h-48 flex-wrap"
            >
              {parent === option.id ? draggableMarkup : option.text}
            </Droppable>
          ))}
        </div>
      </DndContext>
    </div>
  );

  function handleDragOver(ev) {
    const { over } = ev;
    if (!over) return;

    const overId = over.id;

    const isCorrectAnswer =
      overId === initialState.options[initialState.correctAnswerDrag].id;
    setIsCorrect(isCorrectAnswer);
  }
}
