export default function Container({children}) {
  return (
    <div className="container mx-auto px-8 pb-8 pt-28 md:px-32 lg:px-56 xl:px-80 flex-wrap">
      {children}
    </div>
  );
}