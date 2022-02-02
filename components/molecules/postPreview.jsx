import Profile from '../atoms/profile'
import DateFormatter from '../atoms/dateFormatter'
import CoverImage from '../atoms/coverImage'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="font-means text-3xl mb-3 leading-snug text-primary-text dark:text-primary-dark">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4 text-tertiary-text dark:text-tertiary-dark">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-secondary-text dark:text-secondary-dark text-lg leading-relaxed mb-4">{excerpt}</p>
      <Profile name={author.name} picture={author.picture} />
    </div>
  )
}