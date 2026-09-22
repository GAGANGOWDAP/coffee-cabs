import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div className="pt-20 bg-white text-[#09090b] min-h-screen">
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-[#fafafa] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#52525b] mb-3 font-extrabold bg-white border border-black/10 px-4 py-1.5 rounded-full inline-block shadow-sm">
            24/7 Reservation Assistance
          </div>
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#09090b] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vehicle Booking & Enquiry
          </h1>
          <p className="text-[#71717a] text-sm sm:text-base max-w-lg mx-auto">
            Select your preferred fleet vehicle and send your trip details. Our team will review and confirm vehicle availability and owner-approved pricing.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
