import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function Stories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="title">
        Mis historias
      </h1>
      <p className="paragraph text-center mb-20">
        En cada relato que comparta, irá siempre un pedazo de mi aprendizaje. No son teorías ni consejos de manual, sino lecciones vividas -con tropiezos, dudas y momentos de claridad- que hoy pongo en tus manos con cariño. Mi mayor deseo es que cuando te encuentres en una encrucijada, alguna de estas palabras pueda ser esa vocecita amiga que te susurre: Tú puedes, yo también pasé por esto
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
            newPost={post.newPost}
          />
        ))}
      </ul>
    </section>
  );
}
