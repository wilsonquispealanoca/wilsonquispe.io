import Layout from "../components/templates/layout";
import Container from "../components/templates/container";
import Hero from "../components/molecules/hero";
import Card from "../components/molecules/card";
import ArticlesHome from "../components/molecules/articlesHome";
import Navbar from "../components/molecules/navbar";
import Meta from "../components/molecules/meta";
import BookIntroPopup from "../components/atoms/bookIntroPopup";
import StickyBookBanner from "../components/atoms/stickyBookBanner";

import { getAllPosts } from "../lib/api";
import Link from "next/link";

export default function Home({ allPosts }) {
  const filteredPosts = allPosts
    .filter((post) => post.tags !== "historia")
    .slice(0, 3);

  return (
    <Layout>
      <Meta
        title="Inicio | Wilson Quispe"
        description="Notas, pensamientos y anecdotas, cultivados en el Jardin digital de Wilson Quispe."
        ogImage="https://i.ibb.co/s16J4Ts/Meta-image.png"
        url="https://wilsonquispe-io.vercel.app/"
        fbAppID="115713950293427"
        twitter="@soywill_quispe"
      />
      <StickyBookBanner />
      <Container>
        <Navbar />
        <Hero />
        <Card />
        {filteredPosts.length > 0 && <ArticlesHome posts={filteredPosts} />}
        <div className="mt-8 md:mt-10 text-center">
          <Link href="/blog" className="text-lg text-brand-beige">
            Leer todas las entradas --&gt;
          </Link>
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "slug", "date", "tags", "clase"]);
  const colors = [
    {
      color1: "from-card-top-color-1",
      color2: "to-card-bottom-color-1",
    },
    {
      color1: "from-card-top-color-2",
      color2: "to-card-bottom-color-2",
    },
    {
      color1: "from-card-top-color-3",
      color2: "to-card-bottom-color-3",
    },
  ];
  return {
    props: { allPosts, colors },
  };
}
