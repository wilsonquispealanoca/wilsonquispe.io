import Image from "next/image";

function Avatar({ name, picture }) {
  return (
    <figure className="w-[40px] sm:w-[46px]">
      <Image
        alt={name}
        src={picture}
        height={176}
        width={176}
        sizes="50vw"
        priority
        className="rounded-full"
      />
    </figure>
  );
}

export default Avatar;
