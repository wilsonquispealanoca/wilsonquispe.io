import Container from "../components/templates/container";
import MoreStories from "../components/molecules/moreStories";
import Meta from "../components/molecules/meta";
import Layout from "../components/templates/layout";
import { getAllPosts } from "../lib/api";

export default function Blog({ allPosts }) {
  const morePosts = allPosts.slice(0);
  const filteredPosts = morePosts.filter((post) => {
    return post.tags !== "historia"; // Filtrar solo los posts con la categoría 'historia'
  });
  return (
    <>
      <Layout>
        <Meta
          title="Blog | Wilson Quispe"
          description="Notas, pensamientos y anecdotas, cultivados en el Jardin digital de Wilson Quispe."
          ogImage="https://i.ibb.co/s16J4Ts/Meta-image.png"
          url="https://wilsonquispe-io.vercel.app/"
          fbAppID="115713950293427"
          twitter="@soywill_quispe"
        />
        <Container>
          <MoreStories posts={filteredPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
}
