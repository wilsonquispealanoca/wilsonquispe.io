export default function PostTitle({ children }) {
  return (
    <h1 className="font-outfitsemibold break-words pt-16 text-left text-5xl sm:text-6xl tracking-tight leading-tight md:text-6 md:leading-none my-6 mx-8 md:mx-32 lg:mx-56 xl:mx-80 text-white drop-shadow-[-2px_0_0_#c21aa5]">
      {children}
    </h1>
  );
}
