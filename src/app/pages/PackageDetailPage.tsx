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
      <div className="pt-28 pb-16 min-h-screen bg-[#FFFDF7] text-[#4B3832] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-[#FFFDF7] p-8 rounded-3xl border border-[#DCC7AA] shadow-sm">
          <h1 className="text-2xl font-bold text-[#4B3832] mb-3">Tour Package Not Found</h1>
          <p className="text-sm text-[#6F4E37] mb-6">
            The requested tour package could not be found in our packages catalog.
          </p>
          <Link
            to="/travel/packages"
            className="inline-flex items-center gap-2 bg-[#6F4E37] text-[#FFFDF7] font-extrabold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#4B3832]"
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
    <article className="pt-20 bg-[#FFFDF7] text-[#4B3832] min-h-screen">
      <SEO
        title={`${pkg.title} (${pkg.duration}) Tour Package`}
        description={`Book ${pkg.title}. Route: ${pkg.route}. Duration: ${pkg.duration}. Rent Toyota Innova Crysta, Force Urbania or Tempo Traveller with Coffee Cabs.`}
        canonicalUrl={`https://gagangowdap.github.io/coffee-cabs/travel/packages/${pkg.slug}`}
        schemaJson={getPackageDetailSchema(pkg)}
      />
      {/* PACKAGE HERO */}
      <section className="bg-[#F5E6CA] border-b border-[#DCC7AA] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#6F4E37] mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#4B3832] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#4B3832] transition-colors">Travel</Link>
            <span>/</span>
            <Link to="/travel/packages" className="hover:text-[#4B3832] transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-[#4B3832] font-bold">{pkg.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#6F4E37] text-[#FFFDF7] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {pkg.category}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-[#4B3832] bg-[#FFFDF7] px-3 py-1 rounded-full border border-[#DCC7AA]">
              <Clock size={14} className="text-[#6F4E37]" />
              {pkg.duration}
            </span>
            <span className="text-xs text-[#6F4E37] font-semibold bg-[#FFFDF7] px-3 py-1 rounded-full border border-[#DCC7AA]">
              ~{pkg.approximateDistance}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4B3832] tracking-tight mb-4 max-w-4xl">
            {pkg.title}
          </h1>

          <div className="flex items-start gap-2 text-sm text-[#4B3832] bg-[#FFFDF7] p-4 rounded-2xl border border-[#DCC7AA] max-w-3xl">
            <Navigation size={18} className="text-[#6F4E37] shrink-0 mt-0.5" />
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
            <h2 className="text-2xl font-bold text-[#4B3832] mb-6 pb-2 border-b border-[#DCC7AA] flex items-center gap-2">
              <Calendar size={22} className="text-[#6F4E37]" />
              Day-Wise Tour Itinerary
            </h2>

            <div className="space-y-6">
              {pkg.dayWiseItinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#6F4E37] text-[#FFFDF7] font-extrabold text-sm flex items-center justify-center shrink-0">
                      D{day.day}
                    </span>
                    <h3 className="text-lg font-bold text-[#4B3832]">
                      {day.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    {day.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6F4E37]">
                        <span className="text-[#6F4E37] font-bold shrink-0">•</span>
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>

                  {day.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#DCC7AA]">
                      {day.highlights.map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold bg-[#F5E6CA] text-[#6F4E37] px-3 py-1 rounded-md border border-[#DCC7AA]"
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
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#4B3832] mb-3">
              Doorstep Pickup & Drop Logistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#6F4E37]">
              <div>
                <strong className="text-[#6F4E37] block mb-1">PICKUP COVERAGE:</strong>
                <ul className="list-disc pl-4 space-y-1">
                  {pkg.pickupAreas.map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-[#6F4E37] block mb-1">DROP COVERAGE:</strong>
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
            <h2 className="text-2xl font-bold text-[#4B3832] mb-6 pb-2 border-b border-[#DCC7AA] flex items-center gap-2">
              <Car size={22} className="text-[#6F4E37]" />
              Available Chauffeur Fleet for this Package
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suitableVehicles.map((v) => (
                <div
                  key={v.id}
                  className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl p-4 flex items-center gap-4 shadow-sm"
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-20 h-16 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#4B3832]">{v.shortName}</h4>
                    <p className="text-xs text-[#6F4E37]">{v.seatingCapacity}</p>
                    <span className="text-[11px] text-[#6F4E37] font-semibold">
                      ₹{v.pricePerKm}/km base rate
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#4B3832] mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#6F4E37]" />
                Package Inclusions
              </h3>
              <ul className="space-y-2 text-xs text-[#6F4E37]">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#6F4E37] font-bold shrink-0">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#4B3832] mb-4 flex items-center gap-2">
                <XCircle size={18} className="text-[#B86F52]" />
                Exclusions & Extras
              </h3>
              <ul className="space-y-2 text-xs text-[#6F4E37]">
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
              <h2 className="text-2xl font-bold text-[#4B3832] mb-6 pb-2 border-b border-[#DCC7AA] flex items-center gap-2">
                <HelpCircle size={22} className="text-[#6F4E37]" />
                Package FAQs
              </h2>

              <div className="space-y-3">
                {pkg.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full text-left p-4 text-sm font-bold text-[#4B3832] flex items-center justify-between gap-4 hover:text-[#6F4E37] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaqIndex === i && (
                      <div className="p-4 pt-0 text-xs text-[#6F4E37] border-t border-[#DCC7AA] leading-relaxed">
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
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-md sticky top-28">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6F4E37] bg-[#F5E6CA] px-3 py-1 rounded-full border border-[#DCC7AA] inline-block mb-3">
              TRANSPARENT PRICING
            </span>

            <h3 className="text-2xl font-extrabold text-[#4B3832] mb-2">
              {pkg.pricingStatus === "approved" ? pkg.startingFareNote : "Owner-Approved Fare"}
            </h3>

            <p className="text-xs text-[#6F4E37] font-semibold mb-6">
              Available on direct enquiry. No hidden charges.
            </p>

            <Link
              to={`/booking?package=${encodeURIComponent(pkg.title)}`}
              className="w-full text-center bg-[#6F4E37] hover:bg-[#4B3832] text-[#FFFDF7] text-sm font-extrabold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mb-3"
            >
              <span>ENQUIRE PACKAGE FARE</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/919900000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#F5E6CA] hover:bg-[#DCC7AA] text-[#6F4E37] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#DCC7AA] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WHATSAPP INSTANT ENQUIRY</span>
            </a>
          </div>

          {/* INCLUDED DESTINATIONS */}
          {includedDestinations.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#4B3832] mb-4">
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
