import ArticleItemHome from "../atoms/articleItemHome";

const dataArticle = [
  {
    id: 0,
    title: "🌱 Mi Blog Es Un Jardín Digital, No Un Blog",
    date: "02 de febrero 2022",
    color1: "#d194aa",
    color2: "#8766cc",
  },
  {
    id: 1,
    title: "How To Start an E‑Commerce Business—a Complete Guide",
    date: "17 de enero 2022",
    color1: "#f0d3a8",
    color2: "#e05285",
  },
  {
    id: 2,
    title: "How to Start a Business",
    date: "07 de enero 2022",
    color1: "#adbfeb",
    color2: "#33cc8b",
  }
]

function ArticlesHome() {
  return (
    <section>
      <h2 className="font-means text-4xl leading-relaxed pb-6">Últimos artículos</h2>
      {
        dataArticle.map((item) =>
          <ArticleItemHome 
            key={item.id}
            title={item.title}
            date={item.date}
            color1={item.color1}
            color2={item.color2}
          />
        )
      }
    </section>
  );
}

export default ArticlesHome;