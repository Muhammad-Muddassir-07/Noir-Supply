import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const freeShippingThreshold = 250;
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "NOIR15" || promoCode.toUpperCase() === "VIP") {
      setDiscount(0.15);
      setPromoApplied(true);
    } else {
      alert("Invalid archive voucher code. Try 'NOIR15' for 15% VIP member privilege.");
    }
  };

  const finalTotal = cartTotal * (1 - discount);

  if (cart.length === 0) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center gap-6 px-4 text-center max-w-xl mx-auto">
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#C9A962]">
          ATELIER BAG
        </span>
        <h1 className="font-editorial-heading text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
          Your Bag is Empty
        </h1>
        <p className="text-sm text-white/50 leading-relaxed font-mono">
          No silhouettes currently reserved in your allocation session. Explore the SS26 Archive drops.
        </p>
        <Link
          to="/shop"
          className="bg-white text-black px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#C9A962] hover:text-white transition shadow-xl"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-white/[0.08] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#C9A962] text-[11px] tracking-[0.3em] uppercase font-mono">
              CURATED ALLOCATION
            </span>
            <span className="w-8 h-[1px] bg-[#C9A962]"></span>
          </div>
          <h1 className="font-editorial-heading text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
            Client Bag ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </h1>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition underline"
        >
          Clear Entire Bag
        </button>
      </div>

      {/* Free Shipping Tier Notification */}
      <div className="mb-10 p-4 border border-white/10 bg-[#101013] font-mono text-xs">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/70">
            {amountToFreeShipping > 0
              ? `Add $${amountToFreeShipping.toFixed(2)} more for COMPLIMENTARY WORLDWIDE COURIER`
              : "✓ QUALIFIED FOR COMPLIMENTARY WORLDWIDE COURIER"}
          </span>
          <span className="text-[#C9A962] font-bold">{progressPercent.toFixed(0)}%</span>
        </div>
        <div className="w-full h-1 bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#C9A962] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 border border-white/[0.08] bg-[#111114] p-5 sm:p-6"
            >
              {/* Image */}
              <Link to={`/product/${item.id}`} className="shrink-0">
                <div className="w-28 h-36 bg-[#161619] overflow-hidden border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover filter contrast-110"
                  />
                </div>
              </Link>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-[#C9A962] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <Link
                        to={`/product/${item.id}`}
                        className="font-editorial-heading text-lg font-bold block hover:text-[#C9A962] transition text-white"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <span className="font-mono text-base font-bold text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-mono mt-1">
                    Unit Price: ${item.price} USD
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/[0.06]">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-white/20 bg-black/40">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition text-xs font-mono"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-xs font-mono font-bold text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition text-xs font-mono"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-red-400 transition"
                  >
                    Remove Garment ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Checkout Drawer */}
        <div className="lg:col-span-4 border border-white/[0.08] bg-[#111114] p-6 sm:p-8 h-fit space-y-6">
          <h2 className="font-editorial-heading text-xl font-bold uppercase tracking-wider text-white border-b border-white/[0.08] pb-4">
            Allocation Summary
          </h2>

          {/* Promo Box */}
          <form onSubmit={applyPromo} className="flex gap-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="CODE: NOIR15"
              className="flex-1 bg-black/60 border border-white/15 px-3 py-2 text-xs font-mono uppercase text-white placeholder-white/30 focus:outline-none focus:border-[#C9A962]"
            />
            <button
              type="submit"
              className="bg-white/10 hover:bg-white hover:text-black border border-white/20 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white transition"
            >
              Apply
            </button>
          </form>

          {promoApplied && (
            <p className="text-[11px] font-mono text-[#22c55e]">
              ✓ 15% VIP Allocation discount applied.
            </p>
          )}

          <div className="space-y-3 font-mono text-xs text-white/70">
            <div className="flex justify-between">
              <span>GARMENT SUBTOTAL</span>
              <span className="text-white">${cartTotal.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-[#22c55e]">
                <span>VIP DISCOUNT (15%)</span>
                <span>-${(cartTotal * discount).toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>EXPRESS COURIER</span>
              <span className="text-[#C9A962]">
                {cartTotal >= freeShippingThreshold ? "COMPLIMENTARY" : "$25.00"}
              </span>
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between font-bold text-base text-white">
              <span>FINAL TOTAL</span>
              <span className="font-mono text-lg">
                ${(finalTotal + (cartTotal >= freeShippingThreshold ? 0 : 25)).toFixed(2)} USD
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="block w-full bg-white text-black text-center py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#C9A962] hover:text-white transition shadow-xl"
          >
            Proceed to Checkout →
          </Link>

          <Link
            to="/shop"
            className="block text-center text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition pt-2"
          >
            ← Add Further Silhouettes
          </Link>
        </div>
      </div>
    </div>
  );
}