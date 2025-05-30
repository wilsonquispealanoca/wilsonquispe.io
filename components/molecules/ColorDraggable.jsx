// DraggableBox.js
import React from "react";

const ColorDraggable = ({ color, onDragStart }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("color", color);
    onDragStart();
  };

  const boxStyle = {
    backgroundColor: color,
    width: "100px",
    height: "100px",
    cursor: "grab",
    position: "relative",
    borderRadius: "8px",
  };

  return (
    <div
      className="draggable-box"
      draggable
      onDragStart={handleDragStart}
      style={boxStyle}
    ></div>
  );
};

export default ColorDraggable;
