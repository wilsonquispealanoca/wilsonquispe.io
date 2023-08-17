import { useTranslation } from "next-i18next";

function ContentHero() {
  const { t } = useTranslation();

  return (
    <div className="text-brand-beige mb-8 lg:mb-14">
      <h1 className=" text-5xl lg:text-6xl pb-6">{t("hello")}</h1>
      <p className="text-lg leading-snug mt-4 lg:pr-12">{t("description")}</p>
    </div>
  );
}

export default ContentHero;
