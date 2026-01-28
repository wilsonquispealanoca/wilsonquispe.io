import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function Stories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="title mt-20">
        Mis historias
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
            newPost={post.newPost}
          />
        ))}
      </ul>
    </section>
  );
}
