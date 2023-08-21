import ItemFooter from "../atoms/itemFooter";

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
    href: "/",
    text: "Sobre mí",
  },
  {
    id: 3,
    href: "https://github.com/wilsonquispealanoca",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "Github",
  },
  {
    id: 4,
    href: "https://twitter.com/soywill_quispe",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "Twitter",
  },
  {
    id: 5,
    href: "https://www.linkedin.com/in/wilsonquispealanoca/",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "LinkedIn",
  },
  {
    id: 6,
    href: "/",
    text: "Pasatiempos",
  },
  {
    id: 7,
    href: "/historias",
    text: "Mis Historias",
  },
  {
    id: 8,
    href: "/",
    text: "Tweets",
  },
];

export default function Footer() {
  return (
    <footer className="font-outfit bg-[#181824] w-full py-16 md:pb-0 md:px-32 lg:px-56 xl:px-80">
      <ul className="grid grid-cols-2 py-16 lg:grid-cols-3 mx-4">
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
    </footer>
  );
}
