export default function Container({ children }) {
  return (
    <div className="container mx-auto md:px-32 flex-wrap">
      {children}
    </div>
  );
}
