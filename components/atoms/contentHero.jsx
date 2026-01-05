import { useTranslation } from "next-i18next";

function ContentHero() {
  const { t } = useTranslation();

  return (
    <div className="my-8 lg:mb-14">
      <h1 className="title">
        {t("hello")}
      </h1>
      <p className="font-outfitlight lg:w-[450px] text-center text-lg leading-snug break-words mt-4 lg:pr-12 text-quaternary-color-text">
        {t("description")}
      </p>
    </div>
  );
}

export default ContentHero;