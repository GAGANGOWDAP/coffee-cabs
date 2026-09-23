import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  MapPin,
  Clock,
  Calendar,
  Compass,
  Share2,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Copy,
  Check,
  ShieldCheck,
  Navigation,
  Utensils,
  Ticket,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { DESTINATIONS, Destination } from "../data/destinations";
import { PACKAGES } from "../data/packages";
import { ROUTES } from "../data/routes";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import RouteCard from "../components/RouteCard";

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!destination) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#08111C] text-[#F4F1E8] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-[#132333] p-8 rounded-3xl border border-[#AEB7C2]/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-[#F4F1E8] mb-3">Destination Not Found</h1>
          <p className="text-sm text-[#AEB7C2] mb-6">
            The requested travel destination could not be located in our travel dictionary.
          </p>
          <Link
            to="/travel/destinations"
            className="inline-flex items-center gap-2 bg-[#C6A15B] text-[#08111C] font-extrabold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#b08d4b]"
          >
            <ArrowLeft size={16} />
            <span>EXPLORE DESTINATIONS DICTIONARY</span>
          </Link>
        </div>
      </div>
    );
  }

  // Related data calculation from canonical source
  const relatedDestinations = DESTINATIONS.filter(
    (d) => destination.relatedDestinations.includes(d.id) && d.id !== destination.id
  ).slice(0, 3);

  const relatedPackages = PACKAGES.filter(
    (p) => destination.relatedPackages.includes(p.id) || p.destinationIds.includes(destination.id)
  ).slice(0, 3);

  const relatedRoutes = ROUTES.filter(
    (r) => destination.relatedRoutes.includes(r.id) || r.relatedDestinations.includes(destination.id)
  ).slice(0, 3);

  // Share handler
  const shareUrl = window.location.href;
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${destination.name} Travel Guide — Coffee Cabs`,
          text: `Check out ${destination.name} travel guide & cab options from Bengaluru!`,
          url: shareUrl
        });
      } catch (e) {
        // Fallback
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I would like to book a cab from Bengaluru to ${destination.name}. Please share vehicle choices & fare options.`
  );

  return (
    <article className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* 1. DESTINATION HERO */}
      <section className="relative min-h-[55vh] flex items-end pb-12">
        <div className="absolute inset-0">
          <img
            src={destination.heroImage || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1600&h=900&fit=crop"}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111C] via-[#08111C]/65 to-transparent opacity-95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#AEB7C2] mb-4 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#C6A15B] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#C6A15B] transition-colors">Travel</Link>
            <span>/</span>
            <Link to="/travel/destinations" className="hover:text-[#C6A15B] transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-[#F4F1E8] font-bold">{destination.name}</span>
          </div>

          {/* Region & Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-[#C6A15B] text-[#08111C] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {destination.region}
            </span>
            <span className="text-xs font-semibold bg-[#132333]/90 text-[#F4F1E8] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
              {destination.district}, Karnataka
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F1E8] tracking-tight mb-4">
            {destination.name}
          </h1>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#AEB7C2]/15">
            <div className="flex items-center gap-2 text-xs text-[#AEB7C2]">
              <ShieldCheck size={16} className="text-[#C6A15B]" />
              <span>Last Verified: <strong className="text-[#F4F1E8]">{destination.lastVerified}</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-[#132333] hover:bg-[#132333]/80 text-[#F4F1E8] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#AEB7C2]/20 transition-all"
              >
                <Share2 size={14} className="text-[#C6A15B]" />
                <span>SHARE</span>
              </button>

              <button
                onClick={copyLink}
                className="inline-flex items-center gap-2 bg-[#132333] hover:bg-[#132333]/80 text-[#F4F1E8] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#AEB7C2]/20 transition-all"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-[#C6A15B]" />}
                <span>{copied ? "COPIED" : "COPY LINK"}</span>
              </button>

              <Link
                to={`/booking?destination=${encodeURIComponent(destination.name)}`}
                className="inline-flex items-center gap-2 bg-[#C6A15B] hover:bg-[#b08d4b] text-[#08111C] text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-lg transition-all"
              >
                <span>BOOK CAB TO {destination.name.toUpperCase()}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN - 20 CONTENT SECTIONS */}
        <div className="lg:col-span-2 space-y-12">
          {/* 2. TRAVEL SNAPSHOT GRID */}
          <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-[11px] text-[#AEB7C2] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <MapPin size={12} className="text-[#C6A15B]" /> DISTANCE
              </div>
              <div className="text-base sm:text-lg font-bold text-[#F4F1E8]">
                {destination.approximateDistanceFromBengaluru}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#AEB7C2] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <Clock size={12} className="text-[#C6A15B]" /> DRIVE TIME
              </div>
              <div className="text-base sm:text-lg font-bold text-[#F4F1E8]">
                {destination.approximateDriveTime}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#AEB7C2] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <Calendar size={12} className="text-[#C6A15B]" /> BEST SEASON
              </div>
              <div className="text-base sm:text-lg font-bold text-[#F4F1E8]">
                {destination.bestSeason}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#AEB7C2] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <Compass size={12} className="text-[#C6A15B]" /> SUGGESTED STAY
              </div>
              <div className="text-base sm:text-lg font-bold text-[#F4F1E8]">
                {destination.suggestedDuration}
              </div>
            </div>
          </div>

          {/* 3. OVERVIEW */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
              Overview & Travel Summary
            </h2>
            <p className="text-[#AEB7C2] leading-relaxed text-base">
              {destination.overview}
            </p>
          </div>

          {/* 4. HISTORY & CULTURE */}
          {destination.historyAndCulture && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
                History & Heritage Context
              </h2>
              <p className="text-[#AEB7C2] leading-relaxed text-base">
                {destination.historyAndCulture}
              </p>
            </div>
          )}

          {/* 5. MAJOR ATTRACTIONS */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
              Major Attractions in {destination.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.majorAttractions.map((attraction, i) => (
                <div
                  key={i}
                  className="bg-[#132333] border border-[#AEB7C2]/15 p-4 rounded-2xl flex items-center gap-3 hover:border-[#C6A15B]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#08111C] border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] font-extrabold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm font-semibold text-[#F4F1E8]">{attraction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. NEARBY ATTRACTIONS */}
          {destination.nearbyAttractions.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
                Nearby Circuit Attractions
              </h2>
              <div className="flex flex-wrap gap-2">
                {destination.nearbyAttractions.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-[#132333] text-[#F4F1E8] px-3.5 py-2 rounded-xl border border-[#AEB7C2]/20 flex items-center gap-1.5"
                  >
                    <MapPin size={12} className="text-[#C6A15B]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 7. BENGALURU ROUTE */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
              Bengaluru Route & Highway Logistics
            </h2>
            <div className="bg-[#132333] border border-[#AEB7C2]/15 p-6 rounded-3xl flex items-start gap-4">
              <Navigation size={24} className="text-[#C6A15B] shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-bold text-[#F4F1E8] mb-1">
                  Primary Highway Corridor
                </h3>
                <p className="text-sm text-[#AEB7C2] leading-relaxed">
                  {destination.bengaluruRoute}
                </p>
              </div>
            </div>
          </div>

          {/* 8. THINGS TO DO */}
          {destination.thingsToDo.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
                Recommended Activities & Experiences
              </h2>
              <div className="space-y-2.5">
                {destination.thingsToDo.map((thing, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#AEB7C2]">
                    <CheckCircle2 size={16} className="text-[#C6A15B] shrink-0" />
                    <span>{thing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. LOCAL FOOD & SPECIALTIES */}
          {destination.localFood && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
                Local Culinary Specialties
              </h2>
              <div className="bg-[#132333] border border-[#AEB7C2]/15 p-6 rounded-3xl flex items-start gap-4">
                <Utensils size={22} className="text-[#C6A15B] shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold text-[#F4F1E8] mb-1">Authentic Regional Flavors</h3>
                  <p className="text-sm text-[#AEB7C2] leading-relaxed">{destination.localFood}</p>
                </div>
              </div>
            </div>
          )}

          {/* 10 & 11. ENTRY / PERMIT & SAFETY NOTES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#132333] border border-[#AEB7C2]/15 p-6 rounded-3xl">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F4F1E8] mb-2">
                <Ticket size={16} className="text-[#C6A15B]" />
                ENTRY & PERMIT INFO
              </div>
              <p className="text-xs text-[#AEB7C2] leading-relaxed">
                {destination.entryInformation}
              </p>
              {destination.permitInformation && (
                <p className="text-xs text-[#C6A15B] mt-2 font-medium">
                  {destination.permitInformation}
                </p>
              )}
            </div>

            <div className="bg-[#132333] border border-[#AEB7C2]/15 p-6 rounded-3xl">
              <div className="flex items-center gap-2 text-sm font-bold text-[#F4F1E8] mb-2">
                <AlertTriangle size={16} className="text-amber-400" />
                SAFETY & TRAVEL ADVISORY
              </div>
              <p className="text-xs text-[#AEB7C2] leading-relaxed">
                {destination.safetyNotes}
              </p>
            </div>
          </div>

          {/* 12 & 13. 1-DAY & 2-DAY ITINERARIES */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
              Suggested Itineraries
            </h2>

            <div className="space-y-6">
              {destination.oneDayItinerary && (
                <div className="bg-[#132333] border border-[#AEB7C2]/15 p-6 rounded-3xl">
                  <h3 className="text-lg font-bold text-[#C6A15B] mb-2">
                    1-Day Express Itinerary
                  </h3>
                  <p className="text-sm text-[#AEB7C2] leading-relaxed">
                    {destination.oneDayItinerary}
                  </p>
                </div>
              )}

              {destination.twoDayItinerary && (
                <div className="bg-[#132333] border border-[#AEB7C2]/15 p-6 rounded-3xl">
                  <h3 className="text-lg font-bold text-[#C6A15B] mb-2">
                    2-Day Weekend Itinerary
                  </h3>
                  <p className="text-sm text-[#AEB7C2] leading-relaxed">
                    {destination.twoDayItinerary}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 17. FAQS */}
          {destination.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {destination.faqs.map((faq, i) => (
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

        {/* RIGHT COLUMN - SIDEBAR CTAS & RELATED LINKS */}
        <div className="space-y-8">
          {/* BOOKING CTA CARD */}
          <div className="bg-gradient-to-b from-[#132333] to-[#08111C] border border-[#C6A15B]/40 rounded-3xl p-6 shadow-2xl sticky top-28">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#C6A15B] bg-[#08111C] px-3 py-1 rounded-full border border-[#C6A15B]/30 inline-block mb-3">
              OUTSTATION CAB ESCORT
            </span>

            <h3 className="text-xl font-bold text-[#F4F1E8] mb-2">
              Book Cab to {destination.name}
            </h3>
            <p className="text-xs text-[#AEB7C2] mb-6 leading-relaxed">
              Rent luxury Toyota Innova Crysta, Force Urbania, or Tempo Travellers with professional highway chauffeurs.
            </p>

            <div className="space-y-3 mb-6 text-xs text-[#AEB7C2]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#C6A15B]" />
                <span>Clean sanitised vehicles with air-conditioning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#C6A15B]" />
                <span>Verified highway drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#C6A15B]" />
                <span>Owner-approved transparent fare on enquiry</span>
              </div>
            </div>

            <Link
              to={`/booking?destination=${encodeURIComponent(destination.name)}`}
              className="w-full text-center bg-[#C6A15B] hover:bg-[#b08d4b] text-[#08111C] text-sm font-extrabold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mb-3"
            >
              <span>GET INSTANT CAB FARE</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/919900000000?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#25D366]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WHATSAPP CHAT ENQUIRY</span>
            </a>
          </div>

          {/* 15. RELATED PACKAGES */}
          {relatedPackages.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#F4F1E8] mb-4">
                Tour Packages Covering {destination.name}
              </h3>
              <div className="space-y-4">
                {relatedPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          )}

          {/* 16. RELATED ROUTES */}
          {relatedRoutes.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#F4F1E8] mb-4">
                Outstation Taxi Routes
              </h3>
              <div className="space-y-4">
                {relatedRoutes.map((r) => (
                  <RouteCard key={r.id} route={r} />
                ))}
              </div>
            </div>
          )}

          {/* 14. RELATED DESTINATIONS */}
          {relatedDestinations.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#F4F1E8] mb-4">
                Nearby Recommended Destinations
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
