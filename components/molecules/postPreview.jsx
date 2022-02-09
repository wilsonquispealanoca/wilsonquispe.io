import DateFormatter from '../atoms/dateFormatter'
import CoverImage from '../atoms/coverImage'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <h3 className="font-means text-2xl mb-3 text-primary-text dark:text-primary-dark">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm mb-4 text-tertiary-text dark:text-tertiary-dark">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-secondary-text dark:text-secondary-dark mb-4">{excerpt}</p>
    </div>
  )
}