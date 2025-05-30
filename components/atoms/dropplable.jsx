import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props) {
  const { children, id, className } = props;

  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    border: isOver ? "3px dashed #1CB0F6" : "3px dashed #303044",
    borderRadius: "2rem",
  };

  return (
    <button ref={setNodeRef} className={className} style={style}>
      {children}
    </button>
  );
}
