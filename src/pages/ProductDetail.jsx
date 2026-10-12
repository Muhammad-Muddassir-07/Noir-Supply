import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-white/60 font-mono text-sm">ARCHIVE ITEM NOT FOUND.</p>
        <Link to="/shop" className="text-[#C9A962] underline uppercase tracking-wider text-xs">
          Return to Archive Collection
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/40 tracking-widest mb-8">
        <Link to="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-white">Collection</Link>
        <span>/</span>
        <span className="text-white/80">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Single Image Showcase */}
        <div className="lg:col-span-7">
          <div className="border border-white/10 bg-[#121215] aspect-[3/4] overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover filter contrast-110"
            />
            {product.isLimited && (
              <div className="absolute top-4 left-4 bg-[#C9A962] text-black text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest">
                LIMITED EDITION • 1/150
              </div>
            )}
          </div>
        </div>

        {/* Product Spec & Acquisition */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C9A962] font-mono">
                {product.category}
              </span>
              <span className="w-6 h-[1px] bg-[#C9A962]"></span>
            </div>

            <h1 className="font-editorial-heading text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mb-2">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-6">
              <p className="font-mono text-2xl font-bold text-white tracking-wider">
                ${product.price} USD
              </p>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#22c55e]">
                ● In Stock for Dispatch
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs uppercase tracking-widest font-mono text-white/70">
                  Select Silhouette Size
                </span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 underline cursor-pointer hover:text-white">
                  Size Guide
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`py-3 text-xs font-mono font-bold tracking-widest uppercase border transition-all ${
                      selectedSize === s
                        ? "bg-white text-black border-white shadow-md"
                        : "border-white/15 text-white/60 hover:border-white hover:text-white bg-[#111114]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications Matrix */}
            <div className="border border-white/10 bg-[#101013] p-5 mb-8 space-y-3 font-mono text-xs">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A962] border-b border-white/[0.06] pb-2">
                Technical Specifications
              </p>
              <div className="flex justify-between text-white/60">
                <span>TEXTILE SPEC</span>
                <span className="text-white font-medium">{product.details?.material}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>TAILOR FIT</span>
                <span className="text-white font-medium">{product.details?.fit}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>COLORWAY</span>
                <span className="text-white font-medium">{product.details?.color}</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">Units</span>
              <div className="flex items-center border border-white/20 bg-[#101013]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  −
                </button>
                <span className="w-12 text-center text-xs font-mono font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-xl border ${
                added
                  ? "bg-[#C9A962] text-black border-[#C9A962]"
                  : "bg-white text-black border-white hover:bg-[#C9A962] hover:text-white hover:border-[#C9A962]"
              }`}
            >
              {added ? "✓ Garment Added to Bag" : `Add to Bag — $${product.price * quantity}`}
            </button>

            {/* Delivery Assurance */}
            <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-2 text-[11px] font-mono text-white/50 tracking-wider">
              <p>✔ COMPLIMENTARY EXPRESS WORLDWIDE COURIER</p>
              <p>✔ 14-DAY ARCHIVAL EXCHANGE PROTOCOL</p>
              <p>✔ DISPATCHED IN CUSTOM NOIR PACKAGING</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}