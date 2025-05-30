import { useTranslation } from "next-i18next";

function ContentHero() {
  const { t } = useTranslation();

  return (
    <div className="mb-8 lg:mb-14">
      <h1 className="font-outfitsemibold break-words text-5xl lg:text-6xl pb-6 text-white drop-shadow-[-2px_0_0_#c21aa5]">
        {t("hello")}
      </h1>
      <p className="text-lg leading-snug break-words mt-4 lg:pr-12 text-brand-beige">
        {t("description")}
      </p>
    </div>
  );
}

export default ContentHero;
