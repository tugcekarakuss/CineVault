import Logo from "./Logo";
import Search from "./Search";
import NavSearchResult from "./NavSearchResult";
export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3">
      <div className="flex items-center justify-between gap-5 max-w-7xl mx-auto">

        <Logo />
        <Search />
        <NavSearchResult />

      </div>
    </nav>
  );
}