const ColorDroppable = ({ AnswerUI, handleDrop, backgroundColor }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <button
      className="w-36 h-36 text-2xl text-white mt-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #818CF8",
        borderRadius: "8px",
        backgroundColor,
      }}
    >
      {AnswerUI}
    </button>
  );
};

export default ColorDroppable;
