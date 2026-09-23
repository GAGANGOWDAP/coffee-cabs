import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/gsapSetup";
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { VEHICLES, PRICING_TERMS } from "../data/vehicles";
import BookingForm from "../components/BookingForm";
import SEO from "../components/SEO";

export default function PricingPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedMobileVehicle, setSelectedMobileVehicle] = useState(0);

  useGSAP(
    () => {
      if (!pageRef.current) return;
      gsap.from(".gsap-pricing-fade", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: pageRef }
  );

  const activeVehicle = VEHICLES[selectedMobileVehicle];

  return (
    <div ref={pageRef} className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title="Tariff & Outstation Cab Pricing | Coffee Cabs"
        description="Official per-km pricing, driver allowance, minimum billing distance, and transparent outstation cab rules for Coffee Cabs."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/pricing"
      />
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#EDE5D8] border-b border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center gsap-pricing-fade">
          <div className="text-xs tracking-widest uppercase text-[#23483A] mb-3 font-extrabold bg-[#FFFFFF] border border-[#DDD5C8] px-4 py-1.5 rounded-full inline-block shadow-sm">
            Transparent Tariff
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#4A3025] mb-3">
            Official Per-Km Pricing & Allowance
          </h1>
          <p className="text-[#6F6A63] text-sm sm:text-base max-w-lg mx-auto">
            Zero hidden charges. Complete clarity on per-km rates, driver allowance, minimum billing distance, and outstation rules.
          </p>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="py-12 sm:py-20 bg-[#F7F3EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 gsap-pricing-fade">
          {/* ── MOBILE / IPHONE FRIENDLY CARD VIEW (Visible on Mobile) ── */}
          <div className="block sm:hidden mb-8">
            <label className="block text-[11px] font-extrabold text-[#6F6A63] uppercase tracking-wider mb-2">
              Select Vehicle
            </label>

            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-4">
              {VEHICLES.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedMobileVehicle(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedMobileVehicle === idx
                      ? "bg-[#4A3025] text-white shadow-md"
                      : "bg-[#FFFFFF] text-[#252525] border border-[#DDD5C8] hover:bg-[#EDE5D8]"
                  }`}
                >
                  {v.shortName}
                </button>
              ))}
            </div>

            {/* Mobile Active Vehicle Rate Card */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#DDD5C8] shadow-md">
              <div className="flex justify-between items-start pb-4 border-b border-[#DDD5C8] mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#23483A]">{activeVehicle.category}</span>
                  <h3 className="text-xl font-extrabold text-[#4A3025]">{activeVehicle.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#23483A]">₹{activeVehicle.pricePerKm}</div>
                  <div className="text-[10px] text-[#6F6A63]">per km</div>
                </div>
              </div>

              <div className="space-y-3 text-xs mb-6">
                <div className="bg-[#F7F3EC] p-3 rounded-2xl border border-[#DDD5C8] flex justify-between items-center">
                  <span className="text-[#6F6A63] font-semibold">Seating Capacity</span>
                  <span className="font-extrabold text-[#252525]">{activeVehicle.seats} Seats</span>
                </div>
                <div className="bg-[#F7F3EC] p-3 rounded-2xl border border-[#DDD5C8] flex justify-between items-center">
                  <span className="text-[#6F6A63] font-semibold">Driver Allowance</span>
                  <span className="font-extrabold text-[#252525]">₹{activeVehicle.driverAllowance}/day</span>
                </div>
                <div className="bg-[#F7F3EC] p-3 rounded-2xl border border-[#DDD5C8] flex justify-between items-center">
                  <span className="text-[#6F6A63] font-semibold">Minimum Outstation</span>
                  <span className="font-extrabold text-[#252525]">300 km / day</span>
                </div>
              </div>

              <a
                href={`https://wa.me/917676726209?text=${encodeURIComponent(
                  `Hi Coffee Cabs! I want to book the ${activeVehicle.name}. Please confirm availability.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#4A3025] text-white text-xs font-bold rounded-full hover:bg-[#23483A] transition-all shadow-md"
              >
                Book {activeVehicle.shortName} via WhatsApp <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* ── DESKTOP & TABLET TABLE VIEW ── */}
          <div className="hidden sm:block rounded-3xl overflow-hidden border border-[#DDD5C8] bg-[#FFFFFF] shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-[#EDE5D8] text-[#4A3025]">
                  <th className="text-left px-6 py-4 text-xs font-extrabold uppercase tracking-wider">Vehicle Model</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider">Seating</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider text-[#23483A]">Rate / Km</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider text-[#23483A]">Driver Allowance</th>
                  <th className="text-center px-4 py-4 text-xs font-extrabold uppercase tracking-wider">Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDD5C8]">
                {VEHICLES.map((v) => (
                  <tr
                    key={v.id}
                    className="hover:bg-[#F7F3EC] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="font-bold text-sm text-[#252525]">{v.name}</div>
                      <div className="text-[11px] text-[#6F6A63]">{v.company}</div>
                    </td>
                    <td className="text-center px-4 py-5 text-xs text-[#6F6A63] font-semibold">{v.seats}</td>
                    <td className="text-center px-4 py-5">
                      <span className="font-extrabold text-[#23483A] text-sm">₹{v.pricePerKm}</span>
                      <span className="text-[#6F6A63] text-xs">/km</span>
                    </td>
                    <td className="text-center px-4 py-5">
                      <span className="font-extrabold text-[#23483A] text-sm">₹{v.driverAllowance}</span>
                      <span className="text-[#6F6A63] text-xs">/day</span>
                    </td>
                    <td className="text-center px-4 py-5">
                      <a
                        href={`https://wa.me/917676726209?text=${encodeURIComponent(
                          `Hi Coffee Cabs! I want to book the ${v.name}. Please confirm availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#4A3025] text-white hover:bg-[#23483A] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A]"
                        aria-label={`Book ${v.name} via WhatsApp`}
                      >
                        <ArrowRight size={16} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Enquiry Section */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC] border-y border-[#DDD5C8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm
            title="Send Booking Enquiry for Vehicle Tariff"
            subtitle="Select your vehicle preference and trip details to receive owner-approved pricing confirmation."
          />
        </div>
      </section>

      {/* Terms & Policies Grid */}
      <section className="py-16 sm:py-24 bg-[#F7F3EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A3025] mb-8 text-center">
            Outstation Terms & Operating Guidelines
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#DDD5C8] shadow-sm">
              <h3 className="font-bold text-[#4A3025] mb-3 text-sm flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#23483A]" /> Included in Per-Km Rate
              </h3>
              <ul className="space-y-2">
                {PRICING_TERMS.included.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#6F6A63]">
                    <CheckCircle2 size={13} className="text-[#23483A] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#DDD5C8] shadow-sm">
              <h3 className="font-bold text-[#4A3025] mb-3 text-sm flex items-center gap-2">
                <ChevronRight size={16} className="text-[#23483A]" /> Additional Charges (As per Actuals)
              </h3>
              <ul className="space-y-2">
                {PRICING_TERMS.extras.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#6F6A63]">
                    <ChevronRight size={12} className="text-[#23483A] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#DDD5C8] shadow-sm">
              <h3 className="font-bold text-[#4A3025] mb-3 text-sm flex items-center gap-2">
                <span className="text-[#23483A]">📋</span> Billing Rules
              </h3>
              <ul className="space-y-2 text-xs text-[#6F6A63]">
                <li><strong className="text-[#252525]">Minimum Outstation:</strong> {PRICING_TERMS.minimumBilling}</li>
                <li><strong className="text-[#252525]">Local Package:</strong> {PRICING_TERMS.localPackage}</li>
                <li><strong className="text-[#252525]">One-Way Trips:</strong> {PRICING_TERMS.oneWay}</li>
              </ul>
            </div>

            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#DDD5C8] shadow-sm">
              <h3 className="font-bold text-[#4A3025] mb-3 text-sm flex items-center gap-2">
                <span className="text-[#B86F52]">✕</span> Cancellation Terms
              </h3>
              <ul className="space-y-2">
                {PRICING_TERMS.cancellation.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#6F6A63]">
                    <ChevronRight size={12} className="text-[#B86F52] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

