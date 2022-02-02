import Profile from '../atoms/profile'
import DateFormatter from '../atoms/dateFormatter'
import CoverImage from '../atoms/coverImage'
import PostTitle from '../atoms/postTitle'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Profile name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Profile name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-sm">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}