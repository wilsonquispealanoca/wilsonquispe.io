import Link from "next/link";

function ItemFooter({ href, target, rel, text}) {
  return (
    <li className="h-12 text-brand-beige underline flex items-center justify-between md:hover:underline cursor-pointer px-8">
      <Link href={href} passHref target={target} rel={rel} className="w-full">
        {text}
      </Link>
    </li>
  );
}

export default ItemFooter;
