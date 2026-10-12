import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="group border border-white/[0.08] bg-[#111114] flex flex-col justify-between overflow-hidden hover:border-white/40 transition-all duration-300">
      {/* Image with badges */}
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-[#18181c] block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700"
        />
        
        {/* Editorial Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isLimited && (
            <span className="text-[9px] font-mono font-bold text-black bg-[#C9A962] px-2 py-0.5 uppercase tracking-widest shadow-md">
              LIMITED 1/150
            </span>
          )}
          <span className="text-[9px] font-mono text-white/80 bg-black/70 backdrop-blur-sm px-2 py-0.5 uppercase tracking-widest border border-white/10">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-[#111114]">
        <div>
          <div className="flex justify-between items-baseline gap-2 mb-1.5">
            <Link to={`/product/${product.id}`}>
              <h3 className="font-editorial-heading text-sm font-semibold tracking-wide text-white group-hover:text-[#C9A962] transition-colors">
                {product.name}
              </h3>
            </Link>
            <span className="text-sm font-mono font-bold text-white tracking-wider">
              ${product.price}
            </span>
          </div>
          <p className="text-xs text-white/50 line-clamp-1">
            {product.details?.material || product.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-4 border-t border-white/[0.06]">
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-200 border ${
              added
                ? "bg-[#C9A962] text-black border-[#C9A962]"
                : "bg-transparent border-white/20 hover:border-white hover:bg-white hover:text-black text-white"
            }`}
          >
            {added ? "✓ Added to Bag" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}