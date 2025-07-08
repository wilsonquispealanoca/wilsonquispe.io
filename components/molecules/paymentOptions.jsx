import { useEffect, useState} from "react";
import WhatsappButton from "./whatsappButton";

export default function PaymentOptions({ open, onClose }) {

	const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "binance://pay/link?code=1034993751";
    } else {
      alert("Este método solo funciona desde un celular con la app de Binance instalada.");
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-[#2c0e6c] p-6 rounded-xl max-w-sm w-full relative shadow-lg text-center text-white">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute text-lg top-4 right-4 text-gray-200 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Contenido */}
        <h2 className="text-lg font-bold mb-2">Paga con QR o Binance</h2>
        <img
          src="/qr-wilson.jpeg"
          alt="QR de pago"
          className="w-40 h-40 mx-auto mb-4"
        />
        <p className="text-sm text-gray-400 mb-4">
          Después de pagar, por favor envíanos tu comprobante vía WhatsApp para confirmar tu compra.
        </p>
        <button onClick={handleClick} className="flex bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold transition justify-center gap-2 block">
        	<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"><g clip-path="url(#clip0_519_3383)"><path d="M17.124 13.92L19.842 16.636L12.489 23.989L5.136 16.637L7.853 13.92L12.489 18.58L17.124 13.92ZM21.761 9.28396L24.5 12L21.785 14.716L19.068 12L21.761 9.28396ZM12.489 9.28396L15.205 11.976L12.488 14.693L9.772 12L12.489 9.28396ZM3.216 9.28396L5.91 12L3.218 14.692L0.5 12L3.216 9.28396ZM12.49 0.0119629L19.84 7.33996L17.123 10.055L12.49 5.41996L7.854 10.08L5.137 7.36396L12.49 0.0119629Z" fill="#0F141A"></path></g><defs><clipPath id="clip0_519_3383"><rect width="24" height="24" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
        	<span>
          		Pagar con Binance
        	</span>
        </button>
        <WhatsappButton />
        <a
          href="/qr-wilson.jpeg"
          download
          className="border border-text-gray-300 rounded-lg block py-2 mt-2 text-sm text-gray-300 hover:underline"
        >
          Descargar QR
        </a>
      </div>
    </div>
  );
}
