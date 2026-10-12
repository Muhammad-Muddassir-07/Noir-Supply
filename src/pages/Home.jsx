import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();
  const featured = products.slice(0, 4);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="bg-[#08080a] text-white">
      {/* ========================================================
          HERO SECTION (MINIMALIST EDITORIAL - MATCHING REFERENCE)
          ======================================================== */}
      <section className="relative border-b border-white/[0.08] overflow-hidden bg-[#09090b]">
        {/* Top Header Hairline Guide */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-white/40"></span>
            <span>BUILT WITH PRECISION</span>
          </div>
          <span>SS26 COLLECTION</span>
        </div>

        {/* Main Hero Grid */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left / Season Tag (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-2">
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#C9A962]">
              NEW DROP — SS26
            </p>
            <p className="text-xs text-white/40 tracking-wider leading-relaxed">
              Monochrome silhouettes designed with architectural structure.
            </p>
          </div>

          {/* Center: Model & Typography */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Model & Backdrop Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-[3/4] mx-auto flex items-end justify-center">
              
              {/* Grand Minimal Typography Behind Model */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
                <span className="block font-editorial-title italic text-6xl sm:text-7xl md:text-8xl lg:text-[100px] text-white/90 leading-none">
                  DEFINE
                </span>
                <span className="block font-editorial-title text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold tracking-[0.05em] text-white leading-none mt-1 sm:mt-2">
                  OUTRAGE
                </span>
              </div>

              {/* Model Cutout Image */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&auto=format&fit=crop&q=85"
                  alt="SS26 Editorial Model"
                  className="max-h-full w-auto object-cover object-top filter grayscale contrast-125 brightness-95"
                />
                {/* Clean Bottom Fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Statement, CTA & Floating Reel */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end text-left lg:text-right gap-6 sm:gap-8">
            <div className="max-w-xs">
              <p className="text-xs sm:text-sm leading-relaxed tracking-[0.15em] uppercase text-white/80 font-medium mb-6">
                LUXURY STREETWEAR FOR THOSE WHO REFUSE TO CONFORM. CRAFTED WITH PRECISION.
              </p>
              <Link
                to="/shop"
                className="inline-block bg-white text-black px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#C9A962] hover:text-white transition-colors"
              >
                Shop Now →
              </Link>
            </div>

            {/* Floating Lookbook Card (Matching reference bottom-right) */}
            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative w-28 sm:w-36 aspect-[3/4] border border-white/20 bg-[#141418] cursor-pointer overflow-hidden group hover:border-[#C9A962] transition"
            >
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80"
                alt="Runway reel preview"
                className="w-full h-full object-cover filter grayscale brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center">
                <div className="w-8 h-8 rounded-full border border-white bg-black/60 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="text-[8px] font-mono tracking-widest uppercase text-white/80">
                  LOOKBOOK
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          CORE CATEGORIES (MINIMALIST TILES)
          ======================================================== */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-8 border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[#C9A962] text-[10px] font-mono tracking-[0.25em] uppercase mb-1">
              INDEX 01
            </p>
            <h2 className="font-editorial-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Disciplines
            </h2>
          </div>
          <Link to="/shop" className="text-xs text-white/50 hover:text-white transition tracking-wider uppercase">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {[
            {
              name: "Outerwear",
              image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
            },
            {
              name: "Tops",
              image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80",
            },
            {
              name: "Bottoms",
              image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
            },
            {
              name: "Accessories",
              image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80",
            },
          ].map((cat) => (
            <Link
              key={cat.name}
              to="/shop"
              className="group relative aspect-[3/4] overflow-hidden border border-white/[0.08] bg-[#121215] flex flex-col justify-end p-4 sm:p-6 hover:border-white/40 transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110 brightness-75 group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="font-editorial-heading text-base sm:text-lg font-bold tracking-wider uppercase text-white group-hover:text-[#C9A962] transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================
          CURATED DROPS (CLEAN & RESPONSIVE GRID)
          ======================================================== */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/[0.08]">
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-white/[0.08]">
          <div>
            <p className="text-[#C9A962] text-[10px] font-mono tracking-[0.25em] uppercase mb-1">
              INDEX 02
            </p>
            <h2 className="font-editorial-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              Featured Pieces
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs text-white/50 hover:text-white transition tracking-wider uppercase"
          >
            Explore Shop →
          </Link>
        </div>

        {/* 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group border border-white/[0.08] bg-[#111114] flex flex-col justify-between overflow-hidden hover:border-white/30 transition"
            >
              <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-[#161619] block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-500"
                />
                {product.isLimited && (
                  <span className="absolute top-2 left-2 text-[8px] font-mono font-bold text-black bg-[#C9A962] px-1.5 py-0.5 uppercase tracking-widest">
                    LIMITED
                  </span>
                )}
              </Link>

              <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-editorial-heading text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-[#C9A962] transition line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs font-mono text-white/60 mt-1">
                    ${product.price}
                  </p>
                </div>

                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className={`mt-3 w-full py-2 text-[10px] font-semibold tracking-[0.15em] uppercase border transition-colors ${
                    addedId === product.id
                      ? "bg-[#C9A962] text-black border-[#C9A962]"
                      : "bg-transparent border-white/20 hover:border-white hover:bg-white hover:text-black text-white"
                  }`}
                >
                  {addedId === product.id ? "✓ Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          MINIMALIST PHILOSOPHY STATEMENT
          ======================================================== */}
      <section className="border-t border-white/[0.08] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#09090b]">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C9A962]">
            OUR ETHOS
          </p>
          <h2 className="font-editorial-heading text-2xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Architectural Silhouettes. Monolithic Textiles.
          </h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-mono max-w-lg mx-auto">
            We reject disposable speed cycles in favor of permanent precision. 480 GSM materials crafted for longevity.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-block border border-white/40 hover:border-white px-6 py-3 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition"
            >
              Read About Noir Supply →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          CLEAN LOOKBOOK MODAL
          ======================================================== */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#111114] border border-white/20 p-4 sm:p-6 shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-xl z-20"
            >
              ✕
            </button>
            <div className="mb-3">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A962] font-mono">
                SS26 RUNWAY
              </span>
              <h3 className="font-editorial-heading text-lg font-bold text-white mt-0.5">
                DEFINE OUTRAGE — EDITORIAL MOTION
              </h3>
            </div>
            
            <div className="relative aspect-video bg-black overflow-hidden border border-white/10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&auto=format&fit=crop&q=85"
                alt="Runway film presentation"
                className="w-full h-full object-cover filter contrast-125 brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <span className="w-12 h-12 rounded-full border border-white bg-white/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
                <p className="font-editorial-title italic text-xl sm:text-2xl text-white">
                  "Built with Precision. Worn without Permission."
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-between items-center text-xs text-white/50 font-mono">
              <span>LOOKBOOK 01</span>
              <Link
                to="/shop"
                onClick={() => setVideoModalOpen(false)}
                className="text-[#C9A962] hover:underline uppercase tracking-wider"
              >
                Shop Collection →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}