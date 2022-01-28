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
    href: "/sobre-mi",
    text: "Sobre mí",
    icon: false,
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
    href: "/pasatiempos",
    text: "Pasatiempos",
    icon: true,
  },
  {
    id: 7,
    href: "/historias",
    text: "Mis Historias",
    icon: true,
  },
  {
    id: 8,
    href: "/tweets",
    text: "Tweets",
    icon: false,
  },
]

export default function Footer() {
  return (
    <footer className="bg-background">
      <ul>
        {
          dataFooter.map(({id, href, target, rel, text, icon}) => 
            <ItemFooter
              id={id} 
              href={href}
              target={target}
              rel={rel}
              children={text}
              icon={icon}
            />
          )
        }
      </ul>
    </footer>
  );
};