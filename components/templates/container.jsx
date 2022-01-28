export default function Container({children}) {
  return (
    <div className="container mx-auto px-8 py-8 lg:px-48 flex-wrap">
      {children}
    </div>
  );
}