import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Fleet", to: "/fleet" },
  { label: "Packages", to: "/packages" },
  { label: "Book Enquiry", to: "/booking" },
  { label: "Pricing", to: "/pricing" },
  { label: "About Us", to: "/#about", isHash: true },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard Escape key handler to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("about");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-[#F4F1E8] border-b border-[#C6A15B]/20 ${
          scrolled
            ? "bg-[#08111C] shadow-2xl py-3"
            : "bg-[#08111C]/70 backdrop-blur-[12px] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between h-12">
          {/* LEFT: Coffee Cabs Logo (10-15% larger) */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 pl-1 focus-visible:outline-2 focus-visible:outline-[#C6A15B] focus-visible:outline-offset-2 rounded-lg"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Coffee Cabs Executive Chauffeur Logo"
              className="h-9 sm:h-10 md:h-10.5 w-auto object-contain filter invert transition-transform hover:scale-105 duration-200"
            />
          </Link>

          {/* CENTER: Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/" && !location.hash
                  : link.isHash
                  ? location.pathname === "/" && location.hash === "#about"
                  : location.pathname === link.to;

              const linkClasses = `text-[11px] xl:text-xs uppercase tracking-[0.08em] font-semibold transition-all duration-300 relative py-1.5 focus-visible:outline-2 focus-visible:outline-[#C6A15B] focus-visible:outline-offset-2 rounded ${
                isActive
                  ? "text-[#C6A15B] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-9 after:h-[2px] after:bg-[#C6A15B] after:rounded-full"
                  : "text-[#AEB7C2] hover:text-[#F4F1E8] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#C6A15B]/60 after:transition-all after:duration-300"
              }`;

              if (link.isHash) {
                return (
                  <a
                    key={link.label}
                    href={link.to}
                    onClick={handleAboutClick}
                    className={linkClasses}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.to} to={link.to} className={linkClasses}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Action Area */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Subtle Vertical Divider */}
            <div className="hidden lg:block h-5 w-[1px] bg-[#AEB7C2]/20 mr-1" />

            {/* Request Booking CTA */}
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-xs font-semibold bg-[#C6A15B] text-[#08111C] px-4.5 xl:px-5 py-2.5 rounded-full hover:bg-[#d4b06a] hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group focus-visible:outline-2 focus-visible:outline-white"
            >
              Request Booking <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917676726209"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform duration-250 shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-[#25D366]"
              aria-label="Contact Coffee Cabs on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Phone Link */}
            <a
              href="tel:+917676726209"
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#F4F1E8] hover:text-[#C6A15B] transition-colors focus-visible:outline-2 focus-visible:outline-[#C6A15B] rounded"
              aria-label="Call Coffee Cabs at +91 76767 26209"
            >
              <Phone size={13} className="text-[#C6A15B]" />
              +91 76767 26209
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={menuButtonRef}
            className="lg:hidden w-11 h-11 rounded-full bg-[#132333] border border-[#AEB7C2]/15 flex items-center justify-center text-[#F4F1E8] transition-colors hover:bg-[#1a2d42] focus-visible:outline-2 focus-visible:outline-[#C6A15B]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 z-[60] bg-[#08111C] text-[#F4F1E8] flex flex-col justify-between p-6 overflow-y-auto transition-all duration-300"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#AEB7C2]/15">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Coffee Cabs Executive Chauffeur" className="h-9 w-auto filter invert" />
              </Link>
              <button
                className="w-11 h-11 rounded-full bg-[#132333] border border-[#AEB7C2]/15 flex items-center justify-center text-[#F4F1E8] focus-visible:outline-2 focus-visible:outline-[#C6A15B]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="pt-6 space-y-3">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.to === "/"
                    ? location.pathname === "/" && !location.hash
                    : link.isHash
                    ? location.pathname === "/" && location.hash === "#about"
                    : location.pathname === link.to;

                if (link.isHash) {
                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      onClick={handleAboutClick}
                      className={`block text-xl font-semibold py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#C6A15B] rounded ${
                        isActive ? "text-[#C6A15B]" : "text-[#AEB7C2] hover:text-[#F4F1E8]"
                      }`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block text-xl font-semibold py-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-[#C6A15B] rounded ${
                      isActive ? "text-[#C6A15B]" : "text-[#AEB7C2] hover:text-[#F4F1E8]"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#AEB7C2]/15 mt-6 mb-8">
            <Link
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#C6A15B] text-[#08111C] text-sm font-semibold rounded-full hover:bg-[#d4b06a] transition-all shadow-md group min-h-[48px]"
            >
              Request Booking <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+917676726209"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#132333] text-[#F4F1E8] border border-[#AEB7C2]/20 text-sm font-semibold rounded-full min-h-[48px]"
              aria-label="Call Coffee Cabs at +91 76767 26209"
            >
              <Phone size={16} className="text-[#C6A15B]" /> Call +91 76767 26209
            </a>
          </div>
        </div>
      )}
    </>
  );
}





