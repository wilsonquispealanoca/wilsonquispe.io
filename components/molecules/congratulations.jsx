import Link from "next/link";
import Image from "next/image";

//javascript audio library
import { Howl } from "howler";

export const Congratulations = ({ score, questions }) => {
  const soundTriumphant = new Howl({
    src: ["/sounds/triumphant.mp3"], // Ruta de tu archivo de audio
  });
  soundTriumphant.play();
  return (
    <div className="bg__lines-diagonals relative z-10 flex items-center justify-center h-screen w-full">
      <div className="bg__congratulation-degrade z-20 flex items-center justify-center flex-col px-4 h-screen w-full">
        {score === questions.length && (
          <span className="text-white font-outfitsemibold text-6xl mb-6">
            100<span className="text-3xl">%</span>
          </span>
        )}
        <div className="w-full h-48 lg:h-64 relative">
          <Image
            src="/assets/illustrations/qawra.svg"
            alt="iconWin"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="m-auto"
          />
        </div>
        <h1 className="font-outfitsemibold text-red-900 mt-6 text-center  text-xl md:text-xl">
          ¡Si que estás dominando tus lecciones de aymara hoy!
        </h1>
        <p className="text-red-900 font-outfit text-center text-lg lg:text-xl mb-4">
          Hoy practicaste nuevas palabras con una precisión de {score} corazones{" "}
          {score !== questions.length && <span>, pero perdiste algunos.</span>}
        </p>
        <div className="flex flex-col gap-2 w-full">
          {/* <Link
            as={`/lessons/${post.unidad}`}
            href="/lessons/[post.unidad]"
            className="w-full flex justify-center"
          >
            <button className="border-2 border-[#fee481] lg:px-28 py-2 bg-white rounded-lg uppercase cursor-pointer w-full font-outfitsemibold text-[#e7a601] sm:min-w-[150px] sm:max-w-fit sm:grow-0">
              Repetir práctica
            </button>
          </Link> */}
          <Link href="/blog/" className="w-full flex justify-center">
            <button className="border-2 border-[#fee481] lg:px-28 py-2  rounded-lg uppercase cursor-pointer w-full font-outfitsemibold text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
    "tags",
    "unidad",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
