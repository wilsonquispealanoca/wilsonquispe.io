export default function PostTitle({ children }) {
  return (
    <h1 className="font-means text-4xl leading-none md:text-5xl lg:text-6xl md:leading-none mb-6 mx-8 md:mx-32 lg:mx-56 xl:mx-80 mt-24 dark:text-primary-dark text-primary-text">
      {children}
    </h1>
  )
}