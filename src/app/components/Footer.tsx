import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#23483A] border-t border-[#4A3025]/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Coffee Cabs" className="h-10 w-auto brightness-0 invert mix-blend-screen" />
            </Link>
            <p className="text-xs text-[#DDD5C8] leading-relaxed mb-4 font-medium">
              Premium luxury chauffeur services from Bengaluru. Toyota Innova Crysta & Force Tempo Traveller rentals for outstation travel across Karnataka and India.
            </p>
            <div className="space-y-2.5 text-xs text-[#DDD5C8]">
              <a href="tel:+917676726209" className="inline-flex items-center gap-2 hover:text-[#F7F3EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded">
                <Phone size={13} className="text-[#B86F52]" /> +91 76767 26209
              </a>
              <br />
              <a href="mailto:info@coffeecabs.in" className="inline-flex items-center gap-2 hover:text-[#F7F3EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F52] rounded">
                <Mail size={13} className="text-[#B86F52]" /> info@coffeecabs.in
              </a>
              <div className="flex items-center gap-2 pt-1">
                <MapPin size={13} className="shrink-0 text-[#B86F52]" /> Bengaluru, Karnataka, India
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7F3EC] mb-4">
              Our Vehicles
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DDD5C8]">
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  Innova Crysta Premium (7 Seater)
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  Force Urbania Luxury (12-17 Seater)
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors">
                  Tempo Traveller (12-26 Seater)
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Fleet Tariff & Rules
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7F3EC] mb-4">
              Popular Routes
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DDD5C8]">
              <li>
                <Link to="/routes/bengaluru-to-mysuru" className="hover:text-white transition-colors">
                  Bengaluru → Mysuru
                </Link>
              </li>
              <li>
                <Link to="/routes/bengaluru-to-coorg" className="hover:text-white transition-colors">
                  Bengaluru → Coorg
                </Link>
              </li>
              <li>
                <Link to="/routes/bengaluru-to-chikkamagaluru" className="hover:text-white transition-colors">
                  Bengaluru → Chikkamagaluru
                </Link>
              </li>
              <li>
                <Link to="/routes/bengaluru-to-hampi" className="hover:text-white transition-colors">
                  Bengaluru → Hampi
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-[#B86F52] font-bold hover:underline">
                  Booking & Enquiry →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7F3EC] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DDD5C8]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/travel" className="hover:text-white transition-colors">
                  Explore Karnataka
                </Link>
              </li>
              <li>
                <Link to="/travel/packages" className="hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#DDD5C8]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDD5C8]">
          <p>© {new Date().getFullYear()} Coffee Cabs. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917676726209"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#B86F52] text-white flex items-center justify-center hover:bg-[#4A3025] transition-all shadow-sm"
              aria-label="Contact Coffee Cabs on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
