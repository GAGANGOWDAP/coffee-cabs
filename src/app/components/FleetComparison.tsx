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
    <section ref={containerRef} className="py-16 sm:py-24 bg-[#08111C] text-[#F4F1E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 gsap-fade-up">
          <div className="inline-block text-xs uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3 bg-[#132333] border border-[#AEB7C2]/15 px-4 py-1.5 rounded-full shadow-sm">
            Side-by-Side Comparison
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E8] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fleet <span className="text-[#C6A15B]">Comparison</span>
          </h2>
          <p className="text-[#AEB7C2] text-xs sm:text-sm">
            Compare all our Coffee Cabs vehicles side-by-side to find the perfect match for your trip.
          </p>
        </div>

        {/* ── MOBILE / IPHONE FRIENDLY SELECTOR VIEW (Visible on Small Screens) ── */}
        <div className="block lg:hidden mb-8 gsap-fade-up">
          {/* Mobile Vehicle Tab Selector */}
          <div className="mb-4">
            <label className="block text-[11px] font-extrabold text-[#AEB7C2] uppercase tracking-wider mb-2">
              Select Vehicle to Compare
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {comparisonData.map((v, idx) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedMobileVehicle(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedMobileVehicle === idx
                      ? "bg-[#C6A15B] text-[#08111C] shadow-md"
                      : "bg-[#132333] text-[#AEB7C2] border border-[#AEB7C2]/15 hover:bg-[#132333]/80"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mobile Vehicle Spec Card */}
          <div className="bg-[#132333] rounded-3xl p-6 border border-[#AEB7C2]/15 shadow-xl">
            <div className="flex justify-between items-start pb-4 border-b border-[#AEB7C2]/15 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider">
                  {activeMobile.bestFor}
                </span>
                <h3 className="text-xl font-extrabold text-[#F4F1E8]">{activeMobile.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-lg font-extrabold text-[#C6A15B]">{activeMobile.price}</div>
                <div className="text-[10px] text-[#AEB7C2]">per kilometer</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-[#08111C] p-3 rounded-2xl border border-[#AEB7C2]/15 flex justify-between items-center">
                <span className="text-[#AEB7C2] font-semibold">Seating</span>
                <span className="font-extrabold text-[#F4F1E8]">{activeMobile.seating} Seats</span>
              </div>
              <div className="bg-[#08111C] p-3 rounded-2xl border border-[#AEB7C2]/15 flex justify-between items-center">
                <span className="text-[#AEB7C2] font-semibold">AC</span>
                <span className="font-extrabold text-[#C6A15B]">✓ Dual AC</span>
              </div>
              <div className="bg-[#08111C] p-3 rounded-2xl border border-[#AEB7C2]/15 flex justify-between items-center col-span-2">
                <span className="text-[#AEB7C2] font-semibold">Pushback Seats</span>
                <span className="font-extrabold text-[#F4F1E8]">{activeMobile.pushback}</span>
              </div>
              <div className="bg-[#08111C] p-3 rounded-2xl border border-[#AEB7C2]/15 flex justify-between items-center">
                <span className="text-[#AEB7C2] font-semibold">LED TV</span>
                <span className="font-extrabold text-[#F4F1E8]">{activeMobile.tv ? "✓ Yes" : "— No"}</span>
              </div>
              <div className="bg-[#08111C] p-3 rounded-2xl border border-[#AEB7C2]/15 flex justify-between items-center">
                <span className="text-[#AEB7C2] font-semibold">WiFi</span>
                <span className="font-extrabold text-[#F4F1E8]">{activeMobile.wifi ? "✓ Yes" : "— No"}</span>
              </div>
              <div className="bg-[#08111C] p-3 rounded-2xl border border-[#AEB7C2]/15 flex justify-between items-center col-span-2">
                <span className="text-[#AEB7C2] font-semibold">Restroom Facility</span>
                <span className="font-extrabold text-[#F4F1E8]">{activeMobile.restroom ? "✓ On-board Restroom" : "— Available on Stops"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP & SWIPEABLE FULL TABLE VIEW ── */}
        <div className="hidden lg:block gsap-fade-up">
          <div className="flex justify-end items-center gap-1.5 text-xs text-[#AEB7C2] font-semibold mb-2">
            <span>Scroll horizontally to view all vehicles</span>
            <MoveRight size={14} className="text-[#C6A15B]" />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#AEB7C2]/15 shadow-2xl bg-[#132333]">
            <table className="w-full text-left text-xs min-w-[900px]">
              <thead>
                <tr className="bg-[#08111C] text-[#F4F1E8]">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] w-36">Feature</th>
                  {comparisonData.map((v) => (
                    <th key={v.name} className="p-4 font-bold text-center bg-[#C6A15B] text-[#08111C]">
                      {v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#AEB7C2]/15 text-[#F4F1E8]">
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#C6A15B]">Price</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center font-extrabold text-[#C6A15B]">
                      {v.price}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">Seating</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center font-semibold text-[#F4F1E8]">
                      {v.seating}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">AC</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center font-bold text-[#C6A15B]">
                      ✓
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">Pushback Seats</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      <span className="font-bold text-[#F4F1E8]">{v.pushback}</span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">LED TV</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.tv ? <Check size={16} className="mx-auto text-[#C6A15B]" /> : <Minus size={14} className="mx-auto text-[#AEB7C2]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">Music System</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.music ? <Check size={16} className="mx-auto text-[#C6A15B]" /> : <Minus size={14} className="mx-auto text-[#AEB7C2]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">Restroom</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.restroom ? <Check size={16} className="mx-auto text-[#C6A15B]" /> : <Minus size={14} className="mx-auto text-[#AEB7C2]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">WiFi</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center">
                      {v.wifi ? <Check size={16} className="mx-auto text-[#C6A15B]" /> : <Minus size={14} className="mx-auto text-[#AEB7C2]/40" />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-[#1a2d42] transition-colors font-semibold">
                  <td className="p-4 font-bold bg-[#08111C] text-[#F4F1E8]">Best For</td>
                  {comparisonData.map((v) => (
                    <td key={v.name} className="p-4 text-center text-[#AEB7C2]">
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

