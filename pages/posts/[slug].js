import { useRouter } from 'next/router'
import PostBody from '../../components/molecules/postBody'
import Navbar from '../../components/molecules/navbar'
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
      <div className="relative left-0 right-0">
        <Navbar />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Wilson Quispe blog
                </title>
                <meta property="og:image" content={post.ogImage.url} />
                <link
                  rel="preload"
                  href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
                  as="script"
                />
                <link
                  href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
                  rel="stylesheet"
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                excerpt={post.excerpt}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </div>
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
    "excerpt",
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