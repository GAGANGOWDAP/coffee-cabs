import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-[#132333] border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-[#C6A15B] mb-3 font-extrabold bg-[#08111C] border border-[#AEB7C2]/15 px-4 py-1.5 rounded-full inline-block shadow-sm">
            24/7 Reservation Assistance
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#F4F1E8] mb-3">
            Vehicle Booking & Enquiry
          </h1>
          <p className="text-[#AEB7C2] text-sm sm:text-base max-w-lg mx-auto">
            Select your preferred fleet vehicle and send your trip details. Our team will review and confirm vehicle availability and owner-approved pricing.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-20 bg-[#08111C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm />
        </div>
      </section>
    </div>
  );
}

