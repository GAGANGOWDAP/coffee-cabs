import { useState } from "react";
import { Compass, Calendar, Sparkles, Users, ArrowRight } from "lucide-react";
import { PACKAGES, TourPackage } from "../data/packages";
import PackageCard from "./PackageCard";

export default function TripPlanner() {
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedInterest, setSelectedInterest] = useState<string>("all");

  const durations = [
    { label: "All Durations", value: "all" },
    { label: "1 Day Escape", value: "1 Day" },
    { label: "3 Days / 2 Nights", value: "3 Days" },
    { label: "4 Days Tour", value: "4 Days" },
    { label: "7 Days Grand", value: "7 Days" }
  ];

  const interests = [
    { label: "All Interests", value: "all" },
    { label: "Bengaluru nearby 1-day", value: "Bengaluru nearby 1-day" },
    { label: "Mysuru Heritage", value: "Mysuru" },
    { label: "Coorg Hill Station", value: "Coorg" },
    { label: "Chikkamagaluru Coffee", value: "Chikkamagaluru" },
    { label: "Coastal & Beach", value: "Coastal" },
    { label: "Hampi & Badami", value: "Hampi/Badami/Pattadakal" },
    { label: "Wildlife Safaris", value: "Wildlife" },
    { label: "Grand Karnataka", value: "Grand 5–7 day Karnataka" }
  ];

  const filteredPackages = PACKAGES.filter((pkg) => {
    const matchesDuration =
      selectedDuration === "all" || pkg.duration.toLowerCase().includes(selectedDuration.toLowerCase());
    const matchesInterest =
      selectedInterest === "all" || pkg.category.toLowerCase().includes(selectedInterest.toLowerCase());
    return matchesDuration && matchesInterest;
  });

  return (
    <section className="bg-[#08111C] border border-[#AEB7C2]/15 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-[#C6A15B] text-xs font-extrabold uppercase tracking-widest mb-3">
          <Compass size={18} />
          <span>INSTANT TRIP MATCHMAKER</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#F4F1E8] mb-3">
          Plan Your Ideal Karnataka Holiday
        </h2>
        <p className="text-[#AEB7C2] text-sm max-w-2xl mb-8 leading-relaxed">
          Select your trip duration and travel interest to find custom-tailored Coffee Cabs packages with private chauffeur vehicles.
        </p>

        {/* Interactive Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#132333] p-5 rounded-2xl border border-[#AEB7C2]/15 mb-8">
          {/* Duration Filter */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold text-[#F4F1E8] mb-3">
              <Calendar size={14} className="text-[#C6A15B]" />
              TRIP DURATION
            </label>
            <div className="flex flex-wrap gap-2">
              {durations.map((d) => (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => setSelectedDuration(d.value)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all ${
                    selectedDuration === d.value
                      ? "bg-[#C6A15B] text-[#08111C] font-extrabold border-[#C6A15B]"
                      : "bg-[#08111C] text-[#AEB7C2] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interest Category Filter */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold text-[#F4F1E8] mb-3">
              <Sparkles size={14} className="text-[#C6A15B]" />
              TRAVEL EXPERIENCE & REGION
            </label>
            <div className="flex flex-wrap gap-2">
              {interests.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedInterest(cat.value)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-xl border transition-all ${
                    selectedInterest === cat.value
                      ? "bg-[#C6A15B] text-[#08111C] font-extrabold border-[#C6A15B]"
                      : "bg-[#08111C] text-[#AEB7C2] border-[#AEB7C2]/20 hover:border-[#C6A15B]/50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Matching Packages Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#F4F1E8]">
              Matched Tour Packages ({filteredPackages.length})
            </h3>
            <span className="text-xs text-[#AEB7C2]">
              All packages include private AC vehicle & driver
            </span>
          </div>

          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#132333]/50 rounded-2xl border border-[#AEB7C2]/10">
              <p className="text-[#AEB7C2] text-sm mb-3">
                No tour package found matching these specific filters.
              </p>
              <button
                onClick={() => {
                  setSelectedDuration("all");
                  setSelectedInterest("all");
                }}
                className="text-xs font-bold text-[#C6A15B] hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
