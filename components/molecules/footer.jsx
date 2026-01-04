import ItemFooter from "../atoms/itemFooter";
import BadgeNewFunctionality from "../atoms/BadgeNewFunctionality";
import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="font-outfit bg-[#0a0b10] w-full py-8 md:pb-0 md:px-32 lg:px-56 xl:px-80 text-tertiary-text border-detail-border-dark border-t">
      <div className="bg-bg-soft-dark mx-4 leading-8 rounded-2xl px-5 py-4 border-detail-border-dark border-[1px] my-16">
          <h3 className="text-[#C2C2C2]">Contacto</h3>
          <a href="mailto:holawilsonquispe@gmail.com" className="text-white text-xl">holawilsonquispe@gmail.com</a>
        </div>
      <ul className="grid grid-cols-2 pb-8 lg:grid-cols-3 mx-4">
        {dataFooter.map(({ id, href, target, rel, text }) => (
          <ItemFooter
            key={id}
            href={href}
            target={target}
            rel={rel}
            text={text}
          />
        ))}
      </ul>
      <ul className="flex justify-center items-center gap-3 md:gap-4 py-8">
        <Link
          href="https://www.duolingo.com/profile/wil_wilson"
          target="_blank"
          rel="noopener noreferrer"
          text="Duolingo"
        >
          <li className="w-8">
            <img src="/duolingo-LOGO.png" alt="Duolingo-logo"/>
          </li>
        </Link>
        <Link
          href="https://facebook.com/wilson.quispe.alanoca/"
          target="_blank"
          rel="noopener noreferrer"
          text="Twitter"
        >
          <li className="w-8">
            <svg fill="#fff" viewBox="0 0 32 32" id="Camada_1" version="1.1">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  class="st0"
                  d="M12.6,16.1v11.6c0,0.2,0.1,0.3,0.3,0.3h4.6c0.2,0,0.3-0.1,0.3-0.3V15.9h3.4c0.2,0,0.3-0.1,0.3-0.3l0.3-3.6 c0-0.2-0.1-0.3-0.3-0.3h-3.7V9.2c0-0.6,0.5-1.1,1.2-1.1h2.6C21.9,8.1,22,8,22,7.8V4.3C22,4.1,21.9,4,21.7,4h-4.4 c-2.6,0-4.7,1.9-4.7,4.3v3.4h-2.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3h2.3V16.1z"
                ></path>
              </g>
            </svg>
          </li>
        </Link>
        <Link
          href="https://linkedin.com/in/wilsonquispealanoca/"
          target="_blank"
          rel="noopener noreferrer"
          text="Twitter"
        >
          <li className="w-8">
            <svg
              fill="#fff"
              version="1.1"
              id="Layer_1"
              viewBox="-271 283.9 256 235.1"
              width="32px"
              height="32px"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <rect
                    x="-264.4"
                    y="359.3"
                    width="49.9"
                    height="159.7"
                  ></rect>{" "}
                  <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path>{" "}
                  <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </li>
        </Link>

        <Link
          href="https://github.com/wilsonquispealanoca"
          target="_blank"
          rel="noopener noreferrer"
          text="Twitter"
        >
          <li className="w-8">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              id="Layer_2"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs></defs>
                <path
                  class="cls-1"
                  d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                ></path>
              </g>
            </svg>
          </li>
        </Link>
      <Link
          href="https://app.getslowly.com/p/collection/xnwgR18qnk"
          target="_blank"
          rel="noopener noreferrer"
          text="Slowly"
        >
          <li className="w-8 relative">
            <img src="https://slowly.app/wp-content/themes/slowly/assets/img/logo.svg" alt="Slowly" style={{
        filter: 'brightness(0) invert(1)',
        WebkitFilter: 'brightness(0) invert(1)'
      }}/>
          </li>
        </Link>
        <Link
          href="https://twitter.com/soywill_quispe"
          target="_blank"
          rel="noopener noreferrer"
          text="X"
        >
          <li className="w-6 relative">
            <img src="/logo-x.png" alt="x-logo"/>
          </li>
        </Link>
      </ul>
    </footer>
  );
}
