import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Shield, FileText, Lock, ChevronRight, ArrowUpRight, Scale, Clock, MapPin } from "lucide-react";
import SEO from "../SEO";

export interface TocItem {
  id: string;
  label: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  jurisdiction?: string;
  tocItems: TocItem[];
  children: React.ReactNode;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  activeTab: "terms" | "privacy" | "user-agreement";
}

export default function LegalPageLayout({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  jurisdiction = "Bengaluru, Karnataka, India",
  tocItems,
  children,
  seoTitle,
  seoDescription,
  canonicalPath,
  activeTab,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(tocItems[0]?.id || "");
  const [tocMobileOpen, setTocMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of tocItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setTocMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalPath}
      />

      <div className="bg-[#FFFDF7] min-h-screen text-[#4B3832] pt-24 pb-16 sm:pb-24">
        {/* ── 1. HEADER SECTION ── */}
        <section className="bg-[#F5E6CA] border-b border-[#DCC7AA] py-8 sm:py-12 mb-8 sm:mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
              <ol className="flex items-center gap-2 text-xs sm:text-sm text-[#6F4E37] font-medium">
                <li>
                  <Link to="/" className="hover:text-[#4B3832] transition-colors focus-visible:outline-2 focus-visible:outline-[#6F4E37] rounded">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight size={14} className="text-[#DCC7AA]" />
                </li>
                <li className="text-[#4B3832] font-bold">Legal</li>
                <li>
                  <ChevronRight size={14} className="text-[#DCC7AA]" />
                </li>
                <li className="text-[#6F4E37] font-bold truncate max-w-[180px] sm:max-w-none" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>

            {/* Header Content */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#6F4E37]/10 text-[#6F4E37] text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                <Shield size={14} />
                <span>LEGAL & COMPLIANCE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B3832] tracking-tight leading-tight mb-3">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-[#6F4E37] font-normal leading-relaxed mb-6">
                {subtitle}
              </p>

              {/* Metadata Bar */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#6F4E37] pt-4 border-t border-[#DCC7AA]">
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-[#6F4E37]" />
                  <span>Effective Date: <strong>{effectiveDate}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-[#6F4E37]" />
                  <span>Last Updated: <strong>{lastUpdated}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-[#6F4E37]" />
                  <span>Jurisdiction: <strong>{jurisdiction}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. LEGAL POLICY NAVIGATION TABS ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          <nav aria-label="Legal Policy Selection" className="flex items-center gap-2 border-b border-[#DCC7AA] pb-3 overflow-x-auto">
            <Link
              to="/terms-and-conditions"
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#6F4E37] ${
                activeTab === "terms"
                  ? "bg-[#6F4E37] text-[#FFFDF7] shadow-sm"
                  : "bg-[#F5E6CA] text-[#4B3832] hover:bg-[#DCC7AA]"
              }`}
            >
              <FileText size={16} />
              <span>Terms & Conditions</span>
            </Link>

            <Link
              to="/privacy-policy"
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#6F4E37] ${
                activeTab === "privacy"
                  ? "bg-[#6F4E37] text-[#FFFDF7] shadow-sm"
                  : "bg-[#F5E6CA] text-[#4B3832] hover:bg-[#DCC7AA]"
              }`}
            >
              <Lock size={16} />
              <span>Privacy Policy</span>
            </Link>

            <Link
              to="/user-agreement"
              className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#6F4E37] ${
                activeTab === "user-agreement"
                  ? "bg-[#6F4E37] text-[#FFFDF7] shadow-sm"
                  : "bg-[#F5E6CA] text-[#4B3832] hover:bg-[#DCC7AA]"
              }`}
            >
              <Scale size={16} />
              <span>User Agreement</span>
            </Link>
          </nav>
        </div>

        {/* ── 3. MAIN CONTENT CONTAINER WITH STICKY TOC ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile TOC Accordion Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setTocMobileOpen(!tocMobileOpen)}
              className="w-full flex items-center justify-between p-4 bg-[#F5E6CA] border border-[#DCC7AA] rounded-2xl text-[#4B3832] font-bold text-sm"
              aria-expanded={tocMobileOpen}
            >
              <span className="flex items-center gap-2">
                <FileText size={18} className="text-[#6F4E37]" />
                <span>On this page ({tocItems.length} Sections)</span>
              </span>
              <ChevronRight size={18} className={`transition-transform duration-200 ${tocMobileOpen ? "rotate-90" : ""}`} />
            </button>

            {tocMobileOpen && (
              <div className="mt-2 p-4 bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl shadow-sm space-y-1 max-h-72 overflow-y-auto">
                {tocItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`block py-1.5 px-3 rounded-lg text-xs font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-[#6F4E37] text-[#FFFDF7] font-bold"
                        : "text-[#6F4E37] hover:text-[#4B3832] hover:bg-[#F5E6CA]"
                    }`}
                  >
                    {index + 1}. {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-28 bg-[#F5E6CA]/80 backdrop-blur-sm border border-[#DCC7AA] rounded-3xl p-5 shadow-sm">
              <h2 className="text-xs font-extrabold text-[#6F4E37] uppercase tracking-wider mb-4 pb-2 border-b border-[#DCC7AA]">
                On This Page
              </h2>
              <nav aria-label="Table of Contents">
                <ol className="space-y-1 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                  {tocItems.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`block py-1.5 px-2.5 rounded-xl transition-all duration-200 leading-snug ${
                          activeSection === item.id
                            ? "bg-[#6F4E37] text-[#FFFDF7] font-bold shadow-xs translate-x-1"
                            : "text-[#6F4E37] hover:text-[#4B3832] hover:bg-[#DCC7AA]/50"
                        }`}
                      >
                        <span className="opacity-70 mr-1.5">{index + 1}.</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* Main Reading Area */}
            <article className="lg:col-span-8 xl:col-span-9 bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto lg:mx-0">
              <div className="prose prose-stone max-w-none text-[#4B3832] space-y-8 leading-relaxed">
                {children}
              </div>

              {/* Related Policies Footer Cards */}
              <div className="mt-12 pt-8 border-t border-[#DCC7AA]">
                <h3 className="text-sm font-extrabold text-[#4B3832] uppercase tracking-wider mb-4">
                  Related Policies & Legal Terms
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {activeTab !== "terms" && (
                    <Link
                      to="/terms-and-conditions"
                      className="p-4 bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl hover:border-[#6F4E37] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#6F4E37]">Terms & Conditions</span>
                        <ArrowUpRight size={14} className="text-[#6F4E37] group-hover:text-[#4B3832] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-[11px] text-[#6F4E37]">Service terms & passenger guidelines</p>
                    </Link>
                  )}

                  {activeTab !== "privacy" && (
                    <Link
                      to="/privacy-policy"
                      className="p-4 bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl hover:border-[#6F4E37] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#6F4E37]">Privacy Policy</span>
                        <ArrowUpRight size={14} className="text-[#6F4E37] group-hover:text-[#4B3832] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-[11px] text-[#6F4E37]">Data protection & privacy practices</p>
                    </Link>
                  )}

                  {activeTab !== "user-agreement" && (
                    <Link
                      to="/user-agreement"
                      className="p-4 bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl hover:border-[#6F4E37] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-[#6F4E37]">User Agreement</span>
                        <ArrowUpRight size={14} className="text-[#6F4E37] group-hover:text-[#4B3832] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-[11px] text-[#6F4E37]">Website use & user responsibilities</p>
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="p-4 bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl hover:border-[#6F4E37] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#6F4E37]">Contact Us</span>
                      <ArrowUpRight size={14} className="text-[#6F4E37] group-hover:text-[#4B3832] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-[11px] text-[#6F4E37]">Inquiries & grievance assistance</p>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
