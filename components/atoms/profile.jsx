import Image from 'next/image';

function Profile({name, picture}) {
  return (
    <figure className={`w-[80px] md:w-[146px] lg:w-[250px] relative mb-8 sm:mb-8`}>
      <Image 
        alt={name}
        src={picture}
        height={150}
        width={150}
        placeholder="blur"
        blurDataURL={picture}
        sizes="50vw"
        priority
        className="rounded-full"
      />
    </figure>
  );
}

export default Profile;