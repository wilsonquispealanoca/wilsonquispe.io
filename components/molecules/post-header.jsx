import Avatar from "../atoms/avatar";
import DateFormatter from "../atoms/dateFormatter";
import PostTitle from "../atoms/postTitle";

export default function PostHeader({ title, date, author, excerpt }) {
  return (
    <>
      <div className="dark:bg-[#111111] py-8 lg:pb-10">
        <PostTitle>{title}</PostTitle>
        <div className="mx-8 md:mx-32 lg:mx-56 xl:mx-80">
          <div className="flex place-items-center justify-between text-md text-primary-text dark:text-[#858585]">
            <div className="flex items-center">
              <Avatar name={author.name} picture={author.picture} />
              <span className="ml-3 lg:ml-4 mr-1">
                Escrito por:
                <span className="text-primary-text dark:text-primary-dark ml-2">
                  {author.name}
                </span>
              </span>
            </div>
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}
