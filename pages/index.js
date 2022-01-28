import Layout from "../components/templates/layout"
import Container from "../components/templates/container";
import Hero from "../components/molecules/hero";
import ArticlesHome from "../components/molecules/articlesHome";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Hero />
        <ArticlesHome text={"ultimos articulos"}/>
      </Container>
    </Layout>
  )
}
