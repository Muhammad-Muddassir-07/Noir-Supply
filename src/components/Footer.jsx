import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] mt-20 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <Link to="/" className="inline-block">
              <span className="font-editorial-heading text-lg sm:text-xl font-bold tracking-[0.3em] uppercase text-white">
                NOIR SUPPLY
              </span>
            </Link>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              Architectural silhouettes, heavyweight textiles, and limited production runs. Designed with precision.
            </p>
          </div>

          {/* Navigation Links - Only Real Existing Pages */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C9A962]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs tracking-wider text-white/60">
              <Link to="/shop" className="hover:text-white transition-colors">
                Shop Collection
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                About the Brand
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact & Support
              </Link>
              <Link to="/cart" className="hover:text-white transition-colors">
                Cart
              </Link>
            </div>
          </div>

          {/* Customer / Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#C9A962]">
              Client Concierge
            </h4>
            <div className="space-y-1.5 text-xs text-white/60">
              <p>Email: atelier@noirsupply.com</p>
              <p>Instagram: @noirsupply</p>
              <p className="text-white/40 text-[11px] pt-1">
                Worldwide Express Courier Available
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Minimal Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-white/40 uppercase">
          <p>© 2026 NOIR SUPPLY. ALL RIGHTS RESERVED.</p>
          <p>EST. 2024 • ARCHITECTURAL APPAREL</p>
        </div>
      </div>
    </footer>
  );
}