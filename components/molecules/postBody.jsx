import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content, isDark = true, isNotes = false }) {
  // Combinamos las clases del CSS Module para el modo oscuro
  const claseCombinada = isDark 
    ? `${markdownStyles["markdown"]} ${markdownStyles["markdownDark"]}` 
    : markdownStyles["markdown"];

  return (
    /* Si isNotes es true aplica mx-0, de lo contrario mantiene tus márgenes por defecto */
    <div className={isNotes ? "mx-0" : "mx-5 md:mx-32"}>
      <div
        className={claseCombinada}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}