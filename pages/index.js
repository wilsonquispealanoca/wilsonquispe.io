import Layout from "../components/templates/layout"
import Container from "../components/templates/container";
import Hero from "../components/molecules/hero";
import ArticlesHome from "../components/molecules/articlesHome";
import Navbar from "../components/molecules/navbar";
import Meta from "../components/molecules/meta";

import { getAllPosts } from '../lib/api'
import Link from "next/link";

export default function Home({allPosts}) {
  const heroPost = allPosts.slice(0, 3)
  return (
    <Layout>
      <Meta 
        title='Inicio | Wilson Quispe'
				description='Notas, pensamientos y anecdotas, cultivados en el Jardin digital de Wilson Quispe.'
				ogImage='https://i.ibb.co/s16J4Ts/Meta-image.png'
				url='https://wilsonquispe-io.vercel.app/'
				fbAppID='115713950293427'
				twitter='@soywill_quispe'
      />
      <Container>
        <Navbar />
        <Hero />
        {heroPost.length > 0 &&
            <ArticlesHome posts={heroPost} />
        }
        <div className="mt-10 md:mt-10">
          <Link href="/blog">
            <a className="text-lg transition-all duration-200 hover:pb-2 hover:border-b-2 hover:border-primary-text hover:dark:border-primary-dark text-primary-text dark:text-primary-dark">Leer todas las entradas --&gt;</a>
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
