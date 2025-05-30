import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeFormat from "rehype-format";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm) // Autolink literals、Strikethrough、Table、Tasklist、
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeMathjax)
    .use(rehypePrismPlus) // PrismHTMLline-number、.highlight-line、line
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}
