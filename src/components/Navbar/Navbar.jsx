export default function Navbar({ children }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-5 px-2 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center gap-1 justify-between max-w-7xl mx-auto">
        {children}
      </div>
    </nav>
  );
}