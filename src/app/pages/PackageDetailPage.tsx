import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  Clock,
  Navigation,
  CheckCircle2,
  XCircle,
  Car,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { PACKAGES, TourPackage } from "../data/packages";
import { VEHICLES } from "../data/vehicles";
import { DESTINATIONS } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = PACKAGES.find((p) => p.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!pkg) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#08111C] text-[#F4F1E8] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-[#132333] p-8 rounded-3xl border border-[#AEB7C2]/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-[#F4F1E8] mb-3">Tour Package Not Found</h1>
          <p className="text-sm text-[#AEB7C2] mb-6">
            The requested tour package could not be found in our packages catalog.
          </p>
          <Link
            to="/travel/packages"
            className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#08111C] font-extrabold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#b08d4b]"
          >
            <ArrowLeft size={16} />
            <span>EXPLORE ALL PACKAGES</span>
          </Link>
        </div>
      </div>
    );
  }

  // Vehicles referenced from canonical vehicles.ts
  const suitableVehicles = VEHICLES.filter((v) => pkg.vehicleIds.includes(v.id));

  // Destinations included in package
  const includedDestinations = DESTINATIONS.filter((d) => pkg.destinationIds.includes(d.id));

  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I would like to inquire about booking the "${pkg.title}" (${pkg.duration}). Please share vehicle availability & fare details.`
  );

  return (
    <article className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* PACKAGE HERO */}
      <section className="bg-gradient-to-b from-[#132333] to-[#08111C] border-b border-[#AEB7C2]/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#AEB7C2] mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#C6A15B] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#C6A15B] transition-colors">Travel</Link>
            <span>/</span>
            <Link to="/travel/packages" className="hover:text-[#C6A15B] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#F4F1E8] font-bold">{pkg.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#C6A15B] text-[#08111C] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {pkg.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-[#F4F1E8] bg-[#08111C] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
              <Clock size={14} className="text-[#C6A15B]" />
              {pkg.duration}
            </span>
            <span className="text-xs text-[#AEB7C2] font-semibold bg-[#08111C] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
              ~{pkg.approximateDistance}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8] tracking-tight mb-4 max-w-4xl">
            {pkg.title}
          </h1>

          <div className="flex items-start gap-2 text-sm text-[#AEB7C2] bg-[#08111C]/80 p-4 rounded-2xl border border-[#AEB7C2]/15 max-w-3xl">
            <Navigation size={18} className="text-[#C6A15B] shrink-0 mt-0.5" />
            <span><strong>Route Circuit:</strong> {pkg.route}</span>
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN - ITINERARY & DETAILS */}
        <div className="lg:col-span-2 space-y-12">
          {/* DAY-WISE ITINERARY */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6 pb-2 border-b border-[#AEB7C2]/15 flex items-center gap-2">
              <Calendar size={22} className="text-[#C6A15B]" />
              Day-Wise Tour Itinerary
            </h2>

            <div className="space-y-6">
              {pkg.dayWiseItinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#C6A15B] text-[#08111C] font-extrabold text-sm flex items-center justify-center shrink-0">
                      D{day.day}
                    </span>
                    <h3 className="text-lg font-bold text-[#F4F1E8]">
                      {day.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    {day.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#AEB7C2]">
                        <span className="text-[#C6A15B] font-bold shrink-0">•</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>

                  {day.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#AEB7C2]/10">
                      {day.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold bg-[#08111C] text-[#C6A15B] px-3 py-1 rounded-md border border-[#C6A15B]/20"
                        >
                          ★ {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PICKUP & DROP LOCATIONS */}
          <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6">
            <h3 className="text-lg font-bold text-[#F4F1E8] mb-3">
              Doorstep Pickup & Drop Logistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#AEB7C2]">
              <div>
                <strong className="text-[#C6A15B] block mb-1">PICKUP COVERAGE:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {pkg.pickupAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-[#C6A15B] block mb-1">DROP COVERAGE:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {pkg.dropAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SUITABLE VEHICLES FROM CANONICAL VEHICLES.TS */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6 pb-2 border-b border-[#AEB7C2]/15 flex items-center gap-2">
              <Car size={22} className="text-[#C6A15B]" />
              Available Chauffeur Fleet for this Package
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suitableVehicles.map((v) => (
                <div
                  key={v.id}
                  className="bg-[#132333] border border-[#AEB7C2]/15 rounded-2xl p-4 flex items-center gap-4"
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-20 h-16 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#F4F1E8]">{v.shortName}</h4>
                    <p className="text-xs text-[#AEB7C2]">{v.seatingCapacity}</p>
                    <span className="text-[11px] text-[#C6A15B] font-semibold">
                      ₹{v.pricePerKm}/km base rate
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-[#F4F1E8] mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-400" />
                Package Inclusions
              </h3>
              <ul className="space-y-2 text-xs text-[#AEB7C2]">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6">
              <h3 className="text-lg font-bold text-[#F4F1E8] mb-4 flex items-center gap-2">
                <XCircle size={18} className="text-amber-400" />
                Exclusions & Extras
              </h3>
              <ul className="space-y-2 text-xs text-[#AEB7C2]">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQS */}
          {pkg.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6 pb-2 border-b border-[#AEB7C2]/15 flex items-center gap-2">
                <HelpCircle size={22} className="text-[#C6A15B]" />
                Package FAQs
              </h2>

              <div className="space-y-3">
                {pkg.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-[#132333] border border-[#AEB7C2]/15 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full text-left p-4 text-sm font-bold text-[#F4F1E8] flex items-center justify-between gap-4 hover:text-[#C6A15B] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaqIndex === i && (
                      <div className="p-4 pt-0 text-xs text-[#AEB7C2] border-t border-[#AEB7C2]/10 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - BOOKING CTA & INCLUDED DESTINATIONS */}
        <div className="space-y-8">
          {/* PRICING & BOOKING CARD */}
          <div className="bg-gradient-to-b from-[#132333] to-[#08111C] border border-[#C6A15B]/40 rounded-3xl p-6 shadow-2xl sticky top-28">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C6A15B] bg-[#08111C] px-3 py-1 rounded-full border border-[#C6A15B]/30 inline-block mb-3">
              TRANSPARENT PRICING
            </span>

            <h3 className="text-2xl font-extrabold text-[#F4F1E8] mb-2">
              {pkg.pricingStatus === "approved" ? pkg.startingFareNote : "Owner-Approved Fare"}
            </h3>

            <p className="text-xs text-[#C6A15B] font-semibold mb-6">
              Available on direct enquiry. No hidden charges.
            </p>

            <Link
              to={`/booking?package=${encodeURIComponent(pkg.title)}`}
              className="w-full text-center bg-[#C6A15B] hover:bg-[#b08d4b] text-[#08111C] text-sm font-extrabold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-3"
            >
              <span>ENQUIRE PACKAGE FARE</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/919900000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#25D366]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WHATSAPP INSTANT ENQUIRY</span>
            </a>
          </div>

          {/* INCLUDED DESTINATIONS */}
          {includedDestinations.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#F4F1E8] mb-4">
                Destinations Explored in this Package
              </h3>
              <div className="space-y-4">
                {includedDestinations.map((d) => (
                  <DestinationCard key={d.id} destination={d} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
