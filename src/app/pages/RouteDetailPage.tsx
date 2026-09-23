import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  Navigation,
  Clock,
  MapPin,
  Car,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { ROUTES, CommercialRoute } from "../data/routes";
import { VEHICLES } from "../data/vehicles";
import { DESTINATIONS } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

export default function RouteDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const route = ROUTES.find((r) => r.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!route) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#08111C] text-[#F4F1E8] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-[#132333] p-8 rounded-3xl border border-[#AEB7C2]/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-[#F4F1E8] mb-3">Taxi Route Not Found</h1>
          <p className="text-sm text-[#AEB7C2] mb-6">
            The requested outstation taxi route could not be found.
          </p>
          <Link
            to="/routes"
            className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#08111C] font-extrabold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#b08d4b]"
          >
            <ArrowLeft size={16} />
            <span>EXPLORE ALL ROUTES</span>
          </Link>
        </div>
      </div>
    );
  }

  // Suitable vehicles from canonical source
  const availableVehicles = VEHICLES.filter((v) => route.vehicleIds.includes(v.id));

  // Related destinations
  const relatedDestinations = DESTINATIONS.filter((d) => route.relatedDestinations.includes(d.id));

  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I would like to book a cab for the route: ${route.title} (${route.approximateDistance}). Please share vehicle availability & fare.`
  );

  return (
    <article className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* ROUTE HERO */}
      <section className="bg-gradient-to-b from-[#132333] to-[#08111C] border-b border-[#AEB7C2]/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#AEB7C2] mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#C6A15B] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/routes" className="hover:text-[#C6A15B] transition-colors">Outstation Routes</Link>
            <span>/</span>
            <span className="text-[#F4F1E8] font-bold">{route.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#C6A15B] text-[#08111C] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {route.from} → {route.to}
            </span>
            <span className="flex items-center gap-1 text-xs font-bold text-[#F4F1E8] bg-[#08111C] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
              <Clock size={14} className="text-[#C6A15B]" />
              {route.approximateDriveTime}
            </span>
            <span className="text-xs text-[#AEB7C2] font-semibold bg-[#08111C] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
              ~{route.approximateDistance}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8] tracking-tight mb-4 max-w-4xl">
            {route.title}
          </h1>

          <p className="text-[#AEB7C2] text-sm md:text-base max-w-3xl leading-relaxed">
            {route.routeDescription}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN - LOGISTICS & ITINERARY OPTIONS */}
        <div className="lg:col-span-2 space-y-12">
          {/* HIGHWAY & TRIP TYPES */}
          <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6">
            <h2 className="text-lg font-bold text-[#F4F1E8] mb-4 flex items-center gap-2">
              <Navigation size={20} className="text-[#C6A15B]" />
              Highway Corridor & Service Modes
            </h2>

            <div className="mb-4">
              <span className="text-xs text-[#AEB7C2] block mb-1">HIGHWAY DETAILS:</span>
              <p className="text-sm font-bold text-[#F4F1E8]">{route.highwayDetails}</p>
            </div>

            <div>
              <span className="text-xs text-[#AEB7C2] block mb-2">AVAILABLE TRIP MODES:</span>
              <div className="flex flex-wrap gap-2">
                {route.tripTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs font-semibold bg-[#08111C] text-[#C6A15B] px-3.5 py-1.5 rounded-xl border border-[#C6A15B]/30"
                  >
                    ✓ {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* PICKUP & DROP LOCATIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6">
              <h3 className="text-base font-bold text-[#F4F1E8] mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-[#C6A15B]" />
                {route.from} Pickup Locations
              </h3>
              <ul className="space-y-1.5 text-xs text-[#AEB7C2]">
                {route.pickupAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#C6A15B] font-bold">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6">
              <h3 className="text-base font-bold text-[#F4F1E8] mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-[#C6A15B]" />
                {route.to} Drop Locations
              </h3>
              <ul className="space-y-1.5 text-xs text-[#AEB7C2]">
                {route.dropAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#C6A15B] font-bold">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EN-ROUTE ITINERARY CHOICES */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6 pb-2 border-b border-[#AEB7C2]/15">
              En Route Sightseeing & Halts
            </h2>

            <div className="space-y-4">
              {route.itineraryChoices.map((choice, i) => (
                <div
                  key={i}
                  className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-[#F4F1E8]">{choice.title}</h3>
                    <span className="text-xs font-bold text-[#C6A15B] bg-[#08111C] px-3 py-1 rounded-full border border-[#C6A15B]/30">
                      {choice.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#AEB7C2] mb-4 leading-relaxed">
                    {choice.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#AEB7C2]/10">
                    {choice.highlights.map((hl, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-medium bg-[#08111C] text-[#AEB7C2] px-3 py-1 rounded-md border border-[#AEB7C2]/15"
                      >
                        ★ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AVAILABLE VEHICLES */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6 pb-2 border-b border-[#AEB7C2]/15 flex items-center gap-2">
              <Car size={22} className="text-[#C6A15B]" />
              Suitable Outstation Vehicles for this Route
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableVehicles.map((v) => (
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

          {/* FAQS */}
          {route.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6 pb-2 border-b border-[#AEB7C2]/15 flex items-center gap-2">
                <HelpCircle size={22} className="text-[#C6A15B]" />
                Route FAQs
              </h2>

              <div className="space-y-3">
                {route.faqs.map((faq, i) => (
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

        {/* RIGHT COLUMN - BOOKING CTA & RELATED DESTINATIONS */}
        <div className="space-y-8">
          {/* BOOKING CARD */}
          <div className="bg-gradient-to-b from-[#132333] to-[#08111C] border border-[#C6A15B]/40 rounded-3xl p-6 shadow-2xl sticky top-28">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C6A15B] bg-[#08111C] px-3 py-1 rounded-full border border-[#C6A15B]/30 inline-block mb-3">
              OUTSTATION CAB BOOKING
            </span>

            <h3 className="text-xl font-bold text-[#F4F1E8] mb-2">
              Book {route.from} to {route.to} Cab
            </h3>

            <p className="text-xs text-[#AEB7C2] mb-6 leading-relaxed">
              Rent Toyota Innova Crysta, Force Urbania, or Tempo Traveller for one-way or round trip outstation journey.
            </p>

            <Link
              to={`/booking?destination=${encodeURIComponent(route.to)}&pickup=${encodeURIComponent(route.from)}`}
              className="w-full text-center bg-[#C6A15B] hover:bg-[#b08d4b] text-[#08111C] text-sm font-extrabold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-3"
            >
              <span>BOOK INSTANT CAB</span>
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

          {/* RELATED DESTINATIONS */}
          {relatedDestinations.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#F4F1E8] mb-4">
                Destinations along this Route
              </h3>
              <div className="space-y-4">
                {relatedDestinations.map((d) => (
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
