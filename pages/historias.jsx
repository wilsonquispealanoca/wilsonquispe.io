import Container from "../components/templates/container";
import Stories from "../components/molecules/stories";
import Meta from "../components/molecules/meta";
import Layout from "../components/templates/layout";
import StickyBookBanner from "../components/atoms/stickyBookBanner";

import { getAllPosts } from "../lib/api";

export default function Historias({ allPosts }) {
  const morePosts = allPosts.slice(0);
  const filteredPosts = morePosts.filter((post) => {
    return post.tags === "historia"; // Filtrar solo los posts con la categoría 'historia'
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
          <Stories posts={filteredPosts} />
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
    "newPost"
  ]);

  return {
    props: { allPosts },
  };
}
