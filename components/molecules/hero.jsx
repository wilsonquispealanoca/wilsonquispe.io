import ContentHero from "../atoms/contentHero";
import Profile from "../atoms/profile";

function Hero() {
  return (
    <section>
      <Profile 
        alt="Image wilson quispe"
        src="/profileWilson.jpg"
      />
      <ContentHero />
    </section>
  );
}

export default Hero;