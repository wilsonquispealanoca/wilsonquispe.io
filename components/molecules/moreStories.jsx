import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="font-outfitsemibold break-words text-white drop-shadow-[-2px_0_0_#c21aa5] mb-8 text-5xl md:text-7xl lg:mt-16">
        Todos los artículos
      </h1>
      <h2 className="text-xl font-light mb-14 text-brand-beige">
        Siempre disfrute de todas las cosas digitales. Me gusta escribir sobre
        cosas que estoy haciendo, aprendiendo o creando. Este blog explora mi
        mente y te muestra mi lado más creativo. Te invito a que me leas...
      </h2>
      <ul className="grid gap-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))}
      </ul>
    </section>
  );
}
