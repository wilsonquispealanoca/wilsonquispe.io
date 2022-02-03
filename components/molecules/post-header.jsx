import Avatar from '../atoms/avatar'
import DateFormatter from '../atoms/dateFormatter'
import CoverImage from '../atoms/coverImage'
import PostTitle from '../atoms/postTitle'

export default function PostHeader({ title, coverImage, date, author, excerpt }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <h2 className="text-xl mb-14">{excerpt}</h2>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={720} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex md:hidden text-sm">
          <Avatar name={author.name} picture={author.picture} />
          <span className="ml-3 mr-1">{author.name} /</span>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}