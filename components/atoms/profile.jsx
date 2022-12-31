import Image from 'next/image';

function Profile({name, picture, hidden}) {
  return (
    <figure className={`w-[80px] md:w-[146px] lg:w-[186px] relative mb-8 sm:mb-8`}>
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