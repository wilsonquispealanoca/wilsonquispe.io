import Image from "next/image";

function Avatar({name, picture}) {
  return (
    <figure className="w-[24px] sm:w-[46px] relative mb-4 sm:mb-0">
      <Image 
        alt={name}
        src={picture}
        height={176}
        width={176}
        placeholder="blur"
        blurDataURL={picture}
        sizes="50vw"
        priority
        className="rounded-full"
      />
    </figure>
  );
}

export default Avatar;