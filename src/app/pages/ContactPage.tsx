import { useState } from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight, Car, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";
import { getContactPageSchema } from "../utils/seoSchemas";

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent("Hi Coffee Cabs! I have a general inquiry.");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!email.trim() || !email.includes("@")) errs.email = "Please enter a valid email address.";
    if (!subject.trim()) errs.subject = "Please enter a subject.";
    if (!message.trim()) errs.message = "Please enter your message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen pb-16 sm:pb-24">
      <SEO
        title="Get in Touch | Contact Coffee Cabs"
        description="Have a question or need assistance? Reach out to Coffee Cabs. Call +91 76767 26209 or email info@coffeecabs.in."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/contact"
        schemaJson={getContactPageSchema()}
      />

      {/* ── HERO SECTION (Section 3) ── */}
      <section className="py-10 sm:py-14 bg-[#EDE5D8] border-b border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#23483A] mb-3 font-extrabold bg-[#FFFFFF] border border-[#DDD5C8] px-4 py-1.5 rounded-full shadow-xs">
            LET'S CONNECT
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#4A3025] mb-3 tracking-tight">
            Get in Touch
          </h1>

          <p className="text-[#6F6A63] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Have a question, need help with your journey, or want to discuss your travel requirements? Reach out to Coffee Cabs and our team will get back to you.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFORMATION & GENERAL CONTACT FORM (Section 4 & 5) ── */}
      <section className="py-10 sm:py-16 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SIDE: TALK TO COFFEE CABS */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDD5C8] shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-[#4A3025] mb-1">
                    Talk to Coffee Cabs
                  </h2>
                  <p className="text-xs text-[#6F6A63] font-medium leading-relaxed">
                    Reach out through any of our official communication channels.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* PHONE */}
                  <div className="p-4 bg-[#F7F3EC] rounded-2xl border border-[#DDD5C8] flex items-center justify-between group hover:border-[#23483A]/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6A63] font-bold uppercase tracking-wider">PHONE</div>
                        <div className="text-xs font-extrabold text-[#252525]">+91 76767 26209</div>
                      </div>
                    </div>
                    <a
                      href="tel:+917676726209"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#23483A] bg-white border border-[#DDD5C8] px-3 py-1.5 rounded-lg hover:bg-[#23483A] hover:text-white transition-colors"
                    >
                      Call Now <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* WHATSAPP */}
                  <div className="p-4 bg-[#23483A]/5 rounded-2xl border-2 border-[#23483A]/30 flex items-center justify-between group hover:border-[#23483A] transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#23483A] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#23483A] font-extrabold uppercase tracking-wider">WHATSAPP</div>
                        <div className="text-xs font-bold text-[#252525]">Message us on WhatsApp</div>
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

                  {/* EMAIL */}
                  <div className="p-4 bg-[#F7F3EC] rounded-2xl border border-[#DDD5C8] flex items-center justify-between group hover:border-[#23483A]/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6F6A63] font-bold uppercase tracking-wider">EMAIL</div>
                        <div className="text-xs font-extrabold text-[#252525]">info@coffeecabs.in</div>
                      </div>
                    </div>
                    <a
                      href="mailto:info@coffeecabs.in"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#23483A] bg-white border border-[#DDD5C8] px-3 py-1.5 rounded-lg hover:bg-[#23483A] hover:text-white transition-colors"
                    >
                      Send an Email <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* LOCATION */}
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
              </div>
            </div>

            {/* RIGHT SIDE: GENERAL CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDD5C8] shadow-xs">
                <div className="border-b border-[#DDD5C8] pb-4 mb-6">
                  <h2 className="text-xl font-extrabold text-[#4A3025] mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-[#6F6A63] font-medium">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-[#EDE5D8] text-[#23483A] rounded-full flex items-center justify-center mx-auto border border-[#DDD5C8]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#4A3025]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-[#6F6A63] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Coffee Cabs, <span className="font-bold text-[#252525]">{fullName}</span>. We'll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFullName("");
                        setEmail("");
                        setPhone("");
                        setSubject("");
                        setMessage("");
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#4A3025] text-white text-xs font-bold rounded-xl hover:bg-[#23483A] transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-[#252525] mb-1">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g., Ananya Sharma"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: "" }));
                          }}
                          className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[44px] ${
                            errors.fullName ? "border-red-500" : "border-[#DDD5C8]"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold">
                            <AlertCircle size={12} /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold text-[#252525] mb-1">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[44px] ${
                            errors.email ? "border-red-500" : "border-[#DDD5C8]"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-[#252525] mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="block text-xs font-bold text-[#252525] mb-1">
                          Subject *
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          required
                          placeholder="e.g., Tour Inquiry, Corporate Partnership"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                            if (errors.subject) setErrors((prev) => ({ ...prev, subject: "" }));
                          }}
                          className={`w-full bg-white border px-4 py-3 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors min-h-[44px] ${
                            errors.subject ? "border-red-500" : "border-[#DDD5C8]"
                          }`}
                        />
                        {errors.subject && (
                          <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold">
                            <AlertCircle size={12} /> {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-[#252525] mb-1">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        placeholder="Write your query or message here..."
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                        }}
                        className={`w-full bg-white border p-4 text-xs text-[#252525] placeholder:text-[#6F6A63]/60 rounded-xl focus:outline-none focus:border-[#23483A] focus:ring-1 focus:ring-[#23483A] transition-colors resize-none ${
                          errors.message ? "border-red-500" : "border-[#DDD5C8]"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 px-6 bg-[#4A3025] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-[#23483A] transition-all shadow-sm flex items-center justify-center gap-2 min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#23483A] disabled:opacity-75"
                      >
                        {submitting ? (
                          <span>SENDING MESSAGE...</span>
                        ) : (
                          <>
                            <Send size={15} /> Send Message
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-[#6F6A63] mt-2 font-medium">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT / NEED A CAB? SECTION (Section 7) ── */}
      <section className="py-8 bg-[#EDE5D8] border-y border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDD5C8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#23483A] bg-[#EDE5D8] px-3 py-1 rounded-full mb-2 border border-[#DDD5C8]">
                <Car size={13} /> Looking to reserve a trip?
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A3025]">
                Need a Cab?
              </h3>
              <p className="text-xs text-[#6F6A63] font-medium mt-1">
                For bookings and vehicle availability, head to our Book Cab page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#23483A] text-white text-xs font-bold rounded-xl hover:bg-[#4A3025] transition-all min-h-[48px] shadow-xs"
              >
                Book a Cab →
              </Link>
              <a
                href="tel:+917676726209"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F7F3EC] border border-[#DDD5C8] text-[#4A3025] text-xs font-bold rounded-xl hover:border-[#23483A] transition-all min-h-[48px]"
              >
                <Phone size={15} className="text-[#23483A]" /> Call Coffee Cabs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION / MAP SECTION (Section 8) ── */}
      <section className="py-12 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#4A3025] mb-2">
              Find Coffee Cabs
            </h2>
            <p className="text-xs text-[#6F6A63] font-medium max-w-md mx-auto">
              Based in Bengaluru, Karnataka. Providing round-the-clock outstation cab rentals & luxury group transport.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDD5C8] shadow-xs grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center mx-auto border border-[#DDD5C8] mb-3">
                <MapPin size={20} />
              </div>
              <h4 className="text-xs font-extrabold text-[#4A3025] uppercase tracking-wider">Headquarters</h4>
              <p className="text-xs text-[#6F6A63]">Bengaluru, Karnataka, India</p>
            </div>

            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center mx-auto border border-[#DDD5C8] mb-3">
                <Phone size={20} />
              </div>
              <h4 className="text-xs font-extrabold text-[#4A3025] uppercase tracking-wider">24/7 Hotline</h4>
              <p className="text-xs text-[#6F6A63]">+91 76767 26209</p>
            </div>

            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center mx-auto border border-[#DDD5C8] mb-3">
                <Mail size={20} />
              </div>
              <h4 className="text-xs font-extrabold text-[#4A3025] uppercase tracking-wider">Email Inquiry</h4>
              <p className="text-xs text-[#6F6A63]">info@coffeecabs.in</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://maps.google.com/?q=Bengaluru,+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#23483A] hover:text-[#4A3025] underline underline-offset-4"
            >
              Open in Google Maps <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
