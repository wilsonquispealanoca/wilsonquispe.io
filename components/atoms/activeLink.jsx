import { useRouter } from "next/router";

const Activelink = ({ href, children }) => {
  const router = useRouter();
  const style = {
    textDecoration: router.asPath === href && "#222A27",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className="text-white font-outfitsemibold mr-8 hidden lg:block transition-all duration-200 hover:pb-2 hover:border-b-2 hover:border-white"
      >
        {children}
      </a>
    </> 
  );
};

export default Activelink;
