import { useRouter } from "next/router";
import PostBody from "../../components/molecules/postBody";
import Navbar from "../../components/molecules/navbar";
import PostHeader from "../../components/molecules/post-header";
import Layout from "../../components/templates/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/atoms/postTitle";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import ProgressBar from "../../components/atoms/progressBar";
import ShareFacebook from "../../components/atoms/shareFacebook";
import ShareTwitter from "../../components/atoms/shareTwitter";
import Meta from "../../components/molecules/meta";

export default function Post({ post }) {
  const router = useRouter();
  const completion = ProgressBar();
  return (
    <Layout>
      <div className="relative left-0 right-0">
        <Navbar />
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 100}%)`,
          }}
          className={`z-50 fixed top-0 w-full transition-transform duration-150 h-2 bg-cta-dark`}
        />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Meta
                url={post.slug}
                title={post.title}
                description={post.excerpt}
                ogImage={post.coverImage}
                fbAppID={100004106860511}
                twitter={"@soywill_quispe"}
                isBlogPost={true}
              />
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                excerpt={post.excerpt}
              />
              <PostBody content={post.content} />
              <div className="max-w-2xl mx-8 md:mx-32 lg:mx-56 xl:mx-80 pb-16 flex justify-center">
                <ShareFacebook
                  url={`https://wilsonquispe.vercel.app/posts/${post.slug}/`}
                  title={post.title}
                />
                <ShareTwitter
                  url={`https://wilsonquispe.vercel.app/posts/${post.slug}/`}
                  title={post.title}
                  twitterHandle="@soywill_quispe"
                />
              </div>
            </article>
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
