import ItemFooter from "../atoms/itemFooter";
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
    <footer className="font-outfit bg-[#1d0543] w-full md:pb-0 md:px-32 lg:px-56 xl:px-80">
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
      <ul className="flex justify-center items-center gap-4 pb-4">
        <Link
          href="https://twitter.com/soywill_quispe"
          target="_blank"
          rel="noopener noreferrer"
          text="Twitter"
        >
          <li className="w-8">
            <svg
              fill="#ffffff"
              version="1.1"
              width="32px"
              height="32px"
              viewBox="0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="7935ec95c421cee6d86eb22ecd12f847">
                  {" "}
                  <path d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z">
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
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
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
          href="https://web.slowly.app/profile/62YQNVM"
          target="_blank"
          rel="noopener noreferrer"
          text="Slowly"
        >
          <li className="w-8">
            <img src="https://slowly.app/wp-content/themes/slowly/assets/img/logo.svg" alt="Slowly" style={{
        filter: 'brightness(0) invert(1)',
        WebkitFilter: 'brightness(0) invert(1)'
      }}/>
          </li>
        </Link>
      </ul>
    </footer>
  );
}
