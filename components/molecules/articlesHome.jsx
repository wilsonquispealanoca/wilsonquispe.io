import ArticleItemHome from "../atoms/articleItemHome";

function ArticlesHome({ posts }) {
  return (
    <section>
      <h2 className="text-white drop-shadow-[-2px_0_0_#c21aa5] font-averia text-3xl leading-tight pb-6 mt-20">
        Últimos artículos
      </h2>
      <div className="mt-8 md:grid md:grid-flow-dense md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-x-6">
        <ArticleItemHome
          key={posts[0].slug}
          title={posts[0].title}
          slug={posts[0].slug}
          tags={posts[0].tags}
          gradient="from-[#D8B4FE] to-[#818CF8]"
        />
        <ArticleItemHome
          key={posts[1].slug}
          title={posts[1].title}
          slug={posts[1].slug}
          tags={posts[1].tags}
          gradient="from-[#F0D3A8] to-[#E05285]"
        />
        <ArticleItemHome
          key={posts[2].slug}
          title={posts[2].title}
          slug={posts[2].slug}
          tags={posts[2].tags}
          gradient="from-[#ADBFEB] to-[#33CC8B]"
        />
      </div>
    </section>
  );
}

export default ArticlesHome;
