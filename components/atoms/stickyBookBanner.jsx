import { useEffect, useState } from "react";
import PaymentOptions from "../molecules/paymentOptions";

export default function StickyBookBanner() {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.body.scrollHeight;
      if (scrollPos > docHeight / 2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
  	<>
	    <div className="fixed bottom-0 bg-bg-soft-dark py-4 px-6 z-40 flex items-center gap-4 w-full rounded-t-3xl">
	      <img src="/landing-1.png" alt="Libro" className="w-16 h-16 object-cover" />
	      <div className="flex-1">
	        <p className="font-bold text-white">Aymara para no lingüistas</p>
	        <div className="flex text-sm gap-2">
	        	<s className="price-compare">Bs 90</s>
	        	<p className="text-sm text-white">Bs. 50</p>
	        </div>
	        <div className="mt-2 flex gap-2 content-center">
	          <a href="/Aymara -para-no-linguistas-MUESTRA.pdf" download className="text-xs text-center hover:underline rounded-3xl p-2 text-purple-hover">Descargar muestra</a>
	          <button
	          		onClick={() => setOpenModal(true)} 
	          		className="text-xs text-white font-semibold bg-btn-color uppercase px-4 py-2 rounded-3xl hover:underline">Comprar</button>
	        </div>
	      </div>
	    </div>
	    <PaymentOptions open={openModal} onClose={() => setOpenModal(false)}/>
    </>
  );
}
