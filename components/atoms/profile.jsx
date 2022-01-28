import Image from 'next/image';

function Profile({alt, src}) {
  return (
    <figure className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0">
      <Image 
        alt={alt}
        height={176}
        width={176}
        src={src}
        placeholder="blur"
        blurDataURL={src}
        sizes="50vw"
        priority
        className="rounded-full filter grayscale"
      />
    </figure>
  );
}

export default Profile;