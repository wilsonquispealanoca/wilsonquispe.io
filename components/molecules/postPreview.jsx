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
      <li className="flex flex-col">
        <Image
              src={coverImage}
              alt={`Cover Image for titles app`}
              width={1900}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-xl cursor-pointer h-auto"
            />
          <div className="py-4">
            <div className="uppercase text-xs text-secondary-text mb-2 font-outfitlight">
              <DateFormatter dateString={date} />
            </div>
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="text-xl font-outfit leading-8 text-purple-800 hover:underline">
              {title}
              {newPost && (
                      <BadgeNewFunctionality />
                )}
            </Link>
            <p className="text-quaternary-color-text line-clamp-2 my-4">{excerpt}</p>
          </div>
      </li>
    </>
  );
}
