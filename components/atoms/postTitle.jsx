export default function PostTitle({ children }) {
  return (
    <h1 className="font-averia text-3xl tracking-tight leading-tight md:text-4xl lg:text-5xl md:leading-none mb-6 mx-8 md:mx-32 lg:mx-56 xl:mx-80 mt-24 dark:text-primary-dark text-primary-text">
      {children}
    </h1>
  );
}
