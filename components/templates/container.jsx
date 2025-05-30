export default function Container({ children }) {
  return (
    <div className="container mx-auto px-6 md:px-32 lg:px-56 xl:px-80 flex-wrap">
      {children}
    </div>
  );
}
