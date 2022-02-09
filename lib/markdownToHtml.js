import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse) // マークダウンのパーサー
    .use(remarkGfm) // Autolink literals、Strikethrough、Table、Tasklist、に対応するためのremarkのプラグイン。
    .use(remarkRehype, { allowDangerousHtml: true }) // マークダウンをhtmlに変換するremarkのプラグイン
    .use(rehypePrismPlus) // PrismでHTMLのコードブロックを強調表示するrehypeプラグイン（rehypeRawの前にやらないと、.line-number、.highlight-line、line属性が削られてしまう）
    .use(rehypeRaw) // HTMLで記述されている部分(iframeなど)をパースするためのプラグイン
    .use(rehypeFormat) // htmlをきれいに整形するrehypeプラグイン
    .use(rehypeStringify) // htmlをシリアライズするunified用のコンパイラ
    .process(markdown);
  return String(result);
}