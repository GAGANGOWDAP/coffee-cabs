import { useState } from "react";
import { Package as PackageIcon, Filter } from "lucide-react";
import { PACKAGES } from "../data/packages";
import PackageCard from "../components/PackageCard";
import TripPlanner from "../components/TripPlanner";
import SEO from "../components/SEO";

export default function PackagesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (selectedCategory === "All") return true;
    return pkg.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      <SEO
        title="Outstation Tour Packages from Bengaluru"
        description="Explore 145+ custom outstation tour packages from Bengaluru. Heritage, Hill stations, Waterfalls, Wildlife & Coastal tours with private chauffeur vehicles."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/travel/packages"
      />
      {/* HEADER HERO */}
      <section className="bg-gradient-to-b from-[#132333] to-[#08111C] border-b border-[#AEB7C2]/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C6A15B] bg-[#08111C] px-4 py-1.5 rounded-full border border-[#C6A15B]/30 mb-4">
            <PackageIcon size={16} />
            <span>CUSTOM CHAUFFEUR TOUR PACKAGES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8] tracking-tight mb-4">
            Outstation Tour Packages from Bengaluru
          </h1>

          <p className="text-[#AEB7C2] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Hassle-free outstation holidays with dedicated vehicles and experienced drivers. Enjoy transparent owner-approved pricing on enquiry.
          </p>
        </div>
      </section>

      {/* TRIP PLANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <TripPlanner />
      </section>

      {/* PACKAGES CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-lg font-bold text-[#F4F1E8]">
            <Filter size={18} className="text-[#C6A15B]" />
            <span>ALL TOUR PACKAGES ({filteredPackages.length})</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === cat
                    ? "bg-[#C6A15B] text-[#08111C] font-extrabold border-[#C6A15B]"
                    : "bg-[#132333] text-[#AEB7C2] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>
    </div>
  );
}
