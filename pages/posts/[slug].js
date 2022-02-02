import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/templates/container'
import PostBody from '../../components/molecules/postBody'
import Header from '../../components/atoms/header'
import PostHeader from '../../components/molecules/post-header'
import Layout from '../../components/templates/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/atoms/postTitle'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({post}) {
  const router = useRouter();
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with Markdown
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}