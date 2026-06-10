import Container from "../components/templates/container";
import Notes from "../components/molecules/notes";
import Meta from "../components/molecules/meta";
import Layout from "../components/templates/layout";
import StickyBookBanner from "../components/atoms/stickyBookBanner";

// 1. Importamos también getPostBySlug y tu conversor de Markdown
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

export default function Notas({ allPosts }) {
  const morePosts = allPosts.slice(0);
  const filteredPosts = morePosts.filter((post) => {
    return post.tags === "notas"; // Filtrar solo los posts con la categoría 'notas'
  });

  return (
    <>
      <Layout>
        <Meta
          title="Mis historias | Wilson Quispe"
          description="Notas, pensamientos y anecdotas, cultivados en el Jardin digital de Wilson Quispe."
          ogImage="https://i.ibb.co/s16J4Ts/Meta-image.png"
          url="https://wilsonquispe-io.vercel.app/"
          fbAppID="115713950293427"
          twitter="@soywill_quispe"
        />
        <Container>
          <div style={{ "backgroundColor": "#282828", "width": "100vw", "height": "100vh", "position": "absolute", "left": "0" }}>
            {/* Pasamos los posts filtrados que ya contienen su HTML listo */}
            <Notes posts={filteredPosts} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // 1. Traemos la metadata básica de todas las publicaciones
  const rawPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "excerpt",
    "tags",
    "newPost",
    "selected"
  ]);

  // 2. Mapeamos e inyectamos el contenido Markdown transformado a HTML para cada post
  const allPosts = await Promise.all(
    rawPosts.map(async (post) => {
      // Leemos el archivo físico usando el slug para extraer solo el "content"
      const fullPost = getPostBySlug(post.slug, ["content"]);
      // Lo convertimos a HTML usando tu función del proyecto
      const contentHtml = await markdownToHtml(fullPost.content || "");
      
      return {
        ...post,
        content: contentHtml, // Añadimos el HTML limpio al objeto del post
      };
    })
  );

  return {
    props: { allPosts },
  };
}