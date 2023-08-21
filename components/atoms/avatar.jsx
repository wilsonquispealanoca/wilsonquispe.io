import Image from "next/image";

function Avatar({ name, picture }) {
  return (
    <figure className="bg-gradient-to-b from-[#ff31dc] to-[#1ed7de] rounded-full">
      <Image
        alt={name}
        src={picture}
        height={40}
        width={40}
        sizes="50vw"
        priority
        className="p-[2.5px] bg-transparent rounded-full"
      />
    </figure>
  );
}

export default Avatar;
