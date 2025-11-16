import DateFormatter from "../atoms/dateFormatter";
import CoverImage from "../atoms/coverImage";
import BadgeNewFunctionality from "../atoms/BadgeNewFunctionality";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  newPost
}) {
  return (
    <>
      <li className="flex flex-col gap-1">
        <div className="uppercase text-xs text-[#7f4cd6]">
          <DateFormatter dateString={date} />
        </div>
          <Link as={`/posts/${slug}`} href="/posts/[slug]" className="text-xl font-medium hover:underline text-[#fce8f5] w-full">
            {title}
            {newPost && (
              <div className="relative left-16 text-[#251D16] bottom-2">
                  <BadgeNewFunctionality />
                </div>
            )}
          </Link>
      </li>
    </>
  );
}
