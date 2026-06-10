import { useState } from "react";
import PostBody from "./postBody";
import Navbar from "./navbar";

export default function Notes({ posts }) {
  const [activeSlug, setActiveSlug] = useState(null);
  // Buscamos la nota seleccionada
  const currentPost = posts.find((p) => p.slug === activeSlug);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans flex antialiased w-full mt-6 pb-6">
      <Navbar />
      <section className={`bg-[#1e1e1e] border-r border-[#323232] flex flex-col flex-shrink-0 h-screen sticky top-0 overflow-y-auto w-full md:w-80 ${
        currentPost ? "hidden md:flex" : "flex"
      }`}>
        <div className="p-5 border-b border-[#323232] flex items-center gap-3">
          <input 
            type="search" 
            placeholder="Buscar nota..." 
            className="flex-grow bg-[#323232] p-2.5 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 outline-none" 
          />
          <button className="text-blue-500 text-2xl font-bold">+</button>
        </div>
        
        <div className="p-5">
          <h1 className="text-2xl font-semibold mb-6">Todas las notas</h1>
          <ul className="space-y-2">
            {posts.map((post, index) => {
              const isSelected = post.slug === activeSlug;

              const colorPalette = [
                'bg-[#8dc255]', // verde idiomas
                'bg-amber-500',  // naranja actual
                'bg-blue-500',   // Azul
                'bg-purple-500', // Morado
                'bg-rose-500',   // Rosado
                'bg-cyan-500'    // Celeste
              ];

              const randomColorClass = colorPalette[index % colorPalette.length];

              return (
                <li key={post.slug}>
                  <div 
                    onClick={() => setActiveSlug(post.slug)}
                    className={`flex gap-4 p-4 rounded-xl cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#323232] border border-gray-600' : 'bg-transparent hover:bg-[#252525]'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${randomColorClass}`}></span>
                    
                    <div className="flex-grow">
                      <h3 className={`font-semibold text-sm line-clamp-1 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(post.date)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* PANEL DERECHO (CONTENIDO): 
        - En móvil: Si no hay nota activa se oculta (hidden). Si la hay, toma todo el ancho (w-full).
        - En escritorio: Siempre toma el espacio restante (flex-grow).
      */}
      <main className={`bg-black h-screen w-full md:flex-grow p-6 md:p-12 ${
        currentPost ? "block" : "hidden md:block"
      }`}>
        {currentPost ? (
          <div className="max-w-3xl mx-auto">
            
            {/* BOTÓN DE VOLVER (Solo visible en móviles `md:hidden`) */}
            <button 
              onClick={() => setActiveSlug(null)}
              className="flex items-center gap-2 text-[#ff7655] font-medium mb-6 md:hidden px-2 py-1 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              ← Volver a las notas
            </button>

            {/* Título de la nota */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {currentPost.title}
            </h1>

            {/* Render del contenido HTML */}
            <div className="prose prose-invert max-w-none">
              <PostBody content={currentPost.content} isNotes={true} isDark={true} />
            </div>

            {/* Acción extra condicional */}
            {currentPost.tags === "idiomas" && currentPost.unidad && (
              <div className="mt-10">
                <button className="w-full rounded-2xl border-accent border-2 bg-[#123837] py-4 text-white text-xl hover:bg-[#194d4b] transition-colors">
                  Practicar y memorizar lección
                </button>
              </div>
            )}
            
          </div>
        ) : (
          /* Este mensaje solo se verá en escritorio cuando no haya ninguna nota clickeada */
          <div className="hidden md:flex items-center justify-center h-full text-gray-600 text-lg font-medium">
            Selecciona una nota para ver su contenido
          </div>
        )}
      </main>

    </div>
  );
}