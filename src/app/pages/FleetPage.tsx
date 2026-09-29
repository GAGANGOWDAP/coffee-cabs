import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Phone, ShieldCheck, Check, SlidersHorizontal, Layers } from "lucide-react";
import { VEHICLES, Vehicle } from "../data/vehicles";
import VehicleCard from "../components/VehicleCard";
import SEO from "../components/SEO";
import { getFleetIndexSchema } from "../utils/seoSchemas";

export default function FleetPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);

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
    <div className="pt-20 bg-[#FFFDF7] text-[#4B3832] min-h-screen">
      <SEO
        title="Fleet | Toyota Innova Crysta, Force Urbania & Tempo Traveller"
        description="Explore the Coffee Cabs commercial fleet. Toyota Innova Crysta, Force Urbania 12-seater, 17-seater & Tempo Travellers with professional chauffeurs."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/fleet"
        schemaJson={getFleetIndexSchema()}
      />
      {/* ── A. PREMIUM HERO SECTION ── */}
      <section className="py-10 sm:py-16 bg-[#F5E6CA] border-b border-[#DCC7AA] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#6F4E37] font-extrabold mb-3">
            <ShieldCheck size={14} className="text-[#6F4E37]" />
            <span>OUR FLEET</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#4B3832] mb-4 tracking-tight leading-[1.08] max-w-3xl mx-auto">
            TRAVEL IN COMFORT.<br className="hidden sm:inline" /> ARRIVE IN STYLE.
          </h1>

          {/* Supporting Description */}
          <p className="text-[#6F4E37] text-xs sm:text-base max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium">
            Choose a vehicle based on group size, comfort, and travel requirements. All Coffee Cabs vehicles are commercial permit registered, insured, and maintained in-house to peak standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xs sm:max-w-md mx-auto">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#6F4E37] text-[#FFFDF7] text-xs uppercase tracking-wider font-extrabold rounded-full hover:bg-[#4B3832] transition-all shadow-md flex items-center justify-center gap-2 min-h-[46px]"
            >
              <span>REQUEST A QUOTE</span> <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+917676726209"
              className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#6F4E37] text-[#6F4E37] hover:bg-[#FFFDF7] hover:text-[#4B3832] text-xs uppercase tracking-wider font-extrabold rounded-full transition-all shadow-xs flex items-center justify-center gap-2 min-h-[46px]"
            >
              <Phone size={15} /> <span>CONTACT US</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── B. FLEET FILTERS & MAIN GRID ── */}
      <section className="py-12 sm:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Category Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#DCC7AA]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6F4E37]">
              <SlidersHorizontal size={16} className="text-[#6F4E37]" /> Filter Vehicle Fleet:
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {filterCategories.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all whitespace-nowrap min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37] ${
                    activeFilter === filter.value
                      ? "bg-[#6F4E37] text-[#FFFDF7] shadow-md scale-[1.02]"
                      : "bg-[#FFFDF7] text-[#4B3832] border border-[#DCC7AA] hover:bg-[#F5E6CA] hover:text-[#4B3832]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
              {activeFilter !== "ALL" && (
                <button
                  onClick={() => setActiveFilter("ALL")}
                  className="px-4 py-2 rounded-full text-xs font-bold text-[#B86F52] hover:text-[#4B3832] underline whitespace-nowrap"
                >
                  Clear All Filters
                </button>
              )}
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
                        ? "bg-[#6F4E37] text-[#FFFDF7] border-[#6F4E37]"
                        : "bg-[#FFFDF7]/90 text-[#4B3832] border-[#DCC7AA] hover:text-[#6F4E37]"
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
            <div className="mt-16 bg-[#FFFDF7] rounded-3xl p-6 sm:p-8 border border-[#DCC7AA] shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-[#DCC7AA] pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6F4E37] tracking-widest">
                    Side-by-Side Comparison
                  </span>
                  <h3 className="text-xl font-bold text-[#4B3832]">Comparing Selected Vehicles</h3>
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
                    <tr className="border-b border-[#DCC7AA] text-[#4B3832]">
                      <th className="p-3 uppercase font-bold text-[#6F4E37]">Feature</th>
                      {comparedVehicles.map((v) => (
                        <th key={v.id} className="p-3 font-bold text-sm min-w-[200px]">
                          {v.shortName}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DCC7AA] text-[#6F4E37]">
                    <tr>
                      <td className="p-3 font-semibold text-[#4B3832]">Category</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3">{v.category}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4B3832]">Seating Capacity</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3 font-bold text-[#4B3832]">{v.seatingCapacity}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4B3832]">Luggage Suitability</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3">{v.luggageCapacity}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4B3832]">Per Km Rate</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3 font-extrabold text-[#6F4E37]">
                          ₹{v.pricePerKm} / km
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4B3832]">Driver Allowance</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3 font-bold text-[#4B3832]">
                          ₹{v.driverAllowance} / day
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#4B3832]">Action</td>
                      {comparedVehicles.map((v) => (
                        <td key={v.id} className="p-3">
                          <Link
                            to={`/booking?vehicle=${v.slug}`}
                            className="inline-block px-4 py-2 bg-[#6F4E37] hover:bg-[#4B3832] text-[#FFFDF7] font-bold rounded-lg text-[11px] shadow-sm"
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
