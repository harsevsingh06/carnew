import { Car, Search, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => 
    `transition-colors ${isActive(path) ? 'text-red-600 font-semibold' : 'hover:text-red-600'} block md:inline-block py-2 md:py-0`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded-lg">
              <Car className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">CarQube</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 items-center">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/products" className={linkClass("/products")}>Inventory</Link>
            <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
            <Link to="/about" className={linkClass("/about")}>About Us</Link>
            <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          </div>

          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative flex items-center" role="search">
              <label htmlFor="search-input" className="sr-only">Search for a car</label>
              <input
                id="search-input"
                type="text"
                placeholder="Find a car..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 rounded-full text-sm font-medium border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-slate-50 w-64 transition-all"
                aria-label="Find a car"
              />
              <Search className="w-4 h-4 absolute left-4 text-slate-400" aria-hidden="true" />
            </form>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 focus:outline-none p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 text-center text-slate-600 font-medium pb-6 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className={linkClass("/")}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className={linkClass("/products")}>Inventory</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className={linkClass("/blog")}>Blog</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={linkClass("/about")}>About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={linkClass("/contact")}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
