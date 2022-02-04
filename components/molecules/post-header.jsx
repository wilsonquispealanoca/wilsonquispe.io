import Avatar from '../atoms/avatar'
import DateFormatter from '../atoms/dateFormatter'
import CoverImage from '../atoms/coverImage'
import PostTitle from '../atoms/postTitle'

export default function PostHeader({ title, coverImage, date, author, excerpt }) {
  return (
    <>
      <div className="bg-[#ffe01b] dark:bg-background-dark pt-8">
        <PostTitle>{title}</PostTitle>
        <h2 className="text-xl font-light px-8 md:px-32 lg:px-56 xl:px-80 pt-6 pb-10">{excerpt}</h2>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={720} width={1240} />
      </div>
      <div className="max-w-2xl mx-6 md:mx-32 lg:mx-56 xl:mx-80">
        <div className="flex items-center text-sm text-tertiary-text">
          <Avatar name={author.name} picture={author.picture} />
          <div className="sm:text-lg">
            <span className="ml-3 mr-1">{author.name} /</span>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}