import { useEffect, useState } from "react";

export default function BookIntroPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("seenBookPopup");
    if (!hasSeenPopup) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("seenBookPopup", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full text-center shadow-2xl">
        <h2 className="text-xl font-bold mb-4">¡Descubre mi nuevo libro!</h2>
        <img src="/landing-1.png" alt="Libro" className="w-32 mx-auto mb-4" />
        <p className="text-gray-700 mb-4">Una guía transformadora que no te puedes perder.</p>
        <button onClick={handleClose} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Ver luego
        </button>
      </div>
    </div>
  );
}
