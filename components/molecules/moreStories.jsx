import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="title mt-28 mb-24">
        Todos los artículos
      </h1>
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
