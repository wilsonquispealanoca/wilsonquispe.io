import ContentHero from "../atoms/contentHero";
import Profile from "../atoms/profile";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row md:mt-8 lg:mt-12">
      <ContentHero />
      <Profile
        name="Image wilson quispe"
        picture="/assets/blog/authors/profileWilson.jpg"
      />
    </section>
  );
}

export default Hero;
