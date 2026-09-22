import { useState } from "react";
import { Search, MapPin, ArrowRight, Compass, Filter } from "lucide-react";
import { Link } from "react-router";
import { DESTINATIONS } from "../data/destinations";

export default function PackagesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const categories = [
    "All",
    "Hill Station",
    "Heritage & Forts",
    "Beach Escapes",
    "Wildlife & Nature",
    "Pilgrimage",
    "Lakes & Waterfalls",
  ];

  const filtered = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.state.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const defaultFallbackImg = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop";

  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#132333] border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A15B] mb-3 font-extrabold bg-[#08111C] border border-[#AEB7C2]/15 px-4 py-1.5 rounded-full shadow-sm">
            <Compass size={14} className="text-[#C6A15B]" /> Coffee Cabs Outstation Packages
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#F4F1E8] mb-3">
            200 Outstation Packages Across India
          </h1>
          <p className="text-[#AEB7C2] text-sm sm:text-base max-w-xl mx-auto">
            Browse famous tour packages from Bangalore. Select any destination to view details and request a vehicle booking enquiry with Coffee Cabs.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar with Dropdown Filter */}
      <section className="py-6 bg-[#08111C]/90 border-b border-[#AEB7C2]/15 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AEB7C2]" />
              <input
                type="text"
                placeholder="Search destination or state (e.g., Mysore, Coorg, Ooty, Goa, Tirupati)..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#132333] text-[#F4F1E8] placeholder:text-[#AEB7C2] pl-12 pr-4 py-3.5 rounded-2xl border border-[#AEB7C2]/25 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors shadow-sm font-medium"
              />
            </div>

            {/* Category Dropdown Filter */}
            <div className="relative w-full sm:w-64">
              <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AEB7C2] pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#132333] text-[#F4F1E8] font-bold pl-11 pr-8 py-3.5 rounded-2xl border border-[#AEB7C2]/25 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors shadow-sm appearance-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#08111C] text-[#F4F1E8]">
                    {cat === "All" ? "Filter by Category: All" : cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#C6A15B]">
                ▼
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Packages */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center mb-6 text-xs text-[#AEB7C2] font-semibold">
            <span>Showing {currentItems.length} of {filtered.length} Packages</span>
            <span>Page {currentPage} of {totalPages || 1}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentItems.map((d) => (
              <Link
                key={d.slug}
                to={`/packages/${d.slug}`}
                className="bg-[#132333] rounded-2xl overflow-hidden border border-[#AEB7C2]/15 hover:border-[#C6A15B]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#08111C] overflow-hidden relative">
                    <img
                      src={d.image}
                      alt={`${d.name} Coffee Cabs Package`}
                      onError={(e) => {
                        e.currentTarget.src = defaultFallbackImg;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 right-3 bg-[#08111C]/90 backdrop-blur-md text-[#C6A15B] border border-[#C6A15B]/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {d.distance} km
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-wider text-[#AEB7C2] font-bold mb-1">
                      {d.state} · {d.category}
                    </div>
                    <h3 className="text-base font-bold text-[#F4F1E8] mb-1 group-hover:text-[#C6A15B] transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-[11px] text-[#AEB7C2] flex items-center gap-1">
                      <MapPin size={11} className="text-[#C6A15B]" /> {d.time} travel time
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="pt-3 border-t border-[#AEB7C2]/15 flex items-center justify-between text-xs font-bold text-[#C6A15B] group-hover:translate-x-0.5 transition-transform">
                    <span>Request Enquiry</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-4 py-2 bg-[#132333] text-[#F4F1E8] text-xs font-bold rounded-xl border border-[#AEB7C2]/15 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#132333]/80"
              >
                Previous
              </button>
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 text-xs font-bold rounded-xl transition-all ${
                      currentPage === pageNum
                        ? "bg-[#C6A15B] text-[#08111C]"
                        : "bg-[#132333] text-[#F4F1E8] border border-[#AEB7C2]/15 hover:bg-[#132333]/80"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-4 py-2 bg-[#132333] text-[#F4F1E8] text-xs font-bold rounded-xl border border-[#AEB7C2]/15 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#132333]/80"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

