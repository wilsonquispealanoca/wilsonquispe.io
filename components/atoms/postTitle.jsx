export default function PostTitle({ children }) {
  return (
    <h1 className="font-means text-45xl leading-none md:text-6xl lg:text-7xl md:leading-none mb-6 mx-6 md:mx-32 lg:mx-56 xl:mx-80 mt-24 dark:text-primary-dark">
      {children}
    </h1>
  )
}