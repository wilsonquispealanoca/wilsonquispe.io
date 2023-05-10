import Link from "next/link";

export default function Wpadmin() {
  return (
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        class="absolute h-full w-full object-cover"
        alt="background wp-admin"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-6 xl:py-32">
        <div class="w-full font-mono flex flex-col items-center relative z-10">
          <h1 class="font-averia text-3xl lg:text-6xl text-center text-brand-beige lg:leading-tight">
            ¿Parece que andabas buscando algo aquí?
          </h1>
          <div className="bg-black/70 mt-24 lg:mt-32 p-4 lg:p-20 rounded-md">
            <p class="font-outfit text-xl text-brand-beige text-center mb-4 lg:mb-8">
              Te invito a que leas mi publicación donde menciono que tecnologias
              usé en mi blog.
            </p>
            <Link href="https://wilsonquispe.vercel.app/posts/rebuilding-blog">
              <button className="px-4 inline py-2 text-sm lg:text-lg text-black font-outfit rounded-md w-full focus:outline-none focus:shadow-outline-blue bg-brand-yellow">
                Quiero leer la publicación
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
