import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 relative flex items-center justify-between">
        
        {/* Left Navigation (Desktop - Only real existing pages) */}
        <div className="flex-1 flex items-center justify-start">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/70 hover:text-white p-2 -ml-2"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-white/60">
            <Link to="/shop" className="hover:text-white transition-colors duration-200">
              Shop
            </Link>
            <Link to="/about" className="hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </nav>
        </div>

        {/* Center Brand Logo (Dead Center across all screens) */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
          <Link to="/" className="inline-block group text-center">
            <span className="font-editorial-heading text-lg sm:text-2xl font-bold tracking-[0.35em] text-white uppercase group-hover:text-[#C9A962] transition-colors duration-300 block">
              NOIR SUPPLY
            </span>
            <span className="block text-[8px] sm:text-[9px] tracking-[0.45em] text-white/40 uppercase -mt-0.5 group-hover:text-white/70 transition-colors">
              HAUTE STREETWEAR
            </span>
          </Link>
        </div>

        {/* Right Cart Link (Only real page) */}
        <div className="flex-1 flex items-center justify-end">
          <Link
            to="/cart"
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors p-1 group"
            aria-label="View Shopping Bag"
          >
            <div className="relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.67 0-1.19-.578-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline-block text-[11px] text-white/60 group-hover:text-white transition-colors">
              Cart ({cartCount})
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only Real Existing Pages */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#09090b] px-6 py-6 space-y-4 animate-in fade-in">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white py-1"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white py-1"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white py-1"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white py-1"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white py-1 border-t border-white/[0.08] pt-3"
          >
            Cart ({cartCount})
          </Link>
        </div>
      )}
    </header>
  );
}