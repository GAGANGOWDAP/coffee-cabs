import { useState, useMemo } from "react";
import { Package as PackageIcon, Filter, Search, ArrowUpDown, X } from "lucide-react";
import { PACKAGES } from "../data/packages";
import PackageCard from "../components/PackageCard";
import TripPlanner from "../components/TripPlanner";
import SEO from "../components/SEO";
import { getPackagesIndexSchema } from "../utils/seoSchemas";

export default function PackagesIndexPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");

  const categories = [
    "All",
    "Bengaluru nearby 1-day",
    "Mysuru",
    "Coorg",
    "Chikkamagaluru",
    "Coastal",
    "Hampi/Badami/Pattadakal",
    "Grand 5–7 day Karnataka",
    "Wildlife"
  ];

  const durations = [
    { label: "All Durations", value: "All" },
    { label: "1 Day", value: "1 Day" },
    { label: "2 Days", value: "2 Days" },
    { label: "3 Days", value: "3 Days" },
    { label: "4 Days", value: "4 Days" },
    { label: "5+ Days", value: "5+" }
  ];

  const filteredAndSortedPackages = useMemo(() => {
    let result = PACKAGES.filter((pkg) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(q);
        const matchesRoute = pkg.route.toLowerCase().includes(q);
        const matchesCat = pkg.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesRoute && !matchesCat) return false;
      }

      // Category filter
      if (selectedCategory !== "All") {
        if (!pkg.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
          return false;
        }
      }

      // Duration filter
      if (selectedDuration !== "All") {
        const d = pkg.duration.toLowerCase();
        if (selectedDuration === "1 Day" && !d.includes("1 day")) return false;
        if (selectedDuration === "2 Days" && !d.includes("2 day")) return false;
        if (selectedDuration === "3 Days" && !d.includes("3 day")) return false;
        if (selectedDuration === "4 Days" && !d.includes("4 day")) return false;
        if (selectedDuration === "5+" && !(d.includes("5 day") || d.includes("6 day") || d.includes("7 day") || d.includes("10 day"))) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === "a-z") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "duration-asc") {
      result = [...result].sort((a, b) => a.duration.localeCompare(b.duration));
    } else if (sortBy === "duration-desc") {
      result = [...result].sort((a, b) => b.duration.localeCompare(a.duration));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDuration, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDuration("All");
    setSortBy("default");
  };

  return (
    <div className="pt-20 bg-[#FFFDF7] text-[#4B3832] min-h-screen">
      <SEO
        title="145+ Outstation Tour Packages from Bengaluru"
        description="Explore 145+ custom outstation tour packages from Bengaluru. Heritage, Hill stations, Waterfalls, Wildlife & Coastal tours with private chauffeur vehicles."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/travel/packages"
        schemaJson={getPackagesIndexSchema()}
      />
      {/* HEADER HERO */}
      <section className="bg-[#F5E6CA] border-b border-[#DCC7AA] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#6F4E37] bg-[#FFFDF7] px-4 py-1.5 rounded-full border border-[#DCC7AA] mb-4">
            <PackageIcon size={16} />
            <span>CUSTOM CHAUFFEUR TOUR PACKAGES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4B3832] tracking-tight mb-4">
            Outstation Tour Packages from Bengaluru
          </h1>

          <p className="text-[#6F4E37] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Hassle-free outstation holidays with dedicated vehicles and experienced drivers. Enjoy transparent owner-approved pricing on enquiry.
          </p>
        </div>
      </section>

      {/* TRIP PLANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <TripPlanner />
      </section>

      {/* PACKAGES SEARCH & FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 space-y-6 shadow-sm">
          {/* Search & Sort header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6F4E37]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages by title or destination (e.g., Mysuru, Coorg, Hampi, Waterfalls)..."
                className="w-full bg-[#FFFDF7] border border-[#DCC7AA] rounded-xl pl-11 pr-10 py-3 text-sm text-[#4B3832] placeholder-[#6F4E37]/60 focus:outline-none focus:border-[#6F4E37]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F4E37] hover:text-[#4B3832]"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="flex items-center justify-end gap-2">
              <ArrowUpDown size={16} className="text-[#6F4E37]" />
              <span className="text-xs text-[#6F4E37] font-semibold">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FFFDF7] text-[#4B3832] border border-[#DCC7AA] rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:border-[#6F4E37]"
              >
                <option value="default">Default Catalog Order</option>
                <option value="a-z">Title (A – Z)</option>
                <option value="duration-asc">Duration (Short to Long)</option>
                <option value="duration-desc">Duration (Long to Short)</option>
              </select>
            </div>
          </div>

          {/* Duration Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#6F4E37] uppercase tracking-wider block mb-2">
              BY DURATION:
            </span>
            <div className="flex flex-wrap gap-2">
              {durations.map((dur) => (
                <button
                  key={dur.value}
                  onClick={() => setSelectedDuration(dur.value)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedDuration === dur.value
                      ? "bg-[#6F4E37] text-[#FFFDF7] font-extrabold border-[#6F4E37]"
                      : "bg-[#FFFDF7] text-[#4B3832] border-[#DCC7AA] hover:border-[#6F4E37]"
                  }`}
                >
                  {dur.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#6F4E37] uppercase tracking-wider block mb-2">
              BY REGION & CATEGORY:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#6F4E37] text-[#FFFDF7] font-extrabold border-[#6F4E37]"
                      : "bg-[#FFFDF7] text-[#4B3832] border-[#DCC7AA] hover:border-[#6F4E37]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-lg font-bold text-[#4B3832]">
            <Filter size={18} className="text-[#6F4E37]" />
            <span>PACKAGES MATCHING FILTERS ({filteredAndSortedPackages.length} / {PACKAGES.length})</span>
          </div>

          {(searchQuery || selectedCategory !== "All" || selectedDuration !== "All" || sortBy !== "default") && (
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-[#6F4E37] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredAndSortedPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FFFDF7] rounded-3xl border border-[#DCC7AA]">
            <h3 className="text-lg font-bold text-[#4B3832] mb-2">No Packages Found</h3>
            <p className="text-sm text-[#6F4E37] mb-4">
              No tour packages match your active search terms, duration, or category filters.
            </p>
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-[#FFFDF7] bg-[#6F4E37] px-5 py-2.5 rounded-xl border border-[#6F4E37] hover:bg-[#4B3832] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
