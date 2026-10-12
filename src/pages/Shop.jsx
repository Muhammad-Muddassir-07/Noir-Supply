import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get("search") || "";

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState(searchParam);

  const categories = ["All", "Outerwear", "Tops", "Bottoms", "Accessories"];

  let filtered = products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      (p.description && p.description.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (sort === "price-low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const clearSearch = () => {
    setSearch("");
    setSearchParams({});
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-10 border-b border-white/[0.08] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#C9A962] text-[11px] tracking-[0.3em] uppercase font-mono">
              ARCHIVE REPOSITORY
            </span>
            <span className="w-8 h-[1px] bg-[#C9A962]"></span>
          </div>
          <h1 className="font-editorial-heading text-3xl sm:text-5xl font-bold tracking-wider uppercase text-white">
            SS26 Collection Index
          </h1>
        </div>

        <div className="text-xs font-mono uppercase text-white/50 tracking-widest">
          <span>{filtered.length} AVAILABLE PIECES</span>
          <span className="mx-2">•</span>
          <span>LIMITED ALLOCATION</span>
        </div>
      </div>

      {/* Active Search Badge */}
      {search && (
        <div className="mb-6 flex items-center gap-3 bg-[#131317] border border-white/10 px-4 py-2 text-xs">
          <span className="text-white/60">Filtering by term:</span>
          <span className="text-[#C9A962] font-semibold">"{search}"</span>
          <button
            onClick={clearSearch}
            className="ml-auto text-white/50 hover:text-white underline text-[11px] uppercase tracking-wider"
          >
            Clear Filter ✕
          </button>
        </div>
      )}

      {/* Filters & Sorting Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-white/[0.08] pb-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-200 border ${
                category === cat
                  ? "bg-white text-black border-white shadow-lg"
                  : "border-white/15 text-white/60 hover:border-white hover:text-white bg-[#111114]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Inline Search */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by keyword..."
              className="bg-[#111114] border border-white/15 text-xs px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-[#C9A962] w-48 sm:w-60 tracking-wider"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-2.5 text-white/40 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-[#111114] border border-white/15 text-xs px-4 py-2.5 text-white focus:outline-none focus:border-[#C9A962] tracking-wider uppercase"
          >
            <option value="newest">Sort: Newest Drop</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid - 2 cols on mobile, up to 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 border border-white/[0.08] bg-[#0f0f12]">
          <p className="font-editorial-heading text-xl text-white/80 uppercase tracking-widest mb-2">
            No matching items found
          </p>
          <p className="text-xs text-white/50 tracking-wider mb-6">
            Try adjusting your category selection or search keywords.
          </p>
          <button
            onClick={() => {
              setCategory("All");
              clearSearch();
            }}
            className="inline-block border border-white px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}