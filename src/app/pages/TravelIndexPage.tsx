import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Compass, Filter, MapPin, Sparkles } from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import TravelSearch from "../components/TravelSearch";

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
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* HEADER HERO */}
      <section className="bg-gradient-to-b from-[#132333] to-[#08111C] border-b border-[#AEB7C2]/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C6A15B] bg-[#08111C] px-4 py-1.5 rounded-full border border-[#C6A15B]/30 mb-4">
            <Compass size={16} />
            <span>KARNATAKA TRAVEL DICTIONARY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8] tracking-tight mb-4">
            100 Curated Travel Destinations from Bengaluru
          </h1>

          <p className="text-[#AEB7C2] text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore heritage landmarks, hill stations, waterfalls, wildlife sanctuaries, and coastal towns. Rent luxury Toyota Innova Crysta & Force Urbania cabs with verified drivers.
          </p>

          {/* Unified Search Component */}
          <TravelSearch placeholder="Search any of the 100 destinations (e.g. Mysuru, Gokarna, Coorg, Hampi)..." />
        </div>
      </section>

      {/* FILTER CONTROLS & GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Filter Pills Bar */}
        <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6 mb-10 space-y-6">
          <div className="flex items-center justify-between border-b border-[#AEB7C2]/10 pb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#F4F1E8]">
              <Filter size={18} className="text-[#C6A15B]" />
              <span>EXPLORE & FILTER DESTINATIONS ({filteredDestinations.length} / {DESTINATIONS.length})</span>
            </div>

            {(selectedCategory !== "All" || selectedRegion !== "All" || selectedDistance !== "All") && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedRegion("All");
                  setSelectedDistance("All");
                }}
                className="text-xs font-bold text-[#C6A15B] hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#AEB7C2] uppercase tracking-wider block mb-2">
              BY CATEGORY:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#C6A15B] text-[#08111C] font-extrabold border-[#C6A15B]"
                      : "bg-[#08111C] text-[#AEB7C2] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#AEB7C2] uppercase tracking-wider block mb-2">
              BY REGION:
            </span>
            <div className="flex flex-wrap gap-2">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedRegion === reg
                      ? "bg-[#C6A15B] text-[#08111C] font-extrabold border-[#C6A15B]"
                      : "bg-[#08111C] text-[#AEB7C2] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Distance Filter Pills */}
          <div>
            <span className="text-[11px] font-bold text-[#AEB7C2] uppercase tracking-wider block mb-2">
              BY DISTANCE FROM BENGALURU:
            </span>
            <div className="flex flex-wrap gap-2">
              {distanceRanges.map((dist) => (
                <button
                  key={dist.value}
                  onClick={() => setSelectedDistance(dist.value)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all ${
                    selectedDistance === dist.value
                      ? "bg-[#C6A15B] text-[#08111C] font-extrabold border-[#C6A15B]"
                      : "bg-[#08111C] text-[#AEB7C2] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
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
          <div className="text-center py-16 bg-[#132333] rounded-3xl border border-[#AEB7C2]/15">
            <h3 className="text-lg font-bold text-[#F4F1E8] mb-2">No Destinations Found</h3>
            <p className="text-sm text-[#AEB7C2] mb-4">
              No destinations match your active category, region, or distance filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedRegion("All");
                setSelectedDistance("All");
              }}
              className="text-xs font-bold text-[#C6A15B] bg-[#08111C] px-5 py-2.5 rounded-xl border border-[#C6A15B]/30 hover:bg-[#08111C]/80 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
