import { useTranslation } from "next-i18next";
import Image from "next/image";

function ContentHero() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left my-20">
      <div>
        <h1 className="font-rivetto text-5xl leading-10 lg:text-6xl lg:mt-0 mb-4 lg:mb-10 lg:text-left">
          {t("hello")}
        </h1>
        <p className="lg:max-w-xl lg:mr-8 font-outfitlight text-center lg:text-left text-lg leading-snug mt-4 lg:pr-12 text-quaternary-color-text">
          {t("description")}
        </p>
      </div>
      <Image
              src="/my-favorite-books.png"
              alt={`Cover Image for titles app`}
              width={1080}
              height={1080}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-2xl w-[16rem] lg:w-[22rem] -rotate-90 drop-shadow-2xl"
            />
    </div>
  );
}

export default ContentHero;