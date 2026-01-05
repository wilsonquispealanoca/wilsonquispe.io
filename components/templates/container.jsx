export default function Container({ children }) {
  return (
    <div className="container mx-auto px-6 md:px-32 flex-wrap">
      {children}
    </div>
  );
}
