import Image from "next/image";

function Logo() {
  return (
    <figure className="w-16">
      <Image 
        alt="logo"
        layout="responsive"
        height="40"
        width="100"
        quality={100}
        src="/logo/wilsonquispeLogoBlack.png"
      />
    </figure>
  );
}

export default Logo;