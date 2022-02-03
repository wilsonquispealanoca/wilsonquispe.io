import Container from '../components/templates/container'
import MoreStories from '../components/molecules/moreStories'
import Layout from '../components/templates/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Blog({ allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with Markdown</title>
        </Head>
        <Container>
          <MoreStories posts={morePosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}