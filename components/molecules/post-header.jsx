import Avatar from '../atoms/avatar'
import DateFormatter from '../atoms/dateFormatter'
import CoverImage from '../atoms/coverImage'
import PostTitle from '../atoms/postTitle'

export default function PostHeader({ title, date, author, excerpt }) {
  return (
    <>
      <div className="dark:bg-background-dark py-8 lg:pb-10">
        <PostTitle>{title}</PostTitle>
        <h2 className="text-lg font-light px-8 md:px-32 lg:px-56 xl:px-80 pb-4 dark:text-secondary-dark">{excerpt}</h2>
        <div className="mx-8 md:mx-32 lg:mx-56 xl:mx-80">
          <div className="flex place-items-center justify-between text-md text-secondary-text dark:text-tertiary-dark">
            <div className="flex items-center">
              <Avatar name={author.name} picture={author.picture} />
              <span className="ml-3 lg:ml-4 mr-1">Escrito por:
                <span className='text-primary-text dark:text-primary-dark ml-2'>{author.name}</span>
              </span>
            </div>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}