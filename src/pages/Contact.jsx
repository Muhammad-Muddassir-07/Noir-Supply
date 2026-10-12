import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", inquiry: "Order Allocation", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim() || !form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", inquiry: "Order Allocation", message: "" });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C9A962] text-[11px] tracking-[0.3em] uppercase font-mono">
            DIRECT DESK
          </span>
          <span className="w-8 h-[1px] bg-[#C9A962]"></span>
        </div>
        <h1 className="font-editorial-heading text-4xl sm:text-6xl font-bold uppercase tracking-wider text-white">
          Client Concierge
        </h1>
        <p className="text-sm text-white/60 tracking-wider mt-4 font-mono max-w-lg">
          Inquiries regarding garment sizing, custom fittings, private lookbook access, or international courier routing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-7 border border-white/[0.08] bg-[#111114] p-8 sm:p-12">
          {success ? (
            <div className="border border-[#C9A962]/40 bg-[#141419] p-10 text-center space-y-4">
              <span className="text-3xl">✦</span>
              <p className="font-editorial-heading text-2xl font-bold text-white uppercase tracking-wider">
                Transmission Received
              </p>
              <p className="text-xs text-white/60 font-mono leading-relaxed max-w-md mx-auto">
                Your concierge dispatch has reached the Noir Supply Paris atelier desk. A client specialist will respond within 12 operational hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-6 border border-white text-white px-8 py-3 text-xs uppercase font-semibold tracking-[0.2em] hover:bg-white hover:text-black transition"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[11px] text-white/60 mb-2 uppercase tracking-[0.2em] font-mono">
                  Full Name / Client
                </label>
                <input
                  name="name"
                  placeholder="e.g. Elena Rostova"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full bg-black/60 border px-4 py-3.5 text-xs text-white uppercase tracking-wider focus:outline-none ${
                    errors.name ? "border-red-500" : "border-white/15 focus:border-[#C9A962]"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-[11px] text-white/60 mb-2 uppercase tracking-[0.2em] font-mono">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="client@noirsupply.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full bg-black/60 border px-4 py-3.5 text-xs text-white tracking-wider focus:outline-none ${
                    errors.email ? "border-red-500" : "border-white/15 focus:border-[#C9A962]"
                  }`}
                />
                {errors.email && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[11px] text-white/60 mb-2 uppercase tracking-[0.2em] font-mono">
                  Inquiry Discipline
                </label>
                <select
                  name="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  className="w-full bg-[#111114] border border-white/15 px-4 py-3.5 text-xs text-white uppercase tracking-wider focus:outline-none focus:border-[#C9A962]"
                >
                  <option value="Order Allocation">Order Allocation & Courier</option>
                  <option value="Garment Sizing">Garment Sizing & Fit Advice</option>
                  <option value="Private Showroom">Private Showroom Appointment</option>
                  <option value="Archival Restock">Archival Restock Requests</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-white/60 mb-2 uppercase tracking-[0.2em] font-mono">
                  Message / Specification
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Specify item ID, measurements, or order identifier..."
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full bg-black/60 border px-4 py-3.5 text-xs text-white tracking-wider focus:outline-none resize-none ${
                    errors.message ? "border-red-500" : "border-white/15 focus:border-[#C9A962]"
                  }`}
                />
                {errors.message && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#C9A962] hover:text-white transition shadow-xl"
              >
                Transmit Inquiry →
              </button>
            </form>
          )}
        </div>

        {/* Concierge Coordinates */}
        <div className="lg:col-span-5 space-y-8 font-mono text-xs">
          <div className="border border-white/[0.08] bg-[#111114] p-8 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A962]">
              GLOBAL ATELIER
            </span>
            <h3 className="font-editorial-heading text-xl font-bold uppercase text-white">
              Paris Office
            </h3>
            <p className="text-white/60 leading-relaxed">
              18 Rue du Faubourg Saint-Honoré<br />
              75008 Paris, France
            </p>
            <p className="text-white/40 pt-2 border-t border-white/[0.06]">
              By appointment only.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-[#111114] p-8 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A962]">
              DIRECT CHANNELS
            </span>
            <div className="space-y-3 text-white/70">
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>CONCIERGE EMAIL</span>
                <span className="text-white">atelier@noirsupply.com</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>PRIVATE WHATSAPP</span>
                <span className="text-white">+33 1 42 68 00 26</span>
              </div>
              <div className="flex justify-between">
                <span>INSTAGRAM ARCHIVE</span>
                <span className="text-white">@noirsupply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}