import ItemFooter from "../atoms/itemFooter";

const dataFooter = [
  {
    id: 0,
    href: "/",
    text: "Inicio",
    icon: false,
  },
  {
    id: 1,
    href: "/blog",
    text: "Blog",
    icon: false,
  },
  {
    id: 2,
    href: "/",
    text: "Sobre mí",
    icon: true,
  },
  {
    id: 3,
    href: "https://github.com/wilsonquispealanoca",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "Github",
    icon: false,
  },
  {
    id: 4,
    href: "https://twitter.com/soywill_quispe",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "Twitter",
    icon: false,
  },
  {
    id: 5,
    href: "https://www.linkedin.com/in/wilsonquispealanoca/",
    target: "_blank",
    rel: "noopener noreferrer",
    text: "LinkedIn",
    icon: false,
  },
  {
    id: 6,
    href: "/",
    text: "Pasatiempos",
    icon: true,
  },
  {
    id: 7,
    href: "/",
    text: "Mis Historias",
    icon: true,
  },
  {
    id: 8,
    href: "/",
    text: "Tweets",
    icon: true,
  },
]

export default function Footer() {
  return (
    <footer className="font-sans bg-card dark:bg-background-dark w-full py-16 md:pb-0 md:px-32 lg:px-56 xl:px-80 ">
      <ul className="lg:grid lg:grid-cols-3 lg:pb-24">
        {
          dataFooter.map(({id, href, target, rel, text, icon}) => 
            <ItemFooter
              key={id} 
              href={href}
              target={target}
              rel={rel}
              text={text}
              icon={icon}
            />
          )
        }
      </ul>
    </footer>
  );
};