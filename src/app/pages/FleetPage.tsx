import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Phone, ShieldCheck, Check, SlidersHorizontal, Layers } from "lucide-react";
import { VEHICLES, Vehicle } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import SEO from "../components/SEO";

export default function FleetPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Fleet | Premium Chauffeur & Travel Services | Coffee Cabs";
  }, []);

  const filterCategories = [
    { label: "ALL", value: "ALL" },
    { label: "PREMIUM CARS", value: "PREMIUM CARS" },
    { label: "LUXURY VANS", value: "LUXURY VANS" },
    { label: "GROUP TRAVEL", value: "GROUP TRAVEL" },
  ];

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (activeFilter === "ALL") return true;
    return vehicle.filterCategory === activeFilter;
  });

  const toggleCompare = (id: string) => {
    if (selectedCompareIds.includes(id)) {
      setSelectedCompareIds(selectedCompareIds.filter((item) => item !== id));
    } else {
      if (selectedCompareIds.length >= 3) {
        alert("You can compare up to 3 vehicles at a time.");
        return;
      }
      setSelectedCompareIds([...selectedCompareIds, id]);
    }
  };

  const comparedVehicles = VEHICLES.filter((v) => selectedCompareIds.includes(v.id));

  return (
    <div className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title="Fleet | Toyota Innova Crysta, Force Urbania & Tempo Traveller"
        description="Explore the Coffee Cabs commercial fleet. Toyota Innova Crysta, Force Urbania 12-seater, 17-seater & Tempo Travellers with professional chauffeurs."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/fleet"
      />
      {/* ── A. PREMIUM HERO SECTION ── */}
      <section className="py-14 sm:py-20 bg-[#EDE5D8] border-b border-[#DDD5C8] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#23483A] font-extrabold bg-[#FFFFFF] border border-[#DDD5C8] px-4 py-1.5 rounded-full shadow-sm mb-4">
            <ShieldCheck size={14} className="text-[#23483A]" /> OUR FLEET
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4A3025] mb-4 tracking-tight leading-[1.1]">
            TRAVEL IN COMFORT. ARRIVE IN STYLE.
          </h1>

          <p className="text-[#6F6A63] text-xs sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Choose a vehicle based on group size, comfort, and travel requirements. All Coffee Cabs vehicles are commercial permit registered, insured, and maintained in-house to peak standards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#4A3025] text-white text-xs uppercase tracking-wider font-extrabold rounded-full hover:bg-[#23483A] hover:scale-[1.02] transition-all shadow-md flex items-center justify-center gap-2 min-h-[48px]"
            >
              REQUEST A QUOTE <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+917676726209"
              className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#23483A] text-[#23483A] hover:bg-[#23483A] hover:text-white text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-sm flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Phone size={15} /> CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* ── B. FLEET FILTERS & MAIN GRID ── */}
      <section className="py-12 sm:py-20 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Category Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#DDD5C8]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6F6A63]">
              <SlidersHorizontal size={16} className="text-[#23483A]" /> Filter Vehicle Fleet:
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {filterCategories.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A] ${
                    activeFilter === filter.value
                      ? "bg-[#4A3025] text-white shadow-md scale-[1.02]"
                      : "bg-[#FFFFFF] text-[#252525] border border-[#DDD5C8] hover:bg-[#EDE5D8] hover:text-[#4A3025]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="relative flex flex-col">
                <div className="absolute top-4 right-4 z-20">
                  <button
                    onClick={() => toggleCompare(vehicle.id)}
                    className={`text-[10px] font-bold px-3 py-1 rounded-full border transition-all shadow-md flex items-center gap-1 ${
                      selectedCompareIds.includes(vehicle.id)
                        ? "bg-[#23483A] text-white border-[#23483A]"
                        : "bg-[#FFFFFF]/90 text-[#252525] border-[#DDD5C8] hover:text-[#23483A]"
                    }`}
                  >
                    {selectedCompareIds.includes(vehicle.id) ? (
                      <>
                        <Check size={12} /> Comparing
                      </>
                    ) : (
                      <>
                        <Layers size={12} /> + Compare
                      </>
                    )}
                  </button>
                </div>
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>

          {/* ── C. FLEET COMPARISON SECTION (IF SELECTED) ── */}
          {comparedVehicles.length > 0 && (
            <div className="mt-16 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#DDD5C8] shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-[#DDD5C8] pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#23483A] tracking-widest">
                    Side-by-Side Comparison
                  </span>
                  <h3 className="text-xl font-bold text-[#4A3025]">Comparing Selected Vehicles</h3>
                </div>
                <button
                  onClick={() => setSelectedCompareIds([])}
                  className="text-xs text-[#B86F52] hover:underline font-medium"
                >
                  Clear Comparison
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-[#DDD5C8] text-[#4A3025]">
                      <th className="p-3 uppercase font-bold text-[#23483A]">Feature</th>
                      {comparedVehicles.map((v) => (
                        <th key={v.id} className="p-3 font-bold text-sm min-w-[200px]">
                          {v.shortName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDD5C8] text-[#6F6A63]">
                    <tr>
                      <td className="p-3 font-semibold text-[#252525]">Category</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3">{v.category}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#252525]">Seating Capacity</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3 font-bold text-[#252525]">{v.seatingCapacity}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#252525]">Luggage Suitability</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3">{v.luggageCapacity}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#252525]">Per Km Rate</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3 font-extrabold text-[#23483A]">
                          ₹{v.pricePerKm} / km
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#252525]">Driver Allowance</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3 font-bold text-[#252525]">
                          ₹{v.driverAllowance} / day
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#252525]">Action</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3">
                          <Link
                            to={`/booking?vehicle=${v.slug}`}
                            className="inline-block px-4 py-2 bg-[#4A3025] hover:bg-[#23483A] text-white font-bold rounded-lg text-[11px] shadow-sm"
                          >
                            Quote {v.shortName}
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
