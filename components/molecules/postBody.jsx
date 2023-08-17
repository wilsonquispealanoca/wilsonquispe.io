import markdownStyles from "./markdown-styles.module.css";
export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-5 md:mx-32 lg:mx-56 xl:mx-80">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
