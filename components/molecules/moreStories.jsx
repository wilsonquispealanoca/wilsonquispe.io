import PostPreview from './postPreview'
import Navbar from './navbar'

export default function MoreStories({ posts }) {
  return (
    <section>
      <Navbar />
        <h1 className="font-means text-primary-text dark:text-primary-dark mb-8 text-5xl md:text-7xl">
          Todos los artículos
        </h1>
        <h2 className="text-xl font-light mb-14">Siempre disfrute de todas las cosas digitales. Me gusta escribir sobre cosas que estoy haciendo, aprendiendo o creando. Este blog explora mi mente y te muestra mi lado más creativo. Te invito a que me leas...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 gap-y-8 md:gap-y-32">
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