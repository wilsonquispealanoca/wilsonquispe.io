import ContentHero from "../atoms/contentHero";
import Profile from "../atoms/profile";

function Hero() {
  return (
    <section>
      <Profile 
        name="Image wilson quispe"
        picture="/assets/blog/authors/profileWilson.jpg"
      />
      <ContentHero />
    </section>
  );
}

export default Hero;