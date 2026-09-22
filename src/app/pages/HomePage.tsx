import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../utils/gsapSetup";
import {
  ArrowRight,
  Search,
  Star,
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

export default function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "Hill Station",
    "Heritage & Forts",
    "Beach Escapes",
    "Wildlife & Nature",
    "Pilgrimage",
    "Lakes & Waterfalls",
  ];
  const defaultFallbackImg =
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop";

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).slice(0, 12);

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
    <div ref={homeRef} className="bg-[#08111C] text-[#F4F1E8]">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative min-h-[820px] md:h-[860px] lg:h-[900px] xl:h-[920px] flex flex-col justify-between bg-[#08111C] text-[#F4F1E8] pt-24 sm:pt-28 pb-8 overflow-hidden">
        {/* Full-width Cinematic Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}images/hero.png`}
            alt="Coffee Cabs Luxury Fleet & Skyline"
            className="w-full h-full object-cover object-[center_30%] opacity-90 transition-opacity duration-700"
          />
          {/* Approved Controlled Navy Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,17,28,0.50) 0%, rgba(8,17,28,0.15) 35%, rgba(8,17,28,0.85) 100%)",
            }}
          />
        </div>

        {/* Upper Hero Content */}
        <div className="relative z-10 max-w-[850px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          {/* Decorative Eyebrow */}
          <div className="gsap-hero-eyebrow inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 sm:w-12 bg-[#C6A15B]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-[#C6A15B]">
              PREMIUM TRAVEL • BANGALORE & BEYOND
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#C6A15B]" />
          </div>

          {/* Main Headline - Strictly 2 lines */}
          <h1 className="gsap-hero-headline text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight leading-[1.1] text-[#F4F1E8] mb-3 sm:mb-4 max-w-4xl">
            RIDE TO RELAX.<br />
            <span className="text-[#C6A15B]">WE DO THE REST.</span>
          </h1>

          {/* Hero Description */}
          <p className="gsap-hero-desc text-xs sm:text-sm text-[#AEB7C2] max-w-[620px] mx-auto mb-6 font-medium leading-relaxed">
            Bangalore's premium car and traveller service for airport transfers, corporate travel, outstation journeys and group transportation.
          </p>

          {/* Hero CTAs */}
          <div className="gsap-hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto mb-6 lg:mb-8">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-7 py-3 bg-[#C6A15B] text-[#08111C] text-xs uppercase tracking-wider font-extrabold rounded-full hover:bg-[#d4b06a] hover:scale-[1.02] transition-all duration-300 text-center shadow-xl flex items-center justify-center gap-2 group min-h-[44px]"
            >
              BOOK YOUR RIDE <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/fleet"
              className="w-full sm:w-auto px-7 py-3 bg-transparent border border-[#F4F1E8] text-[#F4F1E8] text-xs uppercase tracking-wider font-extrabold rounded-full hover:bg-[#F4F1E8] hover:text-[#08111C] hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center gap-2 group min-h-[44px]"
            >
              EXPLORE OUR FLEET <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Foreground Compact Fleet Cards Section (Positioned Low to Reveal Background Urbania) */}
        <div className="relative z-10 max-w-[1020px] mx-auto px-4 sm:px-6 w-full mt-auto">
          <div className="gsap-hero-cards flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4 lg:gap-5 mb-5">
            {/* CARD 1: LEFT - Toyota Innova Crysta */}
            <div className="w-full sm:w-[275px] lg:w-[295px] bg-[#132333]/95 backdrop-blur-sm border border-[#AEB7C2]/20 rounded-2xl p-3.5 sm:p-4 shadow-xl hover:border-[#C6A15B] sm:translate-y-3 transition-all duration-300 group flex flex-col justify-between shrink-0">
              <div>
                <div className="h-[110px] sm:h-[115px] rounded-xl overflow-hidden bg-[#08111C] mb-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=500&fit=crop"
                    alt="Toyota Innova Crysta"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider mb-0.5">
                  PREMIUM SUV • 6+1 SEATER
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#F4F1E8] mb-2 group-hover:text-[#C6A15B] transition-colors">
                  Toyota Innova Crysta
                </h3>
              </div>
              <div className="pt-2.5 border-t border-[#AEB7C2]/15 flex items-center justify-between">
                <div className="text-sm font-extrabold text-[#F4F1E8]">
                  ₹19 <span className="text-[11px] text-[#AEB7C2] font-normal">/ km</span>
                </div>
                <Link
                  to="/booking"
                  className="text-xs font-bold text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B] rounded"
                >
                  Book <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* CARD 2: CENTER FEATURED - Force Urbania Luxury */}
            <div className="w-full sm:w-[295px] lg:w-[320px] bg-[#132333]/95 backdrop-blur-sm border-2 border-[#C6A15B] rounded-2xl p-3.5 sm:p-4 shadow-2xl hover:border-[#C6A15B] transition-all duration-300 group flex flex-col justify-between relative shrink-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C6A15B] text-[#08111C] text-[9px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                FLEXIBLE GROUP FAVORITE
              </div>
              <div>
                <div className="h-[115px] sm:h-[120px] rounded-xl overflow-hidden bg-[#08111C] mb-2.5 mt-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop"
                    alt="Force Urbania Luxury"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider mb-0.5">
                  LUXURY RECLINER • 16 SEATER
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#F4F1E8] mb-2 group-hover:text-[#C6A15B] transition-colors">
                  Force Urbania Luxury
                </h3>
              </div>
              <div className="pt-2.5 border-t border-[#AEB7C2]/15 flex items-center justify-between">
                <div className="text-sm font-extrabold text-[#F4F1E8]">
                  ₹50 <span className="text-[11px] text-[#AEB7C2] font-normal">/ km</span>
                </div>
                <Link
                  to="/booking"
                  className="text-xs font-bold text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B] rounded"
                >
                  Book <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* CARD 3: RIGHT - Force Tempo Traveller */}
            <div className="w-full sm:w-[275px] lg:w-[295px] bg-[#132333]/95 backdrop-blur-sm border border-[#AEB7C2]/20 rounded-2xl p-3.5 sm:p-4 shadow-xl hover:border-[#C6A15B] sm:translate-y-3 transition-all duration-300 group flex flex-col justify-between shrink-0">
              <div>
                <div className="h-[110px] sm:h-[115px] rounded-xl overflow-hidden bg-[#08111C] mb-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=500&fit=crop"
                    alt="Force Tempo Traveller"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-wider mb-0.5">
                  GROUP TRAVEL • 12/17 SEATER
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#F4F1E8] mb-2 group-hover:text-[#C6A15B] transition-colors">
                  Force Tempo Traveller
                </h3>
              </div>
              <div className="pt-2.5 border-t border-[#AEB7C2]/15 flex items-center justify-between">
                <div className="text-sm font-extrabold text-[#F4F1E8]">
                  ₹35 <span className="text-[11px] text-[#AEB7C2] font-normal">/ km</span>
                </div>
                <Link
                  to="/booking"
                  className="text-xs font-bold text-[#C6A15B] flex items-center gap-1 group-hover:translate-x-1 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B] rounded"
                >
                  Book <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Micro Details Statistics Bar */}
          <div className="gsap-hero-stats bg-[#08111C]/85 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-[#AEB7C2]/15 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-0 text-center">
              <div className="sm:border-r border-[#AEB7C2]/15 px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#F4F1E8]">
                  8+ <span className="text-[#C6A15B]">YEARS</span>
                </div>
                <div className="text-[10px] text-[#AEB7C2] font-medium">Experience</div>
              </div>
              <div className="sm:border-r border-[#AEB7C2]/15 px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#F4F1E8]">
                  5000+
                </div>
                <div className="text-[10px] text-[#AEB7C2] font-medium">Groups Served</div>
              </div>
              <div className="sm:border-r border-[#AEB7C2]/15 px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#F4F1E8]">
                  &lt; 5 MIN
                </div>
                <div className="text-[10px] text-[#AEB7C2] font-medium">Average Response</div>
              </div>
              <div className="px-2">
                <div className="text-sm sm:text-base font-extrabold text-[#F4F1E8]">
                  24/7
                </div>
                <div className="text-[10px] text-[#AEB7C2] font-medium">Travel Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO / ABOUT BLURB & 3 FEATURE ICONS ── */}
      <section id="about" className="gsap-section-reveal py-16 sm:py-20 bg-[#08111C] border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3">
            About Coffee Cabs
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F1E8] mb-4">
            Bangalore's Premier Executive Chauffeur & Luxury Transport
          </h2>
          <p className="text-sm text-[#AEB7C2] leading-relaxed mb-12">
            Coffee Cabs is Bangalore’s trusted luxury transportation provider. We specialize in Toyota Innova Crysta rentals, Force Urbania Luxury, Tempo Travellers, and Luxury Buses for outstation trips, family holidays, pilgrimages, and corporate executive travel.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#132333] p-6 rounded-3xl border border-[#AEB7C2]/15 shadow-md hover:border-[#C6A15B]/50 transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#08111C] text-[#C6A15B] border border-[#C6A15B]/30 flex items-center justify-center mx-auto mb-4 font-bold">
                <Car size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#F4F1E8] mb-2">100% Owned Fleet</h3>
              <p className="text-xs text-[#AEB7C2]">Fully owned commercial vehicles, sanitized & maintained to peak safety standards.</p>
            </div>

            <div className="bg-[#132333] p-6 rounded-3xl border border-[#AEB7C2]/15 shadow-md hover:border-[#C6A15B]/50 transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#08111C] text-[#C6A15B] border border-[#C6A15B]/30 flex items-center justify-center mx-auto mb-4 font-bold">
                <MessageSquare size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#F4F1E8] mb-2">24/7 WhatsApp Support</h3>
              <p className="text-xs text-[#AEB7C2]">Instant quotes, rapid booking confirmation, and active trip assistance.</p>
            </div>

            <div className="bg-[#132333] p-6 rounded-3xl border border-[#AEB7C2]/15 shadow-md hover:border-[#C6A15B]/50 transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#08111C] text-[#C6A15B] border border-[#C6A15B]/30 flex items-center justify-center mx-auto mb-4 font-bold">
                <Award size={22} />
              </div>
              <h3 className="text-sm font-bold text-[#F4F1E8] mb-2">Maharaja Recliner Seating</h3>
              <p className="text-xs text-[#AEB7C2]">Ultra-wide plush recliners with individual AC vents & charging ports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FLEET SECTION ── */}
      <section id="fleet" className="gsap-section-reveal py-16 sm:py-24 bg-[#08111C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-block text-xs uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3 bg-[#132333] border border-[#AEB7C2]/15 px-4 py-1.5 rounded-full">
                Elite Collection
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#F4F1E8]">
                Our Featured Fleet Categories
              </h2>
            </div>
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A15B] text-[#08111C] text-xs font-bold rounded-full hover:bg-[#d4b06a] transition-all shrink-0 shadow-md"
            >
              View All Fleet Models <ArrowRight size={14} />
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
      <FleetComparison />

      {/* ── 5. POPULAR ROUTES FLEET TARIFF MATRIX ── */}
      <PopularRoutesMatrix />

      {/* ── 6. HOW IT WORKS ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#132333] border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3">
              Simple & Fast
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F1E8]">
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
              <div key={s.step} className="bg-[#08111C] p-8 rounded-3xl border border-[#AEB7C2]/15 relative shadow-md hover:border-[#C6A15B]/50 transition-all">
                <div className="text-3xl font-extrabold text-[#C6A15B] mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#F4F1E8] mb-2">{s.title}</h3>
                <p className="text-xs text-[#AEB7C2] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOOKING ENQUIRY ── */}
      <section id="booking-enquiry" className="gsap-section-reveal py-16 sm:py-24 bg-[#08111C] border-y border-[#AEB7C2]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm />
        </div>
      </section>

      {/* ── 8. DESTINATIONS EXPLORER ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#132333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3">
                Weekend Getaways & Outstation Packages
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F1E8]">
                Explore Destinations Across India
              </h2>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A15B] text-[#08111C] text-xs font-bold rounded-full hover:bg-[#d4b06a] transition-all shrink-0 shadow-md"
            >
              Browse All Packages Catalog <ArrowRight size={14} />
            </Link>
          </div>

          {/* Search & Select Dropdown Filter */}
          <div className="bg-[#08111C] p-4 rounded-3xl border border-[#AEB7C2]/15 mb-10">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AEB7C2]" />
                <input
                  type="text"
                  placeholder="Search destination name or state (e.g., Mysore, Coorg, Ooty, Goa, Tirupati)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#132333] text-[#F4F1E8] placeholder:text-[#AEB7C2] pl-12 pr-4 py-3.5 rounded-2xl border border-[#AEB7C2]/25 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors shadow-sm font-medium"
                />
              </div>

              {/* Category Select Dropdown */}
              <div className="relative w-full sm:w-64">
                <Filter size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#AEB7C2] pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#132333] text-[#F4F1E8] font-bold pl-11 pr-8 py-3.5 rounded-2xl border border-[#AEB7C2]/25 text-sm focus:outline-none focus:border-[#C6A15B] transition-colors shadow-sm appearance-none cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#08111C] text-[#F4F1E8]">
                      {cat === "All" ? "Filter by Category: All" : cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#C6A15B]">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredDestinations.map((d) => (
              <Link
                key={d.slug}
                to={`/packages/${d.slug}`}
                className="bg-[#08111C] rounded-2xl overflow-hidden border border-[#AEB7C2]/15 hover:border-[#C6A15B]/50 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#08111C] overflow-hidden relative">
                    <img
                      src={d.image}
                      alt={`${d.name} Coffee Cabs Package`}
                      onError={(e) => {
                        e.currentTarget.src = defaultFallbackImg;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 right-3 bg-[#08111C]/90 backdrop-blur-md text-[#C6A15B] border border-[#C6A15B]/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {d.distance} km
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] uppercase tracking-wider text-[#AEB7C2] font-bold mb-1">
                      {d.state} · {d.category}
                    </div>
                    <h3 className="text-base font-bold text-[#F4F1E8] mb-1 group-hover:text-[#C6A15B] transition-colors">
                      {d.name}
                    </h3>
                    <p className="text-[11px] text-[#AEB7C2] flex items-center gap-1">
                      <MapPin size={11} className="text-[#C6A15B]" /> {d.time} travel time
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="pt-3 border-t border-[#AEB7C2]/15 flex items-center justify-between text-xs font-bold text-[#C6A15B] group-hover:translate-x-0.5 transition-transform">
                    <span>Request Enquiry</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION ── */}
      <section className="gsap-section-reveal py-16 sm:py-24 bg-[#08111C] border-y border-[#AEB7C2]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F1E8]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#132333] rounded-2xl border border-[#AEB7C2]/15 overflow-hidden shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#F4F1E8]"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp size={18} className="text-[#C6A15B] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#AEB7C2] shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs text-[#AEB7C2] leading-relaxed border-t border-[#AEB7C2]/15 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA BANNER ── */}
      <section className="gsap-section-reveal py-16 sm:py-20 bg-[#08111C] text-[#F4F1E8] border-t border-[#C6A15B]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1E8]">
            Ready to Hit the Road?
          </h2>
          <p className="text-xs sm:text-sm text-[#AEB7C2] max-w-md mx-auto">
            Book your luxury Innova Crysta, Force Urbania, or Tempo Traveller in under 60 seconds. Connect with us on WhatsApp or call us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/917676726209?text=Hi%20Coffee%20Cabs!%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-xs font-bold rounded-full hover:bg-[#1da851] hover:scale-105 transition-all shadow-xl w-full sm:w-auto"
            >
              <MessageSquare size={16} /> Book via WhatsApp
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C6A15B] text-[#08111C] text-xs font-bold rounded-full hover:bg-[#d4b06a] hover:scale-105 transition-all w-full sm:w-auto shadow-xl"
            >
              <Phone size={16} /> Request Booking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

