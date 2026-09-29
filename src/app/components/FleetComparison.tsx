import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/gsapSetup";
import { Check, Minus, MoveRight } from "lucide-react";

export default function FleetComparison() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMobileVehicle, setSelectedMobileVehicle] = useState(0);

  const comparisonData = [
    {
      name: "9 Seater TT",
      price: "₹28/km",
      seating: "9",
      ac: true,
      pushback: "✓ Standard",
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Small Groups",
    },
    {
      name: "12/14 Seater TT",
      price: "₹30/km",
      seating: "12-14",
      ac: true,
      pushback: "✓ Standard",
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Group Travel",
    },
    {
      name: "16 Seater TT",
      price: "₹35/km",
      seating: "16",
      ac: true,
      pushback: "✓ Standard",
      tv: true,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Large Groups",
    },
    {
      name: "Force Urbania",
      price: "₹38-₹50/km",
      seating: "10-16",
      ac: true,
      pushback: "✓ (Maharaja)",
      tv: true,
      music: true,
      restroom: false,
      wifi: true,
      bestFor: "Premium Travel",
    },
    {
      name: "Innova Crysta",
      price: "₹19/km",
      seating: "7",
      ac: true,
      pushback: "Recliner Captain",
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Business/Corporate",
    },
    {
      name: "Luxury Car",
      price: "₹25/km",
      seating: "4",
      ac: true,
      pushback: "Leather Seats",
      tv: false,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "VIP/Luxury",
    },
    {
      name: "Mini Bus",
      price: "₹50/km",
      seating: "20-50",
      ac: true,
      pushback: "✓ Standard",
      tv: true,
      music: true,
      restroom: false,
      wifi: false,
      bestFor: "Events/Weddings",
    },
    {
      name: "Luxury Bus",
      price: "₹45–₹55/km",
      seating: "22-40",
      ac: true,
      pushback: "✓ Maharaja",
      tv: true,
      music: true,
      restroom: true,
      wifi: false,
      bestFor: "Large Tours",
    },
  ];

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".gsap-fade-up", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  const activeMobile = comparisonData[selectedMobileVehicle];

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#FFFDF7] text-[#4B3832] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 gsap-fade-up">
          <div className="inline-block text-xs uppercase tracking-widest text-[#4B3832] font-bold mb-3 bg-[#F5E6CA] border border-[#DCC7AA] px-4 py-1.5 rounded-full shadow-sm">
            Side-by-Side Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3832] mb-3">
            Fleet <span className="text-[#6F4E37]">Comparison</span>
          </h2>
          <p className="text-[#6F4E37] text-xs sm:text-sm font-medium">
            Compare all our Coffee Cabs vehicles side-by-side to find the perfect match for your trip.
          </p>
        </div>

        {/* ── MOBILE / IPHONE FRIENDLY SELECTOR VIEW (Visible on Small Screens) ── */}
        <div className="block lg:hidden mb-8 gsap-fade-up">
          {/* Mobile Vehicle Tab Selector */}
          <div className="mb-4">
            <label className="block text-[11px] font-bold text-[#6F4E37] uppercase tracking-wider mb-2">
              Select Vehicle to Compare
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {comparisonData.map((v, idx) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedMobileVehicle(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedMobileVehicle === idx
                      ? "bg-[#6F4E37] text-[#FFFDF7] shadow-sm"
                      : "bg-[#FFFDF7] text-[#4B3832] border border-[#DCC7AA] hover:bg-[#F5E6CA]"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mobile Vehicle Spec Card */}
          <div className="bg-[#FFFDF7] rounded-3xl p-6 border border-[#DCC7AA] shadow-sm">
            <div className="flex justify-between items-start pb-4 border-b border-[#DCC7AA] mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#6F4E37] tracking-wider">
                  {activeMobile.bestFor}
                </span>
                <h3 className="text-xl font-extrabold text-[#4B3832]">{activeMobile.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-extrabold text-[#6F4E37]">{activeMobile.price}</div>
                <div className="text-[10px] text-[#6F4E37]">per kilometer</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-[#FFFDF7] p-3 rounded-2xl border border-[#DCC7AA] flex justify-between items-center">
                <span className="text-[#6F4E37] font-medium">Seating</span>
                <span className="font-extrabold text-[#4B3832]">{activeMobile.seating} Seats</span>
              </div>
              <div className="bg-[#FFFDF7] p-3 rounded-2xl border border-[#DCC7AA] flex justify-between items-center">
                <span className="text-[#6F4E37] font-medium">AC</span>
                <span className="font-extrabold text-[#6F4E37]">✓ Dual AC</span>
              </div>
              <div className="bg-[#FFFDF7] p-3 rounded-2xl border border-[#DCC7AA] flex justify-between items-center col-span-2">
                <span className="text-[#6F4E37] font-medium">Pushback Seats</span>
                <span className="font-extrabold text-[#4B3832]">{activeMobile.pushback}</span>
              </div>
              <div className="bg-[#FFFDF7] p-3 rounded-2xl border border-[#DCC7AA] flex justify-between items-center">
                <span className="text-[#6F4E37] font-medium">LED TV</span>
                <span className="font-extrabold text-[#4B3832]">{activeMobile.tv ? "✓ Yes" : "— No"}</span>
              </div>
              <div className="bg-[#FFFDF7] p-3 rounded-2xl border border-[#DCC7AA] flex justify-between items-center">
                <span className="text-[#6F4E37] font-medium">WiFi</span>
                <span className="font-extrabold text-[#4B3832]">{activeMobile.wifi ? "✓ Yes" : "— No"}</span>
              </div>
              <div className="bg-[#FFFDF7] p-3 rounded-2xl border border-[#DCC7AA] flex justify-between items-center col-span-2">
                <span className="text-[#6F4E37] font-medium">Restroom Facility</span>
                <span className="font-extrabold text-[#4B3832]">{activeMobile.restroom ? "✓ On-board Restroom" : "— Available on Stops"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP & SWIPEABLE FULL TABLE VIEW ── */}
        <div className="hidden lg:block gsap-fade-up">
          <div className="flex justify-end items-center gap-1.5 text-xs text-[#6F4E37] font-semibold mb-2">
            <span>Scroll horizontally to view all vehicles</span>
            <MoveRight size={14} className="text-[#6F4E37]" />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#DCC7AA] shadow-sm bg-[#FFFDF7]">
            <table className="w-full text-left text-xs min-w-[900px]">
              <thead>
                <tr className="bg-[#F5E6CA] text-[#4B3832]">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-36">Feature</th>
                  {comparisonData.map((v) => (
                    <th key={v.name} className="p-4 font-bold text-center bg-[#6F4E37] text-[#FFFDF7]">
                      {v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCC7AA] text-[#4B3832]">
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#6F4E37]">Price</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center font-extrabold text-[#6F4E37]">
                      {v.price}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">Seating</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center font-semibold text-[#4B3832]">
                      {v.seating}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">AC</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center font-bold text-[#6F4E37]">
                      ✓
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">Pushback Seats</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      <span className="font-bold text-[#4B3832]">{v.pushback}</span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">LED TV</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.tv ? <Check size={16} className="mx-auto text-[#6F4E37]" /> : <Minus size={14} className="mx-auto text-[#6F4E37]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">Music System</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.music ? <Check size={16} className="mx-auto text-[#6F4E37]" /> : <Minus size={14} className="mx-auto text-[#6F4E37]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">Restroom</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.restroom ? <Check size={16} className="mx-auto text-[#6F4E37]" /> : <Minus size={14} className="mx-auto text-[#6F4E37]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">WiFi</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.wifi ? <Check size={16} className="mx-auto text-[#6F4E37]" /> : <Minus size={14} className="mx-auto text-[#6F4E37]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#F5E6CA] transition-colors font-semibold">
                  <td className="p-4 font-bold bg-[#FFFDF7] text-[#4B3832]">Best For</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center text-[#6F4E37]">
                      {v.bestFor}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
