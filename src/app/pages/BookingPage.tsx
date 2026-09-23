import BookingForm from "../components/BookingForm";
import SEO from "../components/SEO";

export default function BookingPage() {
  return (
    <div className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title="Vehicle Booking & Outstation Taxi Enquiry | Coffee Cabs"
        description="Book your outstation cab, Toyota Innova Crysta, Force Urbania or Tempo Traveller with Coffee Cabs. Instant confirmation & transparent fares."
        canonicalUrl="https://gagangowdap.github.io/coffee-cabs/booking"
      />
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-[#EDE5D8] border-b border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#23483A] mb-3 font-extrabold bg-[#FFFFFF] border border-[#DDD5C8] px-4 py-1.5 rounded-full inline-block shadow-sm">
            24/7 Reservation Assistance
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#4A3025] mb-3">
            Vehicle Booking & Enquiry
          </h1>
          <p className="text-[#6F6A63] text-sm sm:text-base max-w-lg mx-auto">
            Select your preferred fleet vehicle and send your trip details. Our team will review and confirm vehicle availability and owner-approved pricing.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-20 bg-[#F7F3EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}

