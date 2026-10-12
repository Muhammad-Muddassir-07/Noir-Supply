import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Top Banner */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C9A962] text-[11px] tracking-[0.3em] uppercase font-mono">
            ARCHIVAL MANIFESTO
          </span>
          <span className="w-8 h-[1px] bg-[#C9A962]"></span>
        </div>
        <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold uppercase tracking-wider text-white leading-tight">
          Built for those who demand architectural precision.
        </h1>
      </div>

      {/* Hero Visual Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-7 aspect-[16/10] bg-[#141418] border border-white/10 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&auto=format&fit=crop&q=85"
            alt="Noir Supply Atelier"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border border-white/10 font-mono text-[10px] tracking-widest text-[#C9A962]">
            ATELIER 01 • PROTOTYPE DRAPING
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 text-white/70 leading-relaxed text-sm sm:text-base">
          <p>
            <strong className="text-white font-semibold">NOIR SUPPLY</strong> was founded on a simple dogma: high streetwear must be architectural, ruthless, and permanently distinct. We reject transient runway trends and disposable speed cycles in favor of brutalist silhouettes, monolithic textiles, and limited allocation editions.
          </p>
          <p>
            Each garment begins with tactile substance — custom-milled 480 GSM cotton fleece and technical Japanese ripstop weaves that retain sculptural volume through years of wear.
          </p>
          <p className="font-editorial-title italic text-2xl text-white">
            "Once a numbered run is closed, the pattern blocks are archived forever."
          </p>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/[0.08] pt-16">
        <div className="p-8 border border-white/10 bg-[#111114]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A962]">
            CORE TENET 01
          </span>
          <h3 className="font-editorial-heading text-xl font-bold text-white mt-2 mb-3">
            Numbered Allocations
          </h3>
          <p className="text-xs text-white/60 leading-relaxed font-mono">
            Every collection drop is restricted to 150 individual units worldwide. No excess inventory, no discounted dilution.
          </p>
        </div>

        <div className="p-8 border border-white/10 bg-[#111114]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A962]">
            CORE TENET 02
          </span>
          <h3 className="font-editorial-heading text-xl font-bold text-white mt-2 mb-3">
            Substantive Grammage
          </h3>
          <p className="text-xs text-white/60 leading-relaxed font-mono">
            We operate in 420–480 GSM textiles that command authority in motion, drape naturally, and defy thermal erosion.
          </p>
        </div>

        <div className="p-8 border border-white/10 bg-[#111114]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A962]">
            CORE TENET 03
          </span>
          <h3 className="font-editorial-heading text-xl font-bold text-white mt-2 mb-3">
            Permanent Architecture
          </h3>
          <p className="text-xs text-white/60 leading-relaxed font-mono">
            Laser-cut seam tape, double-reinforced bar-tacks, and bespoke obsidian anodized hardware built to outlast decades.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center border-t border-white/[0.08] pt-16">
        <Link
          to="/shop"
          className="inline-block bg-white text-black px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#C9A962] hover:text-white transition shadow-xl"
        >
          View The SS26 Collection →
        </Link>
      </div>
    </div>
  );
}