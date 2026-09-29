import { useState } from "react";
import { Compass, Calendar, Sparkles } from "lucide-react";
import { PACKAGES } from "../data/packages";
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
    <section className="bg-[#F5E6CA] border border-[#DCC7AA] rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-[#6F4E37] text-xs font-extrabold uppercase tracking-widest mb-3">
          <Compass size={18} />
          <span>INSTANT TRIP MATCHMAKER</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#4B3832] mb-3">
          Plan Your Ideal Karnataka Holiday
        </h2>
        <p className="text-[#6F4E37] text-sm max-w-2xl mb-8 leading-relaxed font-medium">
          Select your trip duration and travel interest to find custom-tailored Coffee Cabs packages with private chauffeur vehicles.
        </p>

        {/* Interactive Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FFFDF7] p-5 rounded-2xl border border-[#DCC7AA] mb-8 shadow-sm">
          {/* Duration Filter */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold text-[#4B3832] mb-3">
              <Calendar size={14} className="text-[#6F4E37]" />
              TRIP DURATION
            </label>
            <div className="flex flex-wrap gap-2">
              {durations.map((d) => (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => setSelectedDuration(d.value)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all ${
                    selectedDuration === d.value
                      ? "bg-[#6F4E37] text-[#FFFDF7] border-[#6F4E37]"
                      : "bg-[#FFFDF7] text-[#4B3832] border-[#DCC7AA] hover:border-[#6F4E37]"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interest Category Filter */}
          <div>
            <label className="flex items-center gap-2 text-xs font-bold text-[#4B3832] mb-3">
              <Sparkles size={14} className="text-[#6F4E37]" />
              TRAVEL EXPERIENCE & REGION
            </label>
            <div className="flex flex-wrap gap-2">
              {interests.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedInterest(cat.value)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all ${
                    selectedInterest === cat.value
                      ? "bg-[#6F4E37] text-[#FFFDF7] border-[#6F4E37]"
                      : "bg-[#FFFDF7] text-[#4B3832] border-[#DCC7AA] hover:border-[#6F4E37]"
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
            <h3 className="text-lg font-bold text-[#4B3832]">
              Matched Tour Packages ({filteredPackages.length})
            </h3>
            <span className="text-xs text-[#6F4E37] font-medium">
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
            <div className="text-center py-12 bg-[#FFFDF7] rounded-2xl border border-[#DCC7AA]">
              <p className="text-[#6F4E37] text-sm mb-3 font-medium">
                No tour package found matching these specific filters.
              </p>
              <button
                onClick={() => {
                  setSelectedDuration("all");
                  setSelectedInterest("all");
                }}
                className="text-xs font-bold text-[#6F4E37] hover:underline"
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
