export default function PostTitle({ children }) {
  return (
    <h1 className="font-averia text-center pt-12 text-3xl sm:text-4xl tracking-tight leading-tight md:text-6 md:leading-none mb-6 mx-8 md:mx-32 lg:mx-56 xl:mx-80 mt-24 dark:text-brand-beige text-[#3d4449]">
      {children}
    </h1>
  );
}
