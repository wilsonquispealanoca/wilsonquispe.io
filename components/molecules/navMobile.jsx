import ItemFooter from "../atoms/itemFooter";
import Link from "next/link";


function NavMobile({ open, onClose }) {
  const dataFooter = [
  {
    id: 0,
    href: "/",
    text: "Inicio",
  },
  {
    id: 1,
    href: "/blog",
    text: "Blog",
  },
  {
    id: 2,
    href: "/404",
    text: "Sobre mí",
  },
  {
    id: 7,
    href: "/historias",
    text: "Mis Historias",
  },
];

  return (
    <>
      {/* Overlay de fondo */}
      <div 
        className={`fixed inset-0 bg-black z-20 transition-opacity duration-300 ${open ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Menú móvil */}
      <nav 
        className={`fixed top-0 left-0 h-screen w-full bg-[#1d0543] shadow-xl z-30 transform transition-all duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Contenido del navbar */}
          <ul className="space-y-2">
            {dataFooter.map(({ id, href, target, rel, text }) => (
              <li key={id} className="h-12 text-white flex font-medium cursor-pointer pl-4 pt-14">
                <Link href={href} passHref target={target} rel={rel} className="w-full">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavMobile;
