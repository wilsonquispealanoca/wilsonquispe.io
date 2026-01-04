import ContentHero from "../atoms/contentHero";
import Profile from "../atoms/profile";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:mt-8 lg:mt-12 pt-4">
      <ContentHero />
    </section>
  );
}

export default Hero;
