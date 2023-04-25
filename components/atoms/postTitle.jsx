export default function PostTitle({ children }) {
  return (
    <h1 className="font-averia pt-16 text-center text-4xl sm:text-5xl tracking-tight leading-tight md:text-6 md:leading-none my-6 mx-8 md:mx-32 lg:mx-56 xl:mx-80 dark:text-brand-beige text-[#3d4449]">
      {children}
    </h1>
  );
}
