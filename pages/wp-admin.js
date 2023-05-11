import Link from "next/link";

export default function Wpadmin() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen w-screen flex items-center">
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
        alt="background wp-admin"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center xl:py-32">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-averia text-5xl text-center text-brand-beige lg:leading-tight">
            ¿Parece que andabas buscando algo aquí?
          </h1>
          <div className="bg-black/70 mt-12 lg:mt-32 p-4 lg:p-20 rounded-md">
            <p className="font-outfit text-xl text-brand-beige text-center mb-4 lg:mb-8">
              Te invito a que leas mi publicación donde menciono que tecnologias
              usé en mi blog.
            </p>
            <Link
              href="https://wilsonquispe.vercel.app/posts/rebuilding-blog"
              className="flex items-center justify-center"
            >
              <button className="btn-yellow">Quiero leer la publicación</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
