import DateFormatter from "../atoms/dateFormatter";
import CoverImage from "../atoms/coverImage";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <>
      <li className="flex flex-col gap-1">
        <div className="uppercase text-xs text-[#7f4cd6]">
          <DateFormatter dateString={date} />
        </div>
        <h3 className="text-xl font-medium hover:underline text-[#fce8f5]">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            {title}
          </Link>
        </h3>
      </li>
    </>
  );
}
