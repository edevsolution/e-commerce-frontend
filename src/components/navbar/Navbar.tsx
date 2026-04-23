import { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  label: string;
  hasDropdown?: boolean;
}

const NavLink = ({ label, hasDropdown = false }: NavLinkProps) => (
  <button className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-red-600 transition-colors duration-200 whitespace-nowrap">
    {label}
    {hasDropdown && <ChevronDown size={14} />}
  </button>
);

const NAV_LINKS: string[] = ["On Sale", "New Arrivals", "Brands"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* ── Main bar ── */}
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12 h-14">
        {/* Logo */}
        <Link to="/" className="font-black uppercase text-xl tracking-tight text-gray-900 select-none hover:text-red-600 transition-colors duration-200">
          outfitra
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink label="Shop" hasDropdown />
          {NAV_LINKS.map((link) => (
            <NavLink key={link} label={link} />
          ))}
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2 w-48 lg:w-60">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            className="bg-transparent outline-none text-sm text-gray-600 w-full placeholder:text-gray-400"
            placeholder="Search for products..."
          />
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Mobile search toggle */}
          <button
            className="md:hidden text-gray-900 hover:text-red-600 transition-colors"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Toggle search"
          >
            <Search size={20} />
          </button>

          <button
            className="text-gray-900 hover:text-red-600 transition-colors"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </button>

          <button
            className="text-gray-900 hover:text-red-600 transition-colors"
            aria-label="User account"
          >
           <Link to={"login"}> <User size={20} /> </Link> 
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-900 hover:text-red-600 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile search bar ── */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
            <Search size={15} className="text-gray-400 shrink-0" />
            <input
              autoFocus
              type="text"
              className="bg-transparent outline-none text-sm text-gray-600 w-full placeholder:text-gray-400"
              placeholder="Search for products..."
            />
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {["Shop", ...NAV_LINKS].map((label) => (
            <button
              key={label}
              className="text-left text-sm font-medium text-gray-800 hover:text-red-600 transition-colors py-1 border-b border-gray-50"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;