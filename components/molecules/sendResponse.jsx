export const SendResponse = ({ handle, isInput }) => {
  return (
    <section
      className={`fixed ${
        isInput ? "top lg:bottom-0 " : "bottom-0"
      } left-0 right-0 pb-6 px-4 sm:p-10 w-full`}
    >
      <div className="mx-auto flex max-w-5xl sm:justify-between text-sm">
        <button className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit">
          Saltar
        </button>
        <button
          className="w-full px-6 py-4 bg-green-500 rounded-full uppercase cursor-pointer font-outfit text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
          onClick={handle}
        >
          Enviar Respuesta
        </button>
      </div>
    </section>
  );
};
