import Image from "next/image";
import Link from "next/link";

function Logo({ color }) {
  return (
    <Link href="/" className="w-28 hidden lg:block">
      <Image
        alt="logo"
        layout="responsive"
        height="60"
        width="160"
        quality={100}
        src={`/logo/wilsonquispeLogo${color}.png`}
      />
    </Link>
  );
}

export default Logo;
