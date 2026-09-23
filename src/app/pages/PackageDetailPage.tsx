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
import SEO from "../components/SEO";
import { getPackageDetailSchema } from "../utils/seoSchemas";

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = PACKAGES.find((p) => p.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!pkg) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#F7F3EC] text-[#252525] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-[#FFFFFF] p-8 rounded-3xl border border-[#DDD5C8] shadow-sm">
          <h1 className="text-2xl font-bold text-[#4A3025] mb-3">Tour Package Not Found</h1>
          <p className="text-sm text-[#6F6A63] mb-6">
            The requested tour package could not be found in our packages catalog.
          </p>
          <Link
            to="/travel/packages"
            className="inline-flex items-center gap-2 bg-[#4A3025] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#23483A]"
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gagangowdap.github.io/coffee-cabs/" },
      { "@type": "ListItem", "position": 2, "name": "Travel", "item": "https://gagangowdap.github.io/coffee-cabs/travel" },
      { "@type": "ListItem", "position": 3, "name": "Packages", "item": "https://gagangowdap.github.io/coffee-cabs/travel/packages" },
      { "@type": "ListItem", "position": 4, "name": pkg.title, "item": `https://gagangowdap.github.io/coffee-cabs/travel/packages/${pkg.slug}` }
    ]
  };

  return (
    <article className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title={`${pkg.title} (${pkg.duration}) Tour Package`}
        description={`Book ${pkg.title}. Route: ${pkg.route}. Duration: ${pkg.duration}. Rent Toyota Innova Crysta, Force Urbania or Tempo Traveller with Coffee Cabs.`}
        canonicalUrl={`https://gagangowdap.github.io/coffee-cabs/travel/packages/${pkg.slug}`}
        schemaJson={getPackageDetailSchema(pkg)}
      />
      {/* PACKAGE HERO */}
      <section className="bg-[#EDE5D8] border-b border-[#DDD5C8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#6F6A63] mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#23483A] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#23483A] transition-colors">Travel</Link>
            <span>/</span>
            <Link to="/travel/packages" className="hover:text-[#23483A] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#252525] font-bold">{pkg.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#23483A] text-white text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {pkg.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-[#252525] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#DDD5C8]">
              <Clock size={14} className="text-[#23483A]" />
              {pkg.duration}
            </span>
            <span className="text-xs text-[#6F6A63] font-semibold bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#DDD5C8]">
              ~{pkg.approximateDistance}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4A3025] tracking-tight mb-4 max-w-4xl">
            {pkg.title}
          </h1>

          <div className="flex items-start gap-2 text-sm text-[#252525] bg-[#FFFFFF] p-4 rounded-2xl border border-[#DDD5C8] max-w-3xl">
            <Navigation size={18} className="text-[#23483A] shrink-0 mt-0.5" />
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
            <h2 className="text-2xl font-bold text-[#4A3025] mb-6 pb-2 border-b border-[#DDD5C8] flex items-center gap-2">
              <Calendar size={22} className="text-[#23483A]" />
              Day-Wise Tour Itinerary
            </h2>

            <div className="space-y-6">
              {pkg.dayWiseItinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-3xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#23483A] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                      D{day.day}
                    </span>
                    <h3 className="text-lg font-bold text-[#252525]">
                      {day.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    {day.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6F6A63]">
                        <span className="text-[#23483A] font-bold shrink-0">•</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>

                  {day.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#DDD5C8]">
                      {day.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold bg-[#F7F3EC] text-[#23483A] px-3 py-1 rounded-md border border-[#DDD5C8]"
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
          <div className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#4A3025] mb-3">
              Doorstep Pickup & Drop Logistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#6F6A63]">
              <div>
                <strong className="text-[#23483A] block mb-1">PICKUP COVERAGE:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {pkg.pickupAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-[#23483A] block mb-1">DROP COVERAGE:</strong>
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
            <h2 className="text-2xl font-bold text-[#4A3025] mb-6 pb-2 border-b border-[#DDD5C8] flex items-center gap-2">
              <Car size={22} className="text-[#23483A]" />
              Available Chauffeur Fleet for this Package
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suitableVehicles.map((v) => (
                <div
                  key={v.id}
                  className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-2xl p-4 flex items-center gap-4 shadow-sm"
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-20 h-16 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#252525]">{v.shortName}</h4>
                    <p className="text-xs text-[#6F6A63]">{v.seatingCapacity}</p>
                    <span className="text-[11px] text-[#23483A] font-semibold">
                      ₹{v.pricePerKm}/km base rate
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#252525] mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#23483A]" />
                Package Inclusions
              </h3>
              <ul className="space-y-2 text-xs text-[#6F6A63]">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#23483A] font-bold shrink-0">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#252525] mb-4 flex items-center gap-2">
                <XCircle size={18} className="text-[#B86F52]" />
                Exclusions & Extras
              </h3>
              <ul className="space-y-2 text-xs text-[#6F6A63]">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#B86F52] font-bold shrink-0">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQS */}
          {pkg.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#4A3025] mb-6 pb-2 border-b border-[#DDD5C8] flex items-center gap-2">
                <HelpCircle size={22} className="text-[#23483A]" />
                Package FAQs
              </h2>

              <div className="space-y-3">
                {pkg.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full text-left p-4 text-sm font-bold text-[#252525] flex items-center justify-between gap-4 hover:text-[#23483A] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaqIndex === i && (
                      <div className="p-4 pt-0 text-xs text-[#6F6A63] border-t border-[#DDD5C8] leading-relaxed">
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
          <div className="bg-[#FFFFFF] border border-[#DDD5C8] rounded-3xl p-6 shadow-md sticky top-28">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#23483A] bg-[#F7F3EC] px-3 py-1 rounded-full border border-[#DDD5C8] inline-block mb-3">
              TRANSPARENT PRICING
            </span>

            <h3 className="text-2xl font-extrabold text-[#4A3025] mb-2">
              {pkg.pricingStatus === "approved" ? pkg.startingFareNote : "Owner-Approved Fare"}
            </h3>

            <p className="text-xs text-[#6F6A63] font-semibold mb-6">
              Available on direct enquiry. No hidden charges.
            </p>

            <Link
              to={`/booking?package=${encodeURIComponent(pkg.title)}`}
              className="w-full text-center bg-[#4A3025] hover:bg-[#23483A] text-white text-sm font-extrabold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mb-3"
            >
              <span>ENQUIRE PACKAGE FARE</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/919900000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#23483A]/10 hover:bg-[#23483A]/20 text-[#23483A] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#23483A]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WHATSAPP INSTANT ENQUIRY</span>
            </a>
          </div>

          {/* INCLUDED DESTINATIONS */}
          {includedDestinations.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#4A3025] mb-4">
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
