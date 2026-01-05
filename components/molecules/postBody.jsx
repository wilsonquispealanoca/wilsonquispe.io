import markdownStyles from "./markdown-styles.module.css";
export default function PostBody({ content }) {
  return (
    <div className="mx-5 md:mx-32">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
