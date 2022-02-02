import ArticleItemHome from "../atoms/articleItemHome";

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