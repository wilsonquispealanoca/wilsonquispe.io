import Image from 'next/image';

function Profile({name, picture}) {
  return (
    <figure className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0">
      <Image 
        alt={name}
        src={picture}
        height={176}
        width={176}
        placeholder="blur"
        blurDataURL={picture}
        sizes="50vw"
        priority
        className="rounded-full filter grayscale"
      />
    </figure>
  );
}

export default Profile;