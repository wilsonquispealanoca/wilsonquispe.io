import Layout from "../components/templates/layout"
import Container from "../components/templates/container";
import Hero from "../components/molecules/hero";
import ArticlesHome from "../components/molecules/articlesHome";
import Navbar from "../components/molecules/navbar";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Navbar />
        <Hero />
        <ArticlesHome />
      </Container>
    </Layout>
  )
}
