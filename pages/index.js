import Layout from "../components/templates/layout"
import Container from "../components/templates/container";
import Hero from "../components/molecules/hero";
import ArticlesHome from "../components/molecules/articlesHome";
import Navbar from "../components/molecules/navbar";

import { getAllPosts } from '../lib/api'
import Link from "next/link";

export default function Home({allPosts}) {
  const heroPost = allPosts.slice(0, 3)
  return (
    <Layout>
      <Container>
        <Navbar />
        <Hero />
        {heroPost.length > 0 &&
            <ArticlesHome posts={heroPost} />
        }
        <div className="mt-10 md:mt-10">
          <Link href="/blog">
            <a className="hover:underline text-secondary-text dark:text-primary-dark">Leer todas las entradas --&gt;</a>
          </Link>
        </div>
      </Container>
    </Layout>
  )
  
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "slug",
  ])
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
    }
  ]
  return {
    props: { allPosts, colors },
  }
}
