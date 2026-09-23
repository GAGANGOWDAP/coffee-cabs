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
import { DESTINATIONS } from "../data/destinations";
import { PACKAGES } from "../data/packages";
import { ROUTES } from "../data/routes";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import RouteCard from "../components/RouteCard";
import SEO from "../components/SEO";

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!destination) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#F7F3EC] text-[#252525] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-[#DDD5C8] shadow-sm">
          <h1 className="text-2xl font-bold text-[#4A3025] mb-3">Destination Not Found</h1>
          <p className="text-sm text-[#6F6A63] mb-6 font-medium">
            The requested travel destination could not be located in our travel dictionary.
          </p>
          <Link
            to="/travel/destinations"
            className="inline-flex items-center gap-2 bg-[#4A3025] text-white font-bold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#23483A]"
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

  // Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gagangowdap.github.io/coffee-cabs/" },
      { "@type": "ListItem", "position": 2, "name": "Travel", "item": "https://gagangowdap.github.io/coffee-cabs/travel" },
      { "@type": "ListItem", "position": 3, "name": "Destinations", "item": "https://gagangowdap.github.io/coffee-cabs/travel/destinations" },
      { "@type": "ListItem", "position": 4, "name": destination.name, "item": `https://gagangowdap.github.io/coffee-cabs/travel/destinations/${destination.slug}` }
    ]
  };

  const faqSchema = destination.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": destination.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  } : null;

  return (
    <article className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title={`${destination.name} Travel Guide & Outstation Cabs`}
        description={`Explore ${destination.name} (${destination.district}, ${destination.region}). Distance: ${destination.approximateDistanceFromBengaluru} from Bengaluru. Book private Toyota Innova Crysta & Force Urbania cabs with Coffee Cabs.`}
        canonicalUrl={`https://gagangowdap.github.io/coffee-cabs/travel/destinations/${destination.slug}`}
        ogImage={destination.heroImage}
        ogType="article"
        schemaJson={faqSchema ? [breadcrumbSchema, faqSchema] : [breadcrumbSchema]}
      />
      {/* 1. DESTINATION HERO */}
      <section className="relative min-h-[50vh] flex items-end pb-10 bg-[#EDE5D8] border-b border-[#DDD5C8]">
        <div className="absolute inset-0">
          <img
            src={destination.heroImage || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1600&h=900&fit=crop"}
            alt={destination.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EDE5D8] via-[#EDE5D8]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#6F6A63] mb-4 overflow-x-auto whitespace-nowrap font-medium">
            <Link to="/" className="hover:text-[#23483A] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#23483A] transition-colors">Travel</Link>
            <span>/</span>
            <Link to="/travel/destinations" className="hover:text-[#23483A] transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-[#252525] font-bold">{destination.name}</span>
          </div>

          {/* Region & Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-[#23483A] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              {destination.region}
            </span>
            <span className="text-xs font-bold bg-white text-[#4A3025] px-3 py-1 rounded-full border border-[#DDD5C8]">
              {destination.district}, Karnataka
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4A3025] tracking-tight mb-4">
            {destination.name}
          </h1>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDD5C8]">
            <div className="flex items-center gap-2 text-xs text-[#6F6A63] font-medium">
              <ShieldCheck size={16} className="text-[#23483A]" />
              <span>Last Verified: <strong className="text-[#252525]">{destination.lastVerified}</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F3EC] text-[#252525] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#DDD5C8] transition-all shadow-sm"
              >
                <Share2 size={14} className="text-[#23483A]" />
                <span>SHARE</span>
              </button>

              <button
                onClick={copyLink}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F3EC] text-[#252525] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#DDD5C8] transition-all shadow-sm"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-[#23483A]" />}
                <span>{copied ? "COPIED" : "COPY LINK"}</span>
              </button>

              <Link
                to={`/booking?destination=${encodeURIComponent(destination.name)}`}
                className="inline-flex items-center gap-2 bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all"
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
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-12">
          {/* 2. TRAVEL SNAPSHOT GRID */}
          <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-sm">
            <div>
              <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <MapPin size={12} className="text-[#23483A]" /> DISTANCE
              </div>
              <div className="text-base sm:text-lg font-bold text-[#252525]">
                {destination.approximateDistanceFromBengaluru}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <Clock size={12} className="text-[#23483A]" /> DRIVE TIME
              </div>
              <div className="text-base sm:text-lg font-bold text-[#252525]">
                {destination.approximateDriveTime}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <Calendar size={12} className="text-[#23483A]" /> BEST SEASON
              </div>
              <div className="text-base sm:text-lg font-bold text-[#252525]">
                {destination.bestSeason}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <Compass size={12} className="text-[#23483A]" /> SUGGESTED STAY
              </div>
              <div className="text-base sm:text-lg font-bold text-[#252525]">
                {destination.suggestedDuration}
              </div>
            </div>
          </div>

          {/* 3. OVERVIEW */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
              Overview & Travel Summary
            </h2>
            <p className="text-[#6F6A63] leading-relaxed text-base font-medium">
              {destination.overview}
            </p>
          </div>

          {/* 4. HISTORY & CULTURE */}
          {destination.historyAndCulture && (
            <div>
              <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
                History & Heritage Context
              </h2>
              <p className="text-[#6F6A63] leading-relaxed text-base font-medium">
                {destination.historyAndCulture}
              </p>
            </div>
          )}

          {/* 5. MAJOR ATTRACTIONS */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
              Major Attractions in {destination.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.majorAttractions.map((attraction, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#DDD5C8] p-4 rounded-2xl flex items-center gap-3 hover:border-[#23483A]/40 transition-colors shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EDE5D8] border border-[#DDD5C8] flex items-center justify-center text-[#23483A] font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-[#252525]">{attraction}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. NEARBY ATTRACTIONS */}
          {destination.nearbyAttractions.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
                Nearby Circuit Attractions
              </h2>
              <div className="flex flex-wrap gap-2">
                {destination.nearbyAttractions.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-white text-[#252525] px-3.5 py-2 rounded-xl border border-[#DDD5C8] flex items-center gap-1.5 shadow-sm"
                  >
                    <MapPin size={12} className="text-[#23483A]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 7. BENGALURU ROUTE */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
              Bengaluru Route & Highway Logistics
            </h2>
            <div className="bg-white border border-[#DDD5C8] p-6 rounded-3xl flex items-start gap-4 shadow-sm">
              <Navigation size={24} className="text-[#23483A] shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-bold text-[#252525] mb-1">
                  Primary Highway Corridor
                </h3>
                <p className="text-sm text-[#6F6A63] leading-relaxed font-medium">
                  {destination.bengaluruRoute}
                </p>
              </div>
            </div>
          </div>

          {/* 8. THINGS TO DO */}
          {destination.thingsToDo.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
                Recommended Activities & Experiences
              </h2>
              <div className="space-y-2.5">
                {destination.thingsToDo.map((thing, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#6F6A63] font-medium">
                    <CheckCircle2 size={16} className="text-[#23483A] shrink-0" />
                    <span>{thing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. LOCAL FOOD & SPECIALTIES */}
          {destination.localFood && (
            <div>
              <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
                Local Culinary Specialties
              </h2>
              <div className="bg-white border border-[#DDD5C8] p-6 rounded-3xl flex items-start gap-4 shadow-sm">
                <Utensils size={22} className="text-[#23483A] shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-bold text-[#252525] mb-1">Authentic Regional Flavors</h3>
                  <p className="text-sm text-[#6F6A63] leading-relaxed font-medium">{destination.localFood}</p>
                </div>
              </div>
            </div>
          )}

          {/* 10 & 11. ENTRY / PERMIT & SAFETY NOTES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#DDD5C8] p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#252525] mb-2">
                <Ticket size={16} className="text-[#23483A]" />
                ENTRY & PERMIT INFO
              </div>
              <p className="text-xs text-[#6F6A63] leading-relaxed font-medium">
                {destination.entryInformation}
              </p>
              {destination.permitInformation && (
                <p className="text-xs text-[#4A3025] mt-2 font-bold">
                  {destination.permitInformation}
                </p>
              )}
            </div>

            <div className="bg-white border border-[#DDD5C8] p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#252525] mb-2">
                <AlertTriangle size={16} className="text-[#B86F52]" />
                SAFETY & TRAVEL ADVISORY
              </div>
              <p className="text-xs text-[#6F6A63] leading-relaxed font-medium">
                {destination.safetyNotes}
              </p>
            </div>
          </div>

          {/* 12 & 13. ITINERARIES */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
              Suggested Itineraries
            </h2>

            <div className="space-y-6">
              {destination.oneDayItinerary && (
                <div className="bg-white border border-[#DDD5C8] p-6 rounded-3xl shadow-sm">
                  <h3 className="text-lg font-bold text-[#4A3025] mb-2">
                    1-Day Express Itinerary
                  </h3>
                  <p className="text-sm text-[#6F6A63] leading-relaxed font-medium">
                    {destination.oneDayItinerary}
                  </p>
                </div>
              )}

              {destination.twoDayItinerary && (
                <div className="bg-white border border-[#DDD5C8] p-6 rounded-3xl shadow-sm">
                  <h3 className="text-lg font-bold text-[#4A3025] mb-2">
                    2-Day Weekend Itinerary
                  </h3>
                  <p className="text-sm text-[#6F6A63] leading-relaxed font-medium">
                    {destination.twoDayItinerary}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* FAQS */}
          {destination.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {destination.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#DDD5C8] rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full text-left p-4 text-sm font-bold text-[#252525] flex items-center justify-between gap-4 hover:text-[#4A3025] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === i ? <ChevronUp size={16} className="text-[#23483A]" /> : <ChevronDown size={16} className="text-[#6F6A63]" />}
                    </button>
                    {openFaqIndex === i && (
                      <div className="p-4 pt-0 text-xs text-[#6F6A63] border-t border-[#DDD5C8] leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* BOOKING CTA CARD */}
          <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 shadow-sm sticky top-28">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#23483A] bg-[#EDE5D8] px-3 py-1 rounded-full border border-[#DDD5C8] inline-block mb-3">
              OUTSTATION CAB ESCORT
            </span>

            <h3 className="text-xl font-bold text-[#4A3025] mb-2">
              Book Cab to {destination.name}
            </h3>
            <p className="text-xs text-[#6F6A63] mb-6 leading-relaxed font-medium">
              Rent luxury Toyota Innova Crysta, Force Urbania, or Tempo Travellers with professional highway chauffeurs.
            </p>

            <div className="space-y-3 mb-6 text-xs text-[#6F6A63] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#23483A]" />
                <span>Clean sanitised vehicles with air-conditioning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#23483A]" />
                <span>Verified highway drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#23483A]" />
                <span>Owner-approved transparent fare on enquiry</span>
              </div>
            </div>

            <Link
              to={`/booking?destination=${encodeURIComponent(destination.name)}`}
              className="w-full text-center bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 mb-3"
            >
              <span>GET INSTANT CAB FARE</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`https://wa.me/917676726209?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#EDE5D8] hover:bg-[#DDD5C8] text-[#23483A] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#DDD5C8] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WHATSAPP CHAT ENQUIRY</span>
            </a>
          </div>

          {/* RELATED PACKAGES */}
          {relatedPackages.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#4A3025] mb-4">
                Tour Packages Covering {destination.name}
              </h3>
              <div className="space-y-4">
                {relatedPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          )}

          {/* RELATED ROUTES */}
          {relatedRoutes.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#4A3025] mb-4">
                Outstation Taxi Routes
              </h3>
              <div className="space-y-4">
                {relatedRoutes.map((r) => (
                  <RouteCard key={r.id} route={r} />
                ))}
              </div>
            </div>
          )}

          {/* RELATED DESTINATIONS */}
          {relatedDestinations.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-[#4A3025] mb-4">
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
