import ItemFooter from "../atoms/itemFooter";
import Link from "next/link";


function NavMobile({ open, onClose,setopen }) {
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
      {/* Menú móvil */}
      <nav 
        className={`fixed top-0 rigth-0 w-full bg-[#242424] overflow-hidden transition-[clip-path,height] duration-700 ease-in-out
    ${open ? 'clip-circle-open h-screen z-120' : 'clip-circle-closed h-16 z-120'}
  `}
      >
        <div className="p-4 mt-20">
          {/* Contenido del navbar */}
          <ul className="space-y-8">
            {dataFooter.map(({ id, href, target, rel, text }) => (
              <li key={id} className="text-white flex font-medium cursor-pointer ml-4 w-full">
                <Link href={href} passHref target={target} rel={rel} className="w-full" onClick={() => setopen(false)}>
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
