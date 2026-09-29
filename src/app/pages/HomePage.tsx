import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/gsapSetup";
import {
  ArrowRight,
  Search,
  Car,
  Filter,
  Phone,
  MessageSquare,
  Award,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import { VEHICLES } from "../data/vehicles";
import { DESTINATIONS } from "../data/destinations";
import VehicleCard from "../components/VehicleCard";
import BookingForm from "../components/BookingForm";
import FleetComparison from "../components/FleetComparison";
import PopularRoutesMatrix from "../components/PopularRoutesMatrix";
import SEO from "../components/SEO";
import { getHomePageSchema } from "../utils/seoSchemas";
import PlanYourJourney from "../components/travel/PlanYourJourney";
import PopularRoutesSection from "../components/travel/PopularRoutesSection";
import VehicleComparisonTable from "../components/travel/VehicleComparisonTable";

export default function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "Hill Station",
    "Heritage",
    "Nature",
    "Beach",
    "Wildlife",
    "Pilgrimage",
    "Waterfalls"
  ];
  const defaultFallbackImg =
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop";

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || d.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  }).slice(0, 8);

  const faqs = [
    {
      q: "What are the pricing rules and tariff terms for Coffee Cabs?",
      a: "We follow owner-approved per-kilometer rates (e.g., ₹19/km for Innova Crysta, ₹35/km for 7+1 TT Recliner, ₹38-₹50/km for Force Urbania variants, and ₹55/km for Luxury Buses) with a standard 300 km/day minimum billing rule plus driver daily allowance. When you submit a booking enquiry, our reservation team confirms the available vehicle and exact applicable price.",
    },
    {
      q: "What makes the Force Urbania and Tempo Traveller Maharaja seats special?",
      a: "Our Force Urbania and 7+1 Luxury Tempo Travellers feature ultra-wide, plush leather Maharaja-style recliners with individual armrests, leg support, individual AC blowers, ambient LED lighting, and individual USB charging ports for private-jet level comfort.",
    },
    {
      q: "How do I book a vehicle with Coffee Cabs?",
      a: "Booking takes under 60 seconds! Simply choose your vehicle or destination, click 'Book via WhatsApp' or call us directly at +91 76767 26209. We provide instant availability, fixed quotes, and driver confirmation.",
    },
    {
      q: "Can I request custom multi-stop trip itineraries?",
      a: "Yes! Simply use our Booking & Enquiry form or contact us directly on WhatsApp with your desired itinerary, stops, and dates. Our team will verify fleet availability and provide you with an owner-confirmed booking price.",
    },
    {
      q: "Does Coffee Cabs own its fleet?",
      a: "Yes, 100% of our fleet is fully owned, commercial-permit registered, insured, and maintained in-house to guarantee top cleanliness, mechanical safety, and dual-AC performance.",
    },
    {
      q: "Are airport transfers and local Bangalore sightseeing available?",
      a: "Absolutely. We offer local Bangalore packages (8 hours / 80 km) as well as pickup and drop services to Kempegowda International Airport (BLR) with 24/7 driver availability.",
    },
  ];

  // GSAP Animations
  useGSAP(
    () => {
      if (!homeRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-hero-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".gsap-hero-headline",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".gsap-hero-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".gsap-hero-cta",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .from(
          ".gsap-hero-cards",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".gsap-hero-stats",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        );

      // Section Fade Reveals on Scroll
      gsap.utils.toArray<HTMLElement>(".gsap-section-reveal").forEach((section) => {
        gsap.from(section, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    },
    { scope: homeRef }
  );

  return (
    <div ref={homeRef} className="bg-[#FFFDF7] text-[#4B3832]">
      <SEO
        title="Coffee Cabs — Executive Chauffeur & Outstation Travel Platform"
        description="Bengaluru's premier luxury cab service. Rent Toyota Innova Crysta, Force Urbania & Tempo Traveller for outstation Karnataka travel, airport transfers & tour packages."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/"
        schemaJson={getHomePageSchema(faqs)}
      />
      {/* ── 1. TWO-COMPARTMENT HERO SECTION ── */}
      <section className="relative bg-[#FFFDF7] text-[#4B3832] pt-24 sm:pt-28 pb-10 overflow-hidden border-b border-[#DCC7AA]">
        {/* Full-width Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}images/hero.jpg`} type="image/jpeg" />
            <img
              src={`${import.meta.env.BASE_URL}images/hero.jpg`}
              alt="Coffee Cabs Luxury Fleet"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-[center_30%] opacity-25 transition-opacity duration-700"
            />
          </picture>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,253,247,0.92) 0%, rgba(255,253,247,0.75) 50%, rgba(255,253,247,0.98) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Two-Column Grid on Desktop (45% Left / 55% Right), Stacked on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8">
            {/* LEFT PANEL: BRAND MESSAGE (~45% on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-4">
              {/* Eyebrow */}
              <div className="gsap-hero-eyebrow inline-flex items-center gap-2">
                <span className="h-[2px] w-8 bg-[#6F4E37] shrink-0" />
                <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#6F4E37]">
                  PREMIUM TRAVEL • BENGALURU & BEYOND
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="gsap-hero-headline text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#4B3832]">
                RIDE TO RELAX.<br />
                <span className="text-[#4B3832]">WE DO THE REST.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="gsap-hero-desc text-xs sm:text-sm text-[#6F4E37] font-medium leading-relaxed max-w-lg">
                Bengaluru&apos;s premier car and traveller service for airport transfers, corporate travel, outstation journeys and group transportation.
              </p>

              {/* Hero CTAs */}
              <div className="gsap-hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/booking"
                  className="px-6 py-3.5 bg-[#6F4E37] text-[#FFFDF7] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#4B3832] transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2 group min-h-[46px]"
                >
                  BOOK YOUR RIDE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
                <Link
                  to="/fleet"
                  className="px-6 py-3.5 bg-transparent border border-[#6F4E37] text-[#6F4E37] hover:bg-[#F5E6CA] hover:text-[#4B3832] text-xs uppercase tracking-wider font-bold rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 group min-h-[46px]"
                >
                  EXPLORE OUR FLEET <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            </div>

            {/* RIGHT PANEL: PLAN YOUR JOURNEY EXPERIENCE (~55% on desktop) */}
            <div className="lg:col-span-7 w-full">
              <PlanYourJourney className="w-full relative z-20 text-left shadow-lg border border-[#DCC7AA]" />
            </div>
          </div>

        {/* Foreground Compact Fleet Cards Section */}
        <div className="relative z-10 max-w-[1020px] mx-auto px-4 sm:px-6 w-full mt-auto">
          <div className="gsap-hero-cards flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4 lg:gap-5 mb-5 w-full max-w-full">
            {/* CARD 1: LEFT - Toyota Innova Crysta */}
            <div className="w-full sm:w-[275px] lg:w-[295px] max-w-full bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl p-3.5 sm:p-4 shadow-sm hover:border-[#6F4E37] sm:translate-y-3 transition-all duration-300 group flex flex-col justify-between shrink-0">
              <div>
                <div className="w-full h-[140px] sm:h-[150px] rounded-xl overflow-hidden bg-[#F5E6CA] mb-2.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/innova-crysta.png`}
                    alt="Toyota Innova Crysta"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#6F4E37] tracking-wider mb-0.5">
                  PREMIUM SUV • 6+1 SEATER
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#4B3832] mb-2 group-hover:text-[#6F4E37] transition-colors">
                  Toyota Innova Crysta
                </h3>
              </div>
              <div className="pt-2.5 border-t border-[#DCC7AA] flex items-center justify-between">
                <div className="text-sm font-extrabold text-[#4B3832]">
                  ₹19 <span className="text-[11px] text-[#6F4E37] font-normal">/ km</span>
                </div>
                <Link
                  to="/booking"
                  className="text-xs font-bold text-[#6F4E37] hover:text-[#4B3832] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Book <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* CARD 2: CENTER FEATURED - Force Urbania Luxury */}
            <div className="w-full sm:w-[295px] lg:w-[320px] bg-[#FFFDF7] border-2 border-[#6F4E37] rounded-2xl p-3.5 sm:p-4 shadow-md hover:border-[#4B3832] transition-all duration-300 group flex flex-col justify-between relative shrink-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6F4E37] text-[#FFFDF7] text-[9px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                FLEXIBLE GROUP FAVORITE
              </div>
              <div>
                <div className="w-full h-[145px] sm:h-[155px] rounded-xl overflow-hidden bg-[#F5E6CA] mb-2.5 mt-0.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/force-urbania.png`}
                    alt="Force Urbania Luxury"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#6F4E37] tracking-wider mb-0.5">
                  LUXURY RECLINER • 16 SEATER
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#4B3832] mb-2 group-hover:text-[#6F4E37] transition-colors">
                  Force Urbania Luxury
                </h3>
              </div>
              <div className="pt-2.5 border-t border-[#DCC7AA] flex items-center justify-between">
                <div className="text-sm font-extrabold text-[#4B3832]">
                  ₹50 <span className="text-[11px] text-[#6F4E37] font-normal">/ km</span>
                </div>
                <Link
                  to="/booking"
                  className="text-xs font-bold text-[#6F4E37] hover:text-[#4B3832] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Book <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* CARD 3: RIGHT - Force Tempo Traveller */}
            <div className="w-full sm:w-[275px] lg:w-[295px] bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl p-3.5 sm:p-4 shadow-sm hover:border-[#6F4E37] sm:translate-y-3 transition-all duration-300 group flex flex-col justify-between shrink-0">
              <div>
                <div className="w-full h-[140px] sm:h-[150px] rounded-xl overflow-hidden bg-[#F5E6CA] mb-2.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/tempo-traveller.png`}
                    alt="Force Tempo Traveller"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#6F4E37] tracking-wider mb-0.5">
                  GROUP TRAVEL • 12/17 SEATER
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#4B3832] mb-2 group-hover:text-[#6F4E37] transition-colors">
                  Force Tempo Traveller
                </h3>
              </div>
              <div className="pt-2.5 border-t border-[#DCC7AA] flex items-center justify-between">
                <div className="text-sm font-extrabold text-[#4B3832]">
                  ₹35 <span className="text-[11px] text-[#6F4E37] font-normal">/ km</span>
                </div>
                <Link
                  to="/booking"
                  className="text-xs font-bold text-[#6F4E37] hover:text-[#4B3832] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Book <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Micro Details Statistics Bar */}
          <div className="gsap-hero-stats bg-[#FFFDF7] p-3 sm:p-3.5 rounded-xl border border-[#DCC7AA] shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-0 text-center">
              <div className="sm:border-r border-[#DCC7AA] px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#4B3832]">
                  8+ <span className="text-[#6F4E37]">YEARS</span>
                </div>
                <div className="text-[10px] text-[#6F4E37] font-medium">Experience</div>
              </div>
              <div className="sm:border-r border-[#DCC7AA] px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#4B3832]">
                  5000+
                </div>
                <div className="text-[10px] text-[#6F4E37] font-medium">Groups Served</div>
              </div>
              <div className="sm:border-r border-[#DCC7AA] px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#4B3832]">
                  &lt; 5 MIN
                </div>
                <div className="text-[10px] text-[#6F4E37] font-medium">Average Response</div>
              </div>
              <div className="px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#4B3832]">
                  24/7
                </div>
                <div className="text-[10px] text-[#6F4E37] font-medium">Travel Support</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── 2. INTRO / ABOUT BLURB & 3 FEATURE ICONS ── */}
      <section id="about" className="gsap-section-reveal py-16 sm:py-20 bg-[#FFFDF7] border-b border-[#DCC7AA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-[#6F4E37] font-extrabold mb-3">
            About Coffee Cabs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3832] mb-4">
            Bengaluru&apos;s Premier Executive Chauffeur & Luxury Transport
          </h2>
          <p className="text-sm text-[#6F4E37] leading-relaxed mb-12 font-medium">
            Coffee Cabs is Bengaluru’s trusted luxury transportation provider. We specialize in Toyota Innova Crysta rentals, Force Urbania Luxury, Tempo Travellers, and Luxury Buses for outstation trips, family holidays, pilgrimages, and corporate executive travel.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#FFFDF7] p-6 rounded-3xl border border-[#DCC7AA] shadow-sm hover:border-[#6F4E37]/40 transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F5E6CA] text-[#6F4E37] border border-[#DCC7AA] flex items-center justify-center mx-auto mb-4 font-bold">
                <Car size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#4B3832] mb-2">100% Owned Fleet</h3>
              <p className="text-xs text-[#6F4E37] font-medium">Fully owned commercial vehicles, sanitized & maintained to peak safety standards.</p>
            </div>

            <div className="bg-[#FFFDF7] p-6 rounded-3xl border border-[#DCC7AA] shadow-sm hover:border-[#6F4E37]/40 transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F5E6CA] text-[#6F4E37] border border-[#DCC7AA] flex items-center justify-center mx-auto mb-4 font-bold">
                <MessageSquare size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#4B3832] mb-2">24/7 WhatsApp Support</h3>
              <p className="text-xs text-[#6F4E37] font-medium">Instant quotes, rapid booking confirmation, and active trip assistance.</p>
            </div>

            <div className="bg-[#FFFDF7] p-6 rounded-3xl border border-[#DCC7AA] shadow-sm hover:border-[#6F4E37]/40 transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F5E6CA] text-[#6F4E37] border border-[#DCC7AA] flex items-center justify-center mx-auto mb-4 font-bold">
                <Award size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#4B3832] mb-2">Maharaja Recliner Seating</h3>
              <p className="text-xs text-[#6F4E37] font-medium">Ultra-wide plush recliners with individual AC vents & charging ports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FLEET SECTION ── */}
      <section id="fleet" className="gsap-section-reveal py-16 sm:py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-block text-xs uppercase tracking-widest text-[#6F4E37] font-bold mb-3 bg-[#F5E6CA] border border-[#DCC7AA] px-4 py-1.5 rounded-full">
                OUR FLEET
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#4B3832]">
                CHOOSE YOUR RIDE
              </h2>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6F4E37] text-[#FFFDF7] text-xs font-bold rounded-full hover:bg-[#4B3832] transition-all shrink-0 shadow-sm"
            >
              VIEW FULL FLEET <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VEHICLES.slice(0, 3).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FLEET COMPARISON TABLE ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <VehicleComparisonTable />
      </div>
      <FleetComparison />

      {/* ── 5. POPULAR ROUTES ── */}
      <PopularRoutesSection />
      <PopularRoutesMatrix />

      {/* ── 6. HOW IT WORKS ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#F5E6CA] border-b border-[#DCC7AA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-[#6F4E37] font-bold mb-3">
              Simple & Fast
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3832]">
              How It Works — 4 Easy Steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Choose Vehicle", desc: "Select from Innova Crysta, Force Urbania, Tempo Traveller, or Buses." },
              { step: "02", title: "WhatsApp Us", desc: "Share your travel dates, trip type, and destination details via WhatsApp or call." },
              { step: "03", title: "Get Instant Quote", desc: "Receive transparent per-km breakdown with driver allowance & 300km/day rule calculations." },
              { step: "04", title: "Confirm & Ride", desc: "Get driver details & vehicle confirmation. Enjoy a comfortable luxury journey!" },
            ].map((s) => (
              <div key={s.step} className="bg-[#FFFDF7] p-8 rounded-3xl border border-[#DCC7AA] relative shadow-sm hover:border-[#6F4E37]/40 transition-all">
                <div className="text-3xl font-extrabold text-[#4B3832] mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#4B3832] mb-2">{s.title}</h3>
                <p className="text-xs text-[#6F4E37] leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOOKING ENQUIRY ── */}
      <section id="booking-enquiry" className="gsap-section-reveal py-16 sm:py-24 bg-[#FFFDF7] border-y border-[#DCC7AA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm />
        </div>
      </section>

      {/* ── 8. DESTINATIONS EXPLORER ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#6F4E37] font-bold mb-3">
                Weekend Getaways & Outstation Packages
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3832]">
                Explore Destinations Across Karnataka
              </h2>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6F4E37] text-[#FFFDF7] text-xs font-bold rounded-full hover:bg-[#4B3832] transition-all shrink-0 shadow-sm"
            >
              Browse All Packages Catalog <ArrowRight size={14} />
            </Link>
          </div>

          {/* Search & Select Dropdown Filter */}
          <div className="bg-[#FFFDF7] p-4 rounded-3xl border border-[#DCC7AA] mb-10 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6F4E37]" />
                <input
                  type="text"
                  placeholder="Search destination name or district (e.g., Mysuru, Coorg, Hampi, Gokarna)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FFFDF7] text-[#4B3832] placeholder:text-[#6F4E37]/60 pl-12 pr-4 py-3.5 rounded-2xl border border-[#DCC7AA] text-sm focus:outline-none focus:border-[#6F4E37] transition-colors shadow-sm font-medium"
                />
              </div>

              {/* Category Select Dropdown */}
              <div className="relative w-full sm:w-64">
                <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6F4E37] pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#FFFDF7] text-[#4B3832] font-bold pl-11 pr-8 py-3.5 rounded-2xl border border-[#DCC7AA] text-sm focus:outline-none focus:border-[#6F4E37] transition-colors shadow-sm appearance-none cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#FFFDF7] text-[#4B3832]">
                      {cat === "All" ? "Filter by Category: All" : cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#6F4E37]">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredDestinations.map((d) => (
              <Link
                key={d.slug}
                to={`/travel/destinations/${d.slug}`}
                className="bg-[#FFFDF7] rounded-2xl overflow-hidden border border-[#DCC7AA] hover:border-[#6F4E37]/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#F5E6CA] overflow-hidden relative">
                    <img
                      src={d.heroImage || defaultFallbackImg}
                      alt={`${d.name} Coffee Cabs`}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = defaultFallbackImg;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#FFFDF7]/90 backdrop-blur-md text-[#6F4E37] border border-[#DCC7AA] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {d.approximateDistanceFromBengaluru}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-wider text-[#6F4E37] font-bold mb-1">
                      {d.region}
                    </div>
                    <h3 className="text-base font-bold text-[#4B3832] mb-1 group-hover:text-[#6F4E37] transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-[11px] text-[#6F4E37] flex items-center gap-1 font-medium">
                      <MapPin size={11} className="text-[#6F4E37]" /> {d.approximateDriveTime}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="pt-3 border-t border-[#DCC7AA] flex items-center justify-between text-xs font-bold text-[#4B3832] group-hover:translate-x-0.5 transition-transform">
                    <span>EXPLORE GUIDE</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Explore All Destinations CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/travel"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6F4E37] hover:bg-[#4B3832] text-[#FFFDF7] font-bold text-xs rounded-2xl shadow-sm transition-all"
            >
              <span>EXPLORE ALL 100 KARNATAKA DESTINATIONS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#FFFDF7] border-y border-[#DCC7AA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#6F4E37] font-bold mb-3">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B3832]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FFFDF7] rounded-2xl border border-[#DCC7AA] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#4B3832]"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp size={18} className="text-[#6F4E37] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#6F4E37] shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs text-[#6F4E37] leading-relaxed border-t border-[#DCC7AA] pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
