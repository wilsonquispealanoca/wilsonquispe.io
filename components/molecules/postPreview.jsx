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
      <div className="my-6">
        <h3 className="font-averia text-xl text-brand-yellow">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-base mt-2 text-brand-yellow first-letter:capitalize">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="w-full h-[2px] bg-brand-beige opacity-40"></div>
    </>
  );
}
