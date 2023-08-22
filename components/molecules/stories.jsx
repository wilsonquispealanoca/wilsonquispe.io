import PostPreview from "./postPreview";
import Navbar from "./navbar";

export default function Stories({ posts }) {
  return (
    <section>
      <Navbar />
      <h1 className="font-outfitsemibold break-words text-white drop-shadow-[-2px_0_0_#c21aa5] mb-8 text-5xl md:text-7xl lg:mt-16">
        Mis historias
      </h1>
      <h2 className="text-xl font-light mb-14 text-brand-beige">
        En cada historia que comparta, aseguraré de incluir una lección de vida
        o moraleja que haya aprendido a través de mi experiencia. Espero que
        estas lecciones puedan inspirarte y ayudarte a enfrentar tus propias
        dificultades de manera positiva y efectiva.
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
