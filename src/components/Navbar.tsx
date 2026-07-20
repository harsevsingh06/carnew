import { Car, Search, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `transition-colors duration-300 ${
      isActive(path)
        ? "text-red-600 font-semibold"
        : isHome
        ? scrolled
          ? "text-slate-700 hover:text-red-600"
          : "text-white hover:text-red-400"
        : "text-slate-700 hover:text-red-600"
    }`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
            : "bg-transparent"
          : "bg-white shadow-md border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>

            <span
              className={`text-2xl font-bold tracking-tight transition-colors ${
                isHome
                  ? scrolled
                    ? "text-slate-900"
                    : "text-white"
                  : "text-slate-900"
              }`}
            >
              CarQube
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>

            <Link to="/products" className={linkClass("/products")}>
              Inventory
            </Link>

            <Link to="/blog" className={linkClass("/blog")}>
              Blog
            </Link>

            <Link to="/about" className={linkClass("/about")}>
              About Us
            </Link>

            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center"
            >
              <Search
                className={`absolute left-4 w-4 h-4 ${
                  isHome && !scrolled
                    ? "text-white"
                    : "text-slate-400"
                }`}
              />

              <input
                type="text"
                placeholder="Find a car..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 w-64 ${
                  isHome && !scrolled
                    ? "bg-white/15 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                    : "bg-slate-50 border-slate-200 text-slate-900"
                }`}
              />
            </form>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isHome && !scrolled
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-xl px-4 py-4 space-y-3 text-center">

          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setIsOpen(false)}>
            Inventory
          </Link>

          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>

          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}