import { useTranslation } from "next-i18next";

function ContentHero() {
  const { t } = useTranslation();

  return (
    <div className="my-12 md:mt-24">
      <h1 className="title mt-32 mb-20">
        {t("hello")}
      </h1>
      <p className="font-outfitlight text-center text-lg leading-snug break-words mt-4 lg:pr-12 text-quaternary-color-text">
        {t("description")}
      </p>
    </div>
  );
}

export default ContentHero;