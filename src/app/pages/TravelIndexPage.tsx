import { useState, useMemo } from "react";
import { Compass, Filter } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import TravelSearch from "../components/TravelSearch";
import SEO from "../components/SEO";
import { getTravelIndexSchema } from "../utils/seoSchemas";

export default function TravelIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedDistance, setSelectedDistance] = useState<string>("All");

  const categories = [
    "All",
    "Western Ghats",
    "Nature",
    "Heritage",
    "Pilgrimage",
    "Wildlife",
    "Beach",
    "Hill Station",
    "Adventure",
    "Family"
  ];

  const regions = [
    "All",
    "Greater Bengaluru",
    "Mysuru Region",
    "Kodagu (Coorg)",
    "Malnad & Central Ghats",
    "Coastal Canara",
    "Deccan & North Heritage"
  ];

  const distanceRanges = [
    { label: "All Distances", value: "All" },
    { label: "Under 100 km", value: "<100" },
    { label: "100 km – 250 km", value: "100-250" },
    { label: "250 km – 400 km", value: "250-400" },
    { label: "400+ km", value: "400+" }
  ];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      // Category Filter
      if (selectedCategory !== "All" && !d.categories.includes(selectedCategory)) {
        return false;
      }

      // Region Filter
      if (selectedRegion !== "All" && d.region.toLowerCase() !== selectedRegion.toLowerCase()) {
        return false;
      }

      // Distance Filter
      const kmNum = parseInt(d.approximateDistanceFromBengaluru.replace(/[^0-9]/g, "")) || 0;
      if (selectedDistance === "<100" && kmNum >= 100) return false;
      if (selectedDistance === "100-250" && (kmNum < 100 || kmNum > 250)) return false;
      if (selectedDistance === "250-400" && (kmNum < 250 || kmNum > 400)) return false;
      if (selectedDistance === "400+" && kmNum <= 400) return false;

      return true;
    });
  }, [selectedCategory, selectedRegion, selectedDistance]);

  return (
    <div className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title="100 Karnataka Travel Destinations & Outstation Cabs"
        description="Explore 100 curated Karnataka travel destinations from Bengaluru. Filter by region, distance, and categories. Rent Toyota Innova Crysta & Force Urbania cabs."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/travel"
        schemaJson={getTravelIndexSchema()}
      />
      {/* HEADER HERO */}
      <section className="bg-[#EDE5D8] border-b border-[#DDD5C8] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#23483A] bg-white px-4 py-1.5 rounded-full border border-[#DDD5C8] mb-5 shadow-xs">
            <Compass size={15} />
            <span>KARNATAKA TRAVEL GUIDE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-extrabold text-[#4A3025] tracking-tight mb-4 max-w-4xl mx-auto leading-tight sm:leading-snug">
            Explore Karnataka from Bengaluru
          </h1>

          <p className="text-[#6F6A63] text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Discover 100 curated destinations across Karnataka — from heritage towns and hill stations to waterfalls, wildlife sanctuaries, and coastal escapes.
          </p>

          {/* Unified Search Component */}
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <TravelSearch placeholder="Search destinations — e.g. Mysuru, Gokarna, Coorg, Hampi" />
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS & GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Filter Pills Bar */}
        <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 mb-10 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#DDD5C8] pb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#252525]">
              <Filter size={18} className="text-[#23483A]" />
              <span>EXPLORE & FILTER DESTINATIONS ({filteredDestinations.length} / {DESTINATIONS.length})</span>
            </div>

            {(selectedCategory !== "All" || selectedRegion !== "All" || selectedDistance !== "All") && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedRegion("All");
                  setSelectedDistance("All");
                }}
                className="text-xs font-bold text-[#23483A] hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#6F6A63] uppercase tracking-wider block mb-2">
              BY CATEGORY:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#4A3025] text-white border-[#4A3025]"
                      : "bg-[#F7F3EC] text-[#6F6A63] border-[#DDD5C8] hover:border-[#23483A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#6F6A63] uppercase tracking-wider block mb-2">
              BY REGION:
            </span>
            <div className="flex flex-wrap gap-2">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedRegion === reg
                      ? "bg-[#4A3025] text-white border-[#4A3025]"
                      : "bg-[#F7F3EC] text-[#6F6A63] border-[#DDD5C8] hover:border-[#23483A]"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Distance Filter Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#6F6A63] uppercase tracking-wider block mb-2">
              BY DISTANCE FROM BENGALURU:
            </span>
            <div className="flex flex-wrap gap-2">
              {distanceRanges.map((dist) => (
                <button
                  key={dist.value}
                  onClick={() => setSelectedDistance(dist.value)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedDistance === dist.value
                      ? "bg-[#4A3025] text-white border-[#4A3025]"
                      : "bg-[#F7F3EC] text-[#6F6A63] border-[#DDD5C8] hover:border-[#23483A]"
                  }`}
                >
                  {dist.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DESTINATION CARDS GRID */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DDD5C8]">
            <h3 className="text-lg font-bold text-[#252525] mb-2">No Destinations Found</h3>
            <p className="text-sm text-[#6F6A63] mb-4 font-medium">
              No destinations match your active category, region, or distance filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedRegion("All");
                setSelectedDistance("All");
              }}
              className="text-xs font-bold text-[#4A3025] bg-[#EDE5D8] px-5 py-2.5 rounded-xl border border-[#DDD5C8] hover:bg-[#DDD5C8] transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
