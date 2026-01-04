import DateFormatter from "../atoms/dateFormatter";
import CoverImage from "../atoms/coverImage";
import BadgeNewFunctionality from "../atoms/BadgeNewFunctionality";
import Link from "next/link";
import Image from "next/image"

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
      <li className="flex flex-col border-[1px] rounded-2xl bg-white">
        <Image
              src={coverImage}
              alt={`Cover Image for titles app`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-2xl cursor-pointer h-[160px]"
            />
          <div className="p-6">
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="text-xl font-outfitsemibold text-primary-text">
              {title}
              {newPost && (
                      <BadgeNewFunctionality />
                )}
            </Link>
            <div className="uppercase text-xs text-secondary-text mt-6 font-outfitlight">
              <DateFormatter dateString={date} />
            </div>
          </div>
      </li>
    </>
  );
}
