import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  MapPin,
  Share2,
  ArrowLeft,
  Copy,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { DESTINATIONS } from "../data/destinations";
import { PACKAGES } from "../data/packages";
import { ROUTES } from "../data/routes";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import RouteCard from "../components/RouteCard";
import SEO from "../components/SEO";
import { getDestinationDetailSchema } from "../utils/seoSchemas";

// Modular Travel Components
import DestinationQuickFacts from "../components/travel/DestinationQuickFacts";
import DestinationAttractions from "../components/travel/DestinationAttractions";
import DestinationThingsToDo from "../components/travel/DestinationThingsToDo";
import DestinationHowToReach from "../components/travel/DestinationHowToReach";
import DestinationItinerary from "../components/travel/DestinationItinerary";
import DestinationFood from "../components/travel/DestinationFood";
import DestinationPracticalInfo from "../components/travel/DestinationPracticalInfo";
import CabRecommendation from "../components/travel/CabRecommendation";
import BookingConversionBanner from "../components/travel/BookingConversionBanner";

export default function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = DESTINATIONS.find((d) => d.slug === slug || d.id === slug);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!destination) {
    return (
      <div className="pt-28 pb-16 min-h-screen bg-[#F7F3EC] text-[#252525] flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl border border-[#DDD5C8] shadow-xs">
          <h1 className="text-2xl font-extrabold text-[#4A3025] mb-3">Destination Not Found</h1>
          <p className="text-sm text-[#6F6A63] mb-6 font-medium">
            The requested travel destination could not be located in our guide.
          </p>
          <Link
            to="/travel"
            className="inline-flex items-center gap-2 bg-[#4A3025] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all hover:bg-[#23483A]"
          >
            <ArrowLeft size={16} />
            <span>EXPLORE KARNATAKA GUIDE</span>
          </Link>
        </div>
      </div>
    );
  }

  // Geographic Nearby Destinations vs Category Related Destinations
  const nearbyDestinations = DESTINATIONS.filter(
    (d) =>
      (destination.nearby_destinations?.includes(d.id) ||
        destination.nearbyAttractions?.includes(d.name) ||
        (d.region === destination.region && d.id !== destination.id))
  ).slice(0, 3);

  const relatedDestinations = DESTINATIONS.filter(
    (d) => destination.relatedDestinations.includes(d.id) && d.id !== destination.id
  ).slice(0, 3);

  const relatedPackages = PACKAGES.filter(
    (p) => destination.relatedPackages?.includes(p.id) || p.destinationIds?.includes(destination.id)
  ).slice(0, 3);

  const relatedRoutes = ROUTES.filter(
    (r) => destination.relatedRoutes?.includes(r.id) || r.relatedDestinations?.includes(destination.id)
  ).slice(0, 3);

  // Share link handler
  const shareUrl = window.location.href;
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${destination.name} Travel Guide — Coffee Cabs`,
          text: `Explore ${destination.name} travel guide & outstation cab options from Bengaluru!`,
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

  return (
    <article className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title={destination.seo_title || `${destination.name} Travel Guide & Outstation Cabs | Coffee Cabs`}
        description={
          destination.meta_description ||
          `Explore ${destination.name} (${destination.district}, ${destination.region}). Distance: ${destination.approximateDistanceFromBengaluru} from Bengaluru. Book Toyota Innova Crysta & Force Urbania cabs.`
        }
        canonicalUrl={destination.canonical_url || `https://gagangowdap.github.io/coffee-cabs/travel/destinations/${destination.slug}`}
        ogImage={destination.heroImage}
        ogType="article"
        schemaJson={getDestinationDetailSchema(destination)}
      />

      {/* ── 1. DESTINATION HERO ── */}
      <section className="relative min-h-[420px] sm:min-h-[480px] flex items-end pb-10 bg-[#EDE5D8] border-b border-[#DDD5C8]">
        {destination.heroImage && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover opacity-35"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#EDE5D8] via-[#EDE5D8]/75 to-transparent" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 space-y-4">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#6F6A63] font-medium overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#23483A] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/travel" className="hover:text-[#23483A] transition-colors">Travel</Link>
            <span>/</span>
            <span className="text-[#252525] font-bold">{destination.name}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {destination.categories?.map((cat, idx) => (
              <span key={idx} className="bg-[#23483A] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {cat}
              </span>
            ))}
            <span className="text-[11px] font-bold bg-white text-[#4A3025] px-3 py-1 rounded-full border border-[#DDD5C8]">
              {destination.district}, {destination.region}
            </span>
            <span className="text-[11px] font-medium bg-white/80 text-[#6F6A63] px-3 py-1 rounded-full border border-[#DDD5C8]">
              Verified Guide • September 2026
            </span>
          </div>

          {/* Heading & Short Intro */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#4A3025] tracking-tight mb-2">
              {destination.name}
            </h1>
            {destination.short_intro && (
              <p className="text-sm sm:text-base text-[#6F6A63] font-medium max-w-3xl leading-relaxed">
                {destination.short_intro}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDD5C8]">
            <div className="flex items-center gap-2 text-xs text-[#6F6A63] font-medium">
              <ShieldCheck size={16} className="text-[#23483A]" />
              <span>Verified Destination Guide • Coffee Cabs</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F3EC] text-[#252525] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#DDD5C8] transition-all shadow-xs"
              >
                <Share2 size={14} className="text-[#23483A]" />
                <span>SHARE</span>
              </button>

              <button
                onClick={copyLink}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F7F3EC] text-[#252525] text-xs font-bold px-4 py-2.5 rounded-xl border border-[#DDD5C8] transition-all shadow-xs"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} className="text-[#23483A]" />}
                <span>{copied ? "COPIED" : "COPY LINK"}</span>
              </button>

              <Link
                to={`/booking?destination=${encodeURIComponent(destination.name)}`}
                className="inline-flex items-center gap-2 bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-xs transition-all"
              >
                <span>BOOK CAB TO {destination.name.toUpperCase()}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN CONTENT LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* LEFT MAIN COLUMN (8 cols on desktop) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* QUICK FACTS */}
          <DestinationQuickFacts destination={destination} />

          {/* OVERVIEW */}
          {destination.overview && (
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#4A3025] pb-2 border-b border-[#DDD5C8]">
                Overview & Travel Summary
              </h2>
              <p className="text-[#6F6A63] leading-relaxed text-sm sm:text-base font-medium">
                {destination.overview}
              </p>
            </div>
          )}

          {/* HISTORY & HERITAGE */}
          {destination.historyAndCulture && (
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#4A3025] pb-2 border-b border-[#DDD5C8]">
                History & Heritage Context
              </h2>
              <p className="text-[#6F6A63] leading-relaxed text-sm sm:text-base font-medium">
                {destination.historyAndCulture}
              </p>
            </div>
          )}

          {/* TOP ATTRACTIONS */}
          <DestinationAttractions destination={destination} />

          {/* RECOMMENDED ACTIVITIES / THINGS TO DO */}
          <DestinationThingsToDo destination={destination} />

          {/* HOW TO REACH */}
          <DestinationHowToReach destination={destination} />

          {/* SUGGESTED ITINERARIES */}
          <DestinationItinerary destination={destination} />

          {/* LOCAL FOOD TO TRY */}
          <DestinationFood destination={destination} />

          {/* PRACTICAL INFORMATION ("BEFORE YOU GO") */}
          <DestinationPracticalInfo destination={destination} />

          {/* FAQS (Only shown if faqs exist) */}
          {destination.faqs && destination.faqs.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#4A3025] pb-2 border-b border-[#DDD5C8]">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {destination.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#DDD5C8] rounded-2xl overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full text-left p-4 text-xs sm:text-sm font-extrabold text-[#252525] flex items-center justify-between gap-4 hover:text-[#4A3025] transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === i ? (
                        <ChevronUp size={16} className="text-[#23483A] shrink-0" />
                      ) : (
                        <ChevronDown size={16} className="text-[#6F6A63] shrink-0" />
                      )}
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

          {/* BOOKING CONVERSION BANNER */}
          <BookingConversionBanner destination={destination} />

        </div>

        {/* RIGHT SIDEBAR (4 cols on desktop) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* STICKY CAB RECOMMENDATION SIDEBAR CARD */}
          <div className="sticky top-24">
            <CabRecommendation destination={destination} />
          </div>

          {/* NEARBY DESTINATIONS */}
          {nearbyDestinations.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#4A3025] flex items-center gap-1.5">
                <MapPin size={14} className="text-[#23483A]" /> Nearby Destinations
              </h3>
              <div className="space-y-3">
                {nearbyDestinations.map((d) => (
                  <DestinationCard key={d.id} destination={d} />
                ))}
              </div>
            </div>
          )}

          {/* RELATED PACKAGES */}
          {relatedPackages.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#4A3025]">
                Tour Packages
              </h3>
              <div className="space-y-3">
                {relatedPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          )}

          {/* RELATED ROUTES */}
          {relatedRoutes.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#4A3025]">
                Outstation Taxi Routes
              </h3>
              <div className="space-y-3">
                {relatedRoutes.map((r) => (
                  <RouteCard key={r.id} route={r} />
                ))}
              </div>
            </div>
          )}

          {/* RELATED DESTINATIONS */}
          {relatedDestinations.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#4A3025] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#23483A]" /> Similar Travel Experiences
              </h3>
              <div className="space-y-3">
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
