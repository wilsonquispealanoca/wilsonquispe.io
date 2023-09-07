import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable(props) {
  const { id, image } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <img
      className="h-32 w-32 cursor-grab flex justify-center items-center bg-gradient-to-br from-[#D8B4FE] to-[#818CF8] bg-blue-100 text-brand-coal rounded-xl z-20"
      src={image}
      alt="Animal"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
}
