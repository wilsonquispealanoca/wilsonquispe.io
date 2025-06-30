import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function Stories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="font-outfitsemibold break-words text-white [text-shadow:-2px_0_0_#c21aa5] mb-8 text-5xl md:text-7xl lg:mt-16">
        Mis historias
      </h1>
      <h2 className="text-xl font-light mb-14 text-brand-beige">
        En cada relato que comparta, irá siempre un pedazo de mi aprendizaje. No son teorías ni consejos de manual, sino lecciones vividas -con tropiezos, dudas y momentos de claridad- que hoy pongo en tus manos con cariño. Mi mayor deseo es que cuando te encuentres en una encrucijada, alguna de estas palabras pueda ser esa vocecita amiga que te susurre: Tú puedes, yo también pasé por esto
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
