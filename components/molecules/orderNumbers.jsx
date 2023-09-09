import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function OrderNumbers({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    border: "1px solid #303044",
    padding: ".8rem 1rem",
    width: "100%",
    display: "block",
    borderRadius: ".6rem",
    marginBottom: "0.8rem",
    backgroundColor: "#0f0f17",
    color: "white",
    cursor: "move",
    listStyle: "none",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      style={{ ...style }}
      {...attributes}
      {...listeners}
    >
      {id}
    </button>
  );
}
