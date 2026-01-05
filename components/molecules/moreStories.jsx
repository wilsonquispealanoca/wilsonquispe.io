import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="title">
        Todos los artículos
      </h1>
      <p className="paragraph text-center mb-20">
        Me gusta escribir sobre cosas que estoy haciendo, aprendiendo o creando. Este <strong>blog</strong> explora mi mente y te muestra mi lado más creativo. Te invito a que me leas...
      </p>
      <ul className="grid gap-8 md:grid-cols-3">
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
