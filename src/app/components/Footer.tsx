import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Compass, Clock } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      {/* ── SECTION A — LIGHT PREMIUM CTA (WARM IVORY / CREAM) ── */}
      <section className="bg-[#F7F3EC] pt-14 sm:pt-16 lg:pt-20 pb-0 text-center relative overflow-hidden">
        {/* Left Botanical Line Art (Muted Beige #C9B89E, Low Opacity) */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-6 opacity-45 pointer-events-none z-0 hidden sm:block"
        >
          <svg width="220" height="340" viewBox="0 0 220 340" fill="none" stroke="#C9B89E" strokeWidth="1.5">
            <path d="M20 320 Q60 200 120 140 Q180 80 190 20" strokeLinecap="round" />
            <path d="M120 140 Q150 110 180 120 Q160 150 120 140" fill="#C9B89E" fillOpacity="0.15" />
            <path d="M90 170 Q130 160 150 190 Q110 200 90 170" fill="#C9B89E" fillOpacity="0.15" />
            <path d="M60 210 Q100 210 110 250 Q80 250 60 210" fill="#C9B89E" fillOpacity="0.15" />
            <path d="M40 260 Q80 270 90 300 Q60 300 40 260" fill="#C9B89E" fillOpacity="0.15" />
            <path d="M160 90 Q190 70 210 90 Q190 110 160 90" fill="#C9B89E" fillOpacity="0.15" />
          </svg>
        </div>

        {/* Right Mountain & Landscape Silhouette Background */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-16 w-1/3 h-64 opacity-15 pointer-events-none z-0 hidden lg:block"
        >
          <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
            <path d="M0 200 L120 90 L220 150 L340 50 L400 110 L400 200 Z" fill="#23483A" fillOpacity="0.25" />
            <path d="M60 200 L180 110 L280 170 L400 80 L400 200 Z" fill="#4A3025" fillOpacity="0.15" />
          </svg>
        </div>

        {/* Right Decorative Branding Badge (Desktop Only) */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-8 lg:right-14 text-right pointer-events-none z-0 hidden xl:block opacity-75"
        >
          <p className="text-xs font-semibold tracking-wider text-[#23483A] uppercase font-serif italic">
            More Destinations
          </p>
          <p className="text-sm font-extrabold text-[#23483A] tracking-tight">
            Brighter Journeys
          </p>
          <div className="w-10 h-0.5 bg-[#B86F52] ml-auto mt-1 rounded-full" />
        </div>

        {/* Main CTA Content Container */}
        <div className="max-w-3xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Eyebrow with Lines */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 sm:w-12 bg-[#B86F52]/40" />
            <span className="text-xs sm:text-sm font-extrabold text-[#B86F52] uppercase tracking-[0.2em]">
              KARNATAKA AWAITS
            </span>
            <span className="h-px w-8 sm:w-12 bg-[#B86F52]/40" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4A3025] tracking-tight leading-tight mb-3">
            Ready to Hit the Road?
          </h2>

          {/* Supporting Heading */}
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#23483A] mb-3">
            Your next Karnataka journey starts here.
          </p>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-[#6F6A63] font-medium leading-relaxed max-w-xl mx-auto mb-8">
            Book your luxury Innova Crysta, Force Urbania, or Tempo Traveller in under 60 seconds. Connect with us on WhatsApp or call us directly.
          </p>

          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto mb-12">
            {/* Primary Button */}
            <a
              href="https://wa.me/917676726209?text=Hi%20Coffee%20Cabs!%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#B86F52] text-white text-sm font-extrabold rounded-full hover:bg-[#4A3025] transition-all duration-200 shadow-md min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#B86F52]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Book via WhatsApp</span>
            </a>

            {/* Secondary Button */}
            <Link
              to="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-[#23483A] text-[#23483A] text-sm font-extrabold rounded-full hover:bg-[#23483A] hover:text-white transition-all duration-200 min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#23483A]"
            >
              Request Booking
            </Link>
          </div>

          {/* 3 Trust Feature Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 pb-6 border-t border-[#4A3025]/10 max-w-2xl mx-auto text-left sm:text-center">
            <div className="flex items-center sm:flex-col sm:justify-center gap-3 text-left sm:text-center">
              <div className="w-10 h-10 rounded-full bg-[#B86F52]/10 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-[#B86F52]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#23483A]">Trusted & Reliable</h4>
                <p className="text-xs text-[#6F6A63]">Comfortable travel</p>
              </div>
            </div>

            <div className="flex items-center sm:flex-col sm:justify-center gap-3 text-left sm:text-center">
              <div className="w-10 h-10 rounded-full bg-[#B86F52]/10 flex items-center justify-center shrink-0">
                <Compass size={20} className="text-[#B86F52]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#23483A]">Across Karnataka</h4>
                <p className="text-xs text-[#6F6A63]">100+ destinations</p>
              </div>
            </div>

            <div className="flex items-center sm:flex-col sm:justify-center gap-3 text-left sm:text-center">
              <div className="w-10 h-10 rounded-full bg-[#B86F52]/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#B86F52]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#23483A]">Hassle-free Booking</h4>
                <p className="text-xs text-[#6F6A63]">Quick & Easy</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── CURVED SECTION TRANSITION (CREAM TO FOREST GREEN) ── */}
        <div className="w-full overflow-hidden leading-none z-10 relative pt-4">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            className="w-full h-12 sm:h-16 lg:h-24 text-[#23483A] block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,90 960,90 1440,0 L1440,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* ── SECTION B — ACTUAL FOOTER (DEEP FOREST GREEN) ── */}
      <footer className="bg-[#23483A] text-[#F7F3EC] relative overflow-hidden">
        {/* Left Footer Botanical Line Art */}
        <div
          aria-hidden="true"
          className="absolute left-0 bottom-0 opacity-20 pointer-events-none z-0 hidden lg:block"
        >
          <svg width="260" height="380" viewBox="0 0 260 380" fill="none" stroke="#D8D2C8" strokeWidth="1.2">
            <path d="M-20 380 Q50 240 140 160 Q210 90 230 10" strokeLinecap="round" />
            <path d="M140 160 Q180 120 220 135 Q190 170 140 160" fill="#D8D2C8" fillOpacity="0.1" />
            <path d="M100 200 Q150 190 180 220 Q130 235 100 200" fill="#D8D2C8" fillOpacity="0.1" />
            <path d="M60 250 Q110 250 130 290 Q90 290 60 250" fill="#D8D2C8" fillOpacity="0.1" />
          </svg>
        </div>

        {/* Right Footer Botanical Line Art */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 opacity-20 pointer-events-none z-0 hidden lg:block"
        >
          <svg width="260" height="380" viewBox="0 0 260 380" fill="none" stroke="#D8D2C8" strokeWidth="1.2">
            <path d="M280 380 Q210 240 120 160 Q50 90 30 10" strokeLinecap="round" />
            <path d="M120 160 Q80 120 40 135 Q70 170 120 160" fill="#D8D2C8" fillOpacity="0.1" />
            <path d="M160 200 Q110 190 80 220 Q130 235 160 200" fill="#D8D2C8" fillOpacity="0.1" />
            <path d="M200 250 Q150 250 130 290 Q170 290 200 250" fill="#D8D2C8" fillOpacity="0.1" />
          </svg>
        </div>

        {/* Multi-Layered Mountain Silhouette Background (Lower 30-40% of Footer) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 h-48 pointer-events-none z-0 overflow-hidden"
        >
          {/* Layer 1: Distant Mountains */}
          <svg viewBox="0 0 1440 180" fill="none" className="absolute bottom-0 w-full h-full opacity-25">
            <path d="M0 180 L180 70 L380 130 L620 40 L880 110 L1120 30 L1340 100 L1440 60 L1440 180 Z" fill="#6E917D" />
          </svg>
          {/* Layer 2: Middle Forest Ridges */}
          <svg viewBox="0 0 1440 140" fill="none" className="absolute bottom-0 w-full h-full opacity-35">
            <path d="M0 140 L120 50 L300 110 L520 35 L760 90 L980 25 L1220 80 L1440 30 L1440 140 Z" fill="#2D5C49" />
          </svg>
          {/* Layer 3: Dark Foreground Ridges */}
          <svg viewBox="0 0 1440 90" fill="none" className="absolute bottom-0 w-full h-full opacity-60">
            <path d="M0 90 L220 20 L480 70 L720 15 L1020 60 L1280 10 L1440 40 L1440 90 Z" fill="#0F372B" />
          </svg>
        </div>

        {/* Main Footer Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-12 sm:pb-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start mb-12">
            {/* COLUMN 1: BRAND */}
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="Coffee Cabs"
                  className="w-28 sm:w-32 lg:w-36 h-auto brightness-0 invert mix-blend-screen"
                />
              </Link>
              <p className="text-xs sm:text-sm text-[#D8D2C8] leading-relaxed font-medium max-w-xs">
                Premium chauffeur-driven travel across Karnataka.
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#D8D2C8] pt-1">
                <a
                  href="tel:+917676726209"
                  className="flex items-center gap-2.5 text-[#D8D2C8] hover:text-[#B86F52] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded"
                >
                  <Phone size={14} className="text-[#B86F52] shrink-0" />
                  <span>+91 76767 26209</span>
                </a>
                <a
                  href="mailto:info@coffeecabs.in"
                  className="flex items-center gap-2.5 text-[#D8D2C8] hover:text-[#B86F52] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded"
                >
                  <Mail size={14} className="text-[#B86F52] shrink-0" />
                  <span>info@coffeecabs.in</span>
                </a>
                <div className="flex items-center gap-2.5 text-[#D8D2C8]">
                  <MapPin size={14} className="text-[#B86F52] shrink-0" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: FLEET */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F7F3EC] mb-4">
                FLEET
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/fleet" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Innova Crysta Premium (7 Seater)
                  </Link>
                </li>
                <li>
                  <Link to="/fleet" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Force Urbania Luxury (12–17 Seater)
                  </Link>
                </li>
                <li>
                  <Link to="/fleet" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Tempo Traveller (12–26 Seater)
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Fleet Tariff & Rules
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: POPULAR ROUTES */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F7F3EC] mb-4">
                POPULAR ROUTES
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/routes/bengaluru-to-mysuru" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Bengaluru → Mysuru
                  </Link>
                </li>
                <li>
                  <Link to="/routes/bengaluru-to-coorg" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Bengaluru → Coorg
                  </Link>
                </li>
                <li>
                  <Link to="/routes/bengaluru-to-chikkamagaluru" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Bengaluru → Chikkamagaluru
                  </Link>
                </li>
                <li>
                  <Link to="/routes/bengaluru-to-hampi" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Bengaluru → Hampi
                  </Link>
                </li>
                <li className="pt-1">
                  <Link to="/routes" className="text-[#B86F52] font-semibold hover:text-[#F7F3EC] transition-colors inline-flex items-center gap-1">
                    View All Routes <ArrowRight size={13} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: EXPLORE */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F7F3EC] mb-4">
                EXPLORE
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/travel" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Explore Karnataka
                  </Link>
                </li>
                <li>
                  <Link to="/travel/packages" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#D8D2C8] hover:text-[#B86F52] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* ── SUBTLE DIVIDER ── */}
          <div className="border-t border-[rgba(247,243,236,0.18)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D2C8]">
            {/* Left Copyright */}
            <p>© 2026 Coffee Cabs. All rights reserved.</p>

            {/* Middle Tagline */}
            <p className="hidden md:block font-serif italic text-[rgba(247,243,236,0.6)]">
              Drive to a Better Tomorrow | Explore Karnataka with Coffee Cabs
            </p>

          </div>
        </div>
      </footer>
    </>
  );
}

