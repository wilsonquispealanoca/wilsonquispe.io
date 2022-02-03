import ArticleItemHome from "../atoms/articleItemHome";

function ArticlesHome({posts}) {
  return (
    <section>
      <h2 className="font-means text-4xl leading-tight pb-8">Últimos artículos</h2>
      {
        posts.map((post) =>
          <ArticleItemHome 
            key={post.slug}
            title={post.title}
            slug={post.slug}
          />
        )
      }
    </section>
  );
}

export default ArticlesHome;