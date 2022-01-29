import ArticleItemHome from "../atoms/articleItemHome";

const dataArticle = [
  {
    id: 0,
    title: "🌱 Mi Blog Es Un Jardín Digital, No Un Blog",
    date: "02 de febrero 2022",
    color1: "from-card-top-color-1",
    color2: "to-card-bottom-color-1",
  },
  {
    id: 1,
    title: "How To Start an E‑Commerce Business—a Complete Guide",
    date: "17 de enero 2022",
    color1: "from-card-top-color-2",
    color2: "to-card-bottom-color-2",
  },
  {
    id: 2,
    title: "How to Start a Business",
    date: "07 de enero 2022",
    color1: "from-card-top-color-3",
    color2: "to-card-bottom-color-3",
  }
]

function ArticlesHome() {
  return (
    <section>
      <h2 className="font-means text-4xl leading-tight pb-8">Últimos artículos</h2>
      {
        dataArticle.map((item) =>
          <ArticleItemHome 
            key={item.id}
            title={item.title}
            color1={item.color1}
            color2={item.color2}
          />
        )
      }
    </section>
  );
}

export default ArticlesHome;