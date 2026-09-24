import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import BookingForm from "../components/BookingForm";
import SEO from "../components/SEO";
import { getBookingPageSchema } from "../utils/seoSchemas";

export default function BookingPage() {
  const whatsappMsg = encodeURIComponent("Hi Coffee Cabs! I'd like to inquire about cab booking and availability.");

  return (
    <div className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen pb-16 sm:pb-24">
      <SEO
        title="Plan Your Journey | Vehicle Booking & Enquiry | Coffee Cabs"
        description="Book your outstation cab, Toyota Innova Crysta, Force Urbania or Tempo Traveller with Coffee Cabs. Phone: +91 76767 26209."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/booking"
        schemaJson={getBookingPageSchema()}
      />

      {/* Hero / Form Header (Section 2) */}
      <section className="py-10 sm:py-14 bg-[#EDE5D8] border-b border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#23483A] mb-3.5 font-extrabold bg-[#FFFFFF] border border-[#DDD5C8] px-4 py-1.5 rounded-full shadow-xs">
            <ShieldCheck size={14} className="text-[#23483A]" />
            Owner-Approved Fleet & Transparent Tariff
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4A3025] mb-3 tracking-tight">
            Plan Your Journey
          </h1>

          <p className="text-[#6F6A63] text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-medium mb-6">
            Tell us where you're going, when you're travelling, and your preferred vehicle. We'll check availability and get back to you with the applicable owner-approved fare.
          </p>

          {/* Compact Trust Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white/80 border border-[#DDD5C8] px-5 py-2 rounded-2xl text-xs font-bold text-[#4A3025] shadow-xs">
            <span className="flex items-center gap-1.5 text-[#23483A]">
              <CheckCircle2 size={14} /> Owner-approved fleet
            </span>
            <span className="hidden sm:inline text-[#DDD5C8]">•</span>
            <span className="flex items-center gap-1.5 text-[#23483A]">
              <CheckCircle2 size={14} /> Transparent tariffs
            </span>
            <span className="hidden sm:inline text-[#DDD5C8]">•</span>
            <span className="flex items-center gap-1.5 text-[#23483A]">
              <CheckCircle2 size={14} /> Direct communication
            </span>
          </div>
        </div>
      </section>

      {/* Main Content: Two-Column Premium Travel Booking Experience (Section 1) */}
      <section className="py-8 sm:py-14 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN (~38-40% on Desktop / Stacked Contact Section on Mobile) */}
            <div className="lg:col-span-5 space-y-6 order-1">
              {/* Contact Card Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDD5C8] shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-[#4A3025] mb-1">
                    Need a quick response?
                  </h2>
                  <p className="text-xs text-[#6F6A63] font-medium leading-relaxed">
                    Prefer to speak directly? Reach us through any of these channels.
                  </p>
                </div>

                {/* 4 Contact Cards */}
                <div className="space-y-3">
                  {/* 1. CALL US */}
                  <div className="p-4 bg-[#F7F3EC] rounded-2xl border border-[#DDD5C8] flex items-center justify-between group hover:border-[#23483A]/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6A63] font-bold uppercase tracking-wider">CALL US</div>
                        <div className="text-xs font-extrabold text-[#252525]">+91 76767 26209</div>
                      </div>
                    </div>
                    <a
                      href="tel:+917676726209"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#23483A] bg-white border border-[#DDD5C8] px-3 py-1.5 rounded-lg hover:bg-[#23483A] hover:text-white transition-colors"
                    >
                      Call now <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* 2. WHATSAPP (Visual Emphasis) */}
                  <div className="p-4 bg-[#23483A]/5 rounded-2xl border-2 border-[#23483A]/30 flex items-center justify-between group hover:border-[#23483A] transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#23483A] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#23483A] font-extrabold uppercase tracking-wider">WHATSAPP</div>
                        <div className="text-xs font-bold text-[#252525]">Message us instantly</div>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/917676726209?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-white bg-[#23483A] px-3 py-1.5 rounded-lg hover:bg-[#4A3025] transition-colors shadow-xs"
                    >
                      Chat on WhatsApp <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* 3. EMAIL */}
                  <div className="p-4 bg-[#F7F3EC] rounded-2xl border border-[#DDD5C8] flex items-center justify-between group hover:border-[#23483A]/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6A63] font-bold uppercase tracking-wider">EMAIL</div>
                        <div className="text-xs font-extrabold text-[#252525]">Info@coffeecabs.in</div>
                      </div>
                    </div>
                    <a
                      href="mailto:Info@coffeecabs.in"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#23483A] bg-white border border-[#DDD5C8] px-3 py-1.5 rounded-lg hover:bg-[#23483A] hover:text-white transition-colors"
                    >
                      Send email <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* 4. LOCATION */}
                  <div className="p-4 bg-[#F7F3EC] rounded-2xl border border-[#DDD5C8] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6A63] font-bold uppercase tracking-wider">LOCATION</div>
                        <div className="text-xs font-extrabold text-[#252525]">Bengaluru, Karnataka</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Panel Below Contact Cards */}
                <div className="pt-4 border-t border-[#DDD5C8] space-y-3">
                  <h3 className="text-xs uppercase tracking-widest font-extrabold text-[#4A3025]">
                    Why contact Coffee Cabs?
                  </h3>
                  <ul className="space-y-2 text-xs text-[#252525] font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#EDE5D8] text-[#23483A] flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span>Owner-approved fleet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#EDE5D8] text-[#23483A] flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span>Transparent pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#EDE5D8] text-[#23483A] flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span>Direct communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#EDE5D8] text-[#23483A] flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      <span>No hidden fare calculator</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (~60-62% on Desktop / Form Stacked on Mobile) */}
            <div className="lg:col-span-7 order-2">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
