import { Phone, Mail, MapPin } from "lucide-react";
import BookingForm from "../components/BookingForm";

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent("Hi Coffee Cabs! I'd like to inquire about cab booking and availability.");

  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#132333] border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#C6A15B] mb-3 font-extrabold bg-[#08111C] border border-[#AEB7C2]/15 px-4 py-1.5 rounded-full inline-block shadow-sm">
            24/7 Support & Booking
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#F4F1E8] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Coffee Cabs
          </h1>
          <p className="text-[#AEB7C2] text-sm sm:text-base max-w-lg mx-auto">
            Book your outstation Innova Crysta or Luxury Tempo Traveller directly. Instant response on call or WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-[#08111C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 items-start">
            {/* Quick Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#F4F1E8] mb-4">Direct Contact Channels</h2>

              <a
                href="tel:+917676726209"
                className="flex items-center gap-4 p-5 bg-[#132333] rounded-2xl border border-[#AEB7C2]/15 hover:border-[#C6A15B]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#AEB7C2] font-semibold uppercase tracking-wider">Phone Hotline</div>
                  <div className="text-sm font-bold text-[#F4F1E8]">+91 76767 26209</div>
                </div>
              </a>

              <a
                href={`https://wa.me/917676726209?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#132333] rounded-2xl border border-[#AEB7C2]/15 hover:border-[#C6A15B]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-[#25D366] font-semibold uppercase tracking-wider">WhatsApp Instant Chat</div>
                  <div className="text-sm font-bold text-[#F4F1E8]">Message +91 76767 26209</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-[#132333] rounded-2xl border border-[#AEB7C2]/15">
                <div className="w-12 h-12 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#AEB7C2] font-semibold uppercase tracking-wider">Email Inquiry</div>
                  <div className="text-sm font-bold text-[#F4F1E8]">info@coffeecabs.in</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-[#132333] rounded-2xl border border-[#AEB7C2]/15">
                <div className="w-12 h-12 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#AEB7C2] font-semibold uppercase tracking-wider">Headquarters</div>
                  <div className="text-sm font-bold text-[#F4F1E8]">Bangalore, Karnataka</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <BookingForm
                title="Send Booking Enquiry"
                subtitle="Fill in your travel details to receive owner-approved fleet availability and price confirmation."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

