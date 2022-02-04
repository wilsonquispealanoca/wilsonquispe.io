import PostPreview from './postPreview'
import Navbar from './navbar'

export default function MoreStories({ posts }) {
  return (
    <section>
      <Navbar />
        <h1 className="font-means text-primary-text dark:text-primary-dark mb-8 text-45xl md:text-7xl">
          More Stories
        </h1>
        <h2 className="text-xl mb-14">Create a brand message and visual style that’s recognizable and dependable.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}