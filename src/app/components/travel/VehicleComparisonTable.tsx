import { Link } from "react-router";
import { Car, Users, Luggage, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { VEHICLES } from "../../data/vehicles";

interface VehicleComparisonTableProps {
  onSelectVehicle?: (vehicleId: string) => void;
  selectedVehicleId?: string;
  className?: string;
}

export default function VehicleComparisonTable({
  onSelectVehicle,
  selectedVehicleId,
  className = "",
}: VehicleComparisonTableProps) {
  const COMPARISON_DATA = [
    {
      id: "innova-crysta",
      name: "Toyota Innova Crysta",
      category: "SUV",
      seats: "6+1 Seater",
      luggage: "4 Large Suitcases",
      ac: "Dual Automatic Climate Control",
      ideal: "Families, Small Groups, Outstation Travel",
      priceNote: "₹19/km base rate estimate",
    },
    {
      id: "force-urbania-luxury",
      name: "Force Urbania Luxury",
      category: "Luxury Van",
      seats: "12–17 Seater",
      luggage: "8–10 Large Bags",
      ac: "Individual Passenger AC Vents",
      ideal: "Corporate Groups, Extended Families",
      priceNote: "₹26/km base rate estimate",
    },
    {
      id: "12-14-seater-tt",
      name: "Tempo Traveller Luxury",
      category: "Group Minibus",
      seats: "12–26 Seater",
      luggage: "12+ Large Bags",
      ac: "High-Roof Roof-Mounted AC",
      ideal: "Large Tour Groups, Weddings, Pilgrimage",
      priceNote: "₹24/km base rate estimate",
    },
  ];

  return (
    <div className={`bg-white border border-[#DDD5C8] rounded-3xl p-5 sm:p-7 shadow-sm text-[#252525] ${className}`}>
      {/* Section Header */}
      <div className="mb-6 pb-3 border-b border-[#DDD5C8]">
        <span className="text-[10px] sm:text-xs font-extrabold text-[#23483A] uppercase tracking-widest block mb-0.5">
          VEHICLE DECISION GUIDE
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A3025]">
          Not Sure Which Vehicle to Choose?
        </h3>
        <p className="text-xs sm:text-sm text-[#6F6A63] mt-1">
          Compare seating capacity, luggage space, and trip suitability across Coffee Cabs&apos; verified fleet.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#F7F3EC] border-b border-[#DDD5C8]">
              <th className="p-3.5 font-extrabold text-[#4A3025] uppercase tracking-wider">Vehicle Model</th>
              <th className="p-3.5 font-extrabold text-[#4A3025] uppercase tracking-wider">Seating</th>
              <th className="p-3.5 font-extrabold text-[#4A3025] uppercase tracking-wider">Luggage Capacity</th>
              <th className="p-3.5 font-extrabold text-[#4A3025] uppercase tracking-wider">Air Conditioning</th>
              <th className="p-3.5 font-extrabold text-[#4A3025] uppercase tracking-wider">Best Suited For</th>
              <th className="p-3.5 font-extrabold text-[#4A3025] uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD5C8]">
            {COMPARISON_DATA.map((item) => {
              const isSelected = selectedVehicleId === item.id;
              return (
                <tr key={item.id} className={`hover:bg-[#F7F3EC]/50 transition-colors ${isSelected ? "bg-[#23483A]/5 font-semibold" : ""}`}>
                  <td className="p-3.5 font-bold text-[#252525]">
                    <div className="flex items-center gap-2">
                      <Car size={16} className="text-[#23483A] shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-[#6F6A63]">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-[#23483A]" />
                      <span>{item.seats}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-[#6F6A63]">
                    <div className="flex items-center gap-1.5">
                      <Luggage size={14} className="text-[#23483A]" />
                      <span>{item.luggage}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-[#6F6A63]">{item.ac}</td>
                  <td className="p-3.5 text-[#6F6A63] font-medium">{item.ideal}</td>
                  <td className="p-3.5 text-right">
                    {onSelectVehicle ? (
                      <button
                        type="button"
                        onClick={() => onSelectVehicle(item.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-[#23483A] text-white"
                            : "bg-[#4A3025] text-white hover:bg-[#23483A]"
                        }`}
                      >
                        {isSelected ? "Selected" : "Select Vehicle"}
                      </button>
                    ) : (
                      <Link
                        to={`/booking?vehicle=${item.id}`}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#4A3025] text-white rounded-full text-xs font-bold hover:bg-[#23483A] transition-all"
                      >
                        <span>Select</span>
                        <ArrowRight size={12} />
                      </Link>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards View */}
      <div className="md:hidden space-y-3.5">
        {COMPARISON_DATA.map((item) => {
          const isSelected = selectedVehicleId === item.id;
          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all ${
                isSelected
                  ? "bg-[#23483A]/10 border-[#23483A]"
                  : "bg-[#F7F3EC] border-[#DDD5C8]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-[#4A3025] text-base">{item.name}</h4>
                <span className="text-[10px] font-extrabold uppercase bg-white px-2.5 py-0.5 rounded-full border border-[#DDD5C8] text-[#23483A]">
                  {item.category}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#6F6A63] mb-3">
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#23483A] shrink-0" />
                  <span>{item.seats}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Luggage size={14} className="text-[#23483A] shrink-0" />
                  <span>{item.luggage}</span>
                </div>
              </div>

              <p className="text-xs text-[#6F6A63] mb-3">
                <strong>Best Suited For: </strong>{item.ideal}
              </p>

              {onSelectVehicle ? (
                <button
                  type="button"
                  onClick={() => onSelectVehicle(item.id)}
                  className={`w-full py-2 px-4 rounded-xl text-xs font-bold transition-all text-center ${
                    isSelected
                      ? "bg-[#23483A] text-white"
                      : "bg-[#4A3025] text-white hover:bg-[#23483A]"
                  }`}
                >
                  {isSelected ? "Selected" : "Select This Vehicle"}
                </button>
              ) : (
                <Link
                  to={`/booking?vehicle=${item.id}`}
                  className="w-full py-2 px-4 bg-[#4A3025] text-white rounded-xl text-xs font-bold hover:bg-[#23483A] transition-all text-center block"
                >
                  Select This Vehicle
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
