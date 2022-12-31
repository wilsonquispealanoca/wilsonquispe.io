import ArticleItemHome from "../atoms/articleItemHome";

function ArticlesHome({posts}) {
  return (
    <section>
      <h2 className="text-primary-text dark:text-primary-dark font-means text-3xl leading-tight pb-6">Últimos artículos</h2>
      <div className="md:grid md:grid-flow-dense md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-x-6">
        <ArticleItemHome 
          key={posts[0].slug}
          title={posts[0].title}
          slug={posts[0].slug}
          gradient="from-[#D8B4FE] to-[#818CF8]"
        />
        <ArticleItemHome 
          key={posts[1].slug}
          title={posts[1].title}
          slug={posts[1].slug}
          gradient="from-[#F0D3A8] to-[#E05285]"
        />
        <ArticleItemHome 
          key={posts[2].slug}
          title={posts[2].title}
          slug={posts[2].slug}
          gradient="from-[#ADBFEB] to-[#33CC8B]"
        />
      </div>
    </section>
  );
}

export default ArticlesHome;