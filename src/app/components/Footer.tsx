import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#23483A] text-[#F7F3EC]">
      {/* ── 1. FINAL CTA SECTION ── */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-8 text-center bg-[#23483A]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-[#F7F3EC] tracking-tight leading-tight">
            Ready to Hit the Road?
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#F7F3EC]">
            Your next Karnataka journey starts here.
          </p>
          <p className="text-sm sm:text-base text-[#D8D2C8] max-w-md mx-auto font-medium leading-relaxed">
            Book a premium chauffeur-driven cab for your next trip.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 max-w-md sm:max-w-none mx-auto">
            {/* Primary Button */}
            <a
              href="https://wa.me/917676726209?text=Hi%20Coffee%20Cabs!%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#B86F52] text-white text-sm font-extrabold rounded-full hover:bg-white hover:text-[#23483A] transition-all duration-200 shadow-md min-h-[48px] focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Book via WhatsApp</span>
            </a>

            {/* Secondary Button */}
            <Link
              to="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F7F3EC] text-[#4A3025] text-sm font-extrabold rounded-full hover:bg-[#EDE5D8] transition-all duration-200 shadow-md min-h-[48px] focus-visible:outline-2 focus-visible:outline-white"
            >
              Request Booking
            </Link>
          </div>
        </div>
      </section>

      {/* Subtle Divider / Transition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="border-t border-[rgba(247,243,236,0.15)]" />
      </div>

      {/* ── 2. FOOTER CONTENT (4 COLUMNS) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* COLUMN 1: BRAND */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Coffee Cabs"
                className="w-28 sm:w-32 md:w-36 lg:w-36 h-auto brightness-0 invert mix-blend-screen"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#D8D2C8] leading-relaxed font-medium max-w-xs">
              Premium chauffeur-driven travel across Karnataka.
            </p>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#D8D2C8] pt-1">
              <a
                href="tel:+917676726209"
                className="flex items-center gap-2.5 hover:text-[#B86F52] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded"
              >
                <Phone size={14} className="text-[#B86F52] shrink-0" />
                <span>+91 76767 26209</span>
              </a>
              <a
                href="mailto:info@coffeecabs.in"
                className="flex items-center gap-2.5 hover:text-[#B86F52] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded"
              >
                <Mail size={14} className="text-[#B86F52] shrink-0" />
                <span>info@coffeecabs.in</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-[#B86F52] shrink-0" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: FLEET */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F7F3EC] mb-4">
              FLEET
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F3EC]">
              <li>
                <Link to="/fleet" className="hover:text-[#B86F52] transition-colors">
                  Innova Crysta
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-[#B86F52] transition-colors">
                  Force Urbania
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-[#B86F52] transition-colors">
                  Tempo Traveller
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#B86F52] transition-colors">
                  Fleet & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: POPULAR ROUTES */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F7F3EC] mb-4">
              POPULAR ROUTES
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F3EC]">
              <li>
                <Link to="/routes/bengaluru-to-mysuru" className="hover:text-[#B86F52] transition-colors">
                  Bengaluru → Mysuru
                </Link>
              </li>
              <li>
                <Link to="/routes/bengaluru-to-coorg" className="hover:text-[#B86F52] transition-colors">
                  Bengaluru → Coorg
                </Link>
              </li>
              <li>
                <Link to="/routes/bengaluru-to-chikkamagaluru" className="hover:text-[#B86F52] transition-colors">
                  Bengaluru → Chikkamagaluru
                </Link>
              </li>
              <li>
                <Link to="/routes/bengaluru-to-hampi" className="hover:text-[#B86F52] transition-colors">
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
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F3EC]">
              <li>
                <Link to="/" className="hover:text-[#B86F52] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/travel" className="hover:text-[#B86F52] transition-colors">
                  Explore Karnataka
                </Link>
              </li>
              <li>
                <Link to="/travel/packages" className="hover:text-[#B86F52] transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B86F52] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── 3. COPYRIGHT ROW ── */}
        <div className="border-t border-[rgba(247,243,236,0.15)] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D2C8]">
          <p>© 2026 Coffee Cabs. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917676726209"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#B86F52] text-white flex items-center justify-center hover:bg-white hover:text-[#23483A] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52]"
              aria-label="Contact Coffee Cabs on WhatsApp"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
