export default function Navbar({ children }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 py-5 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-1">
          {children}
        </div>
      </div>
    </nav>
  );
}