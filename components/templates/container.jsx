export default function Container({children}) {
  return (
    <div className="container mx-auto px-8 pb-8 pt-2 lg:px-48 flex-wrap">
      {children}
    </div>
  );
}