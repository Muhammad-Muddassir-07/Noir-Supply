import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Pakistan",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.postalCode.trim()) newErrors.postalCode = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    clearCart();
  };

  // Empty cart redirect
  if (cart.length === 0 && !submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
        <p className="text-[#A3A3A3]">Your cart is empty.</p>
        <Link to="/shop" className="text-white underline">
          Go to Shop
        </Link>
      </div>
    );
  }

  // Success State
  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="w-16 h-16 border-2 border-[#22C55E] flex items-center justify-center text-[#22C55E] text-2xl">
          ✓
        </div>
        <h1 className="font-[Syne] text-3xl font-bold">Order Placed</h1>
        <p className="text-[#A3A3A3] max-w-md">
          Thank you for your order. This is a demo checkout — no real payment was processed.
        </p>
        <Link
          to="/shop"
          className="bg-white text-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-[#C9A962] transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
      <h1 className="font-[Syne] text-3xl font-bold mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
                First Name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                  errors.firstName ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
                Last Name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                  errors.lastName ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                errors.email ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
              Phone
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                errors.phone ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
              Address
            </label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                errors.address ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
              }`}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
                City
              </label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                  errors.city ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
                }`}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider">
                Postal Code
              </label>
              <input
                name="postalCode"
                value={form.postalCode}
                onChange={handleChange}
                className={`w-full bg-[#141414] border px-4 py-3 text-sm focus:outline-none ${
                  errors.postalCode ? "border-red-500" : "border-[#2A2A2A] focus:border-white"
                }`}
              />
              {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#C9A962] transition mt-4"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="border border-[#2A2A2A] bg-[#141414] p-6 h-fit">
          <h2 className="font-[Syne] text-lg font-bold mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-[#A3A3A3]">
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#2A2A2A] pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}