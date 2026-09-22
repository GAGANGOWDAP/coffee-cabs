import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Luggage,
  Wind,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Tag,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { VEHICLES } from "../data/vehicles";
import BookingForm from "../components/BookingForm";

export default function VehicleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const vehicle = VEHICLES.find(
    (v) => v.slug === slug || v.id === slug
  );

  useEffect(() => {
    if (vehicle) {
      document.title = `${vehicle.name} | Premium Fleet | Coffee Cabs`;
    }
  }, [vehicle]);

  if (!vehicle) {
    return (
      <div className="pt-28 pb-20 bg-[#08111C] text-[#F4F1E8] min-h-screen text-center px-4">
        <div className="max-w-md mx-auto py-16 bg-[#132333] rounded-3xl border border-[#AEB7C2]/15 p-8">
          <HelpCircle size={48} className="mx-auto text-[#C6A15B] mb-4" />
          <h1 className="text-2xl font-bold mb-2">Vehicle Not Found</h1>
          <p className="text-xs text-[#AEB7C2] mb-6">
            The requested vehicle page could not be located in our fleet catalog.
          </p>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A15B] text-[#08111C] font-extrabold text-xs rounded-full"
          >
            <ArrowLeft size={14} /> Return to Fleet Directory
          </Link>
        </div>
      </div>
    );
  }

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="pt-20 bg-[#08111C] text-[#F4F1E8] min-h-screen">
      {/* ── A. BREADCRUMB HEADER ── */}
      <section className="bg-[#132333] py-4 border-b border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#AEB7C2]">
            <Link to="/" className="hover:text-[#C6A15B] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/fleet" className="hover:text-[#C6A15B] transition-colors">
              Fleet
            </Link>
            <span>/</span>
            <span className="text-[#F4F1E8] font-bold">{vehicle.name}</span>
          </div>

          <Link
            to="/fleet"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C6A15B] hover:underline"
          >
            <ArrowLeft size={13} /> BACK TO FLEET
          </Link>
        </div>
      </section>

      {/* ── B. MAIN VEHICLE HERO & GALLERY ── */}
      <section className="py-12 sm:py-16 bg-[#08111C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Image Gallery */}
            <div>
              <div className="relative aspect-[16/10] bg-[#132333] rounded-3xl overflow-hidden border border-[#AEB7C2]/20 shadow-2xl">
                <img
                  src={vehicle.images[currentImgIndex] || vehicle.image}
                  alt={`${vehicle.name} premium photo`}
                  className="w-full h-full object-cover"
                />

                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#08111C]/80 hover:bg-[#08111C] text-[#F4F1E8] flex items-center justify-center border border-[#AEB7C2]/20 shadow-lg"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#08111C]/80 hover:bg-[#08111C] text-[#F4F1E8] flex items-center justify-center border border-[#AEB7C2]/20 shadow-lg"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute top-4 left-4 bg-[#08111C]/90 text-[#F4F1E8] text-[11px] font-extrabold px-3.5 py-1.5 rounded-full border border-[#C6A15B]/30 uppercase tracking-widest">
                  {vehicle.company} · {vehicle.category}
                </div>
              </div>

              {/* Thumbnail strip */}
              {vehicle.images.length > 1 && (
                <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2">
                  {vehicle.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`relative w-24 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        idx === currentImgIndex
                          ? "border-[#C6A15B] scale-[1.03]"
                          : "border-[#AEB7C2]/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Vehicle Overview Header */}
            <div>
              <div className="inline-block text-[11px] uppercase tracking-widest text-[#C6A15B] font-extrabold mb-3 bg-[#132333] border border-[#C6A15B]/30 px-3.5 py-1 rounded-full">
                {vehicle.category}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F4F1E8] mb-3 leading-tight">
                {vehicle.name}
              </h1>

              <p className="text-sm text-[#AEB7C2] leading-relaxed mb-6">
                {vehicle.shortDescription || vehicle.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold tracking-wider">Seating</div>
                    <div className="text-xs font-extrabold text-[#F4F1E8]">{vehicle.seatingCapacity}</div>
                  </div>
                </div>

                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                    <Luggage size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold tracking-wider">Luggage</div>
                    <div className="text-xs font-extrabold text-[#F4F1E8]">{vehicle.luggageCapacity}</div>
                  </div>
                </div>

                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                    <Wind size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold tracking-wider">Air Conditioned</div>
                    <div className="text-xs font-extrabold text-[#F4F1E8]">{typeof vehicle.acAvailable === 'string' ? vehicle.acAvailable : 'Yes (Climate Control)'}</div>
                  </div>
                </div>

                <div className="bg-[#132333] p-4 rounded-2xl border border-[#AEB7C2]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#08111C] text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#AEB7C2] uppercase font-semibold tracking-wider">Per KM Rate</div>
                    <div className="text-xs font-extrabold text-[#C6A15B]">
                      {vehicle.pricePerKm ? `₹${vehicle.pricePerKm} / km` : "Available on request"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to={`/booking?vehicle=${vehicle.slug}`}
                  className="w-full sm:w-auto flex-1 py-4 bg-[#C6A15B] text-[#08111C] text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#d4b06a] transition-all shadow-xl text-center flex items-center justify-center gap-2 min-h-[48px]"
                >
                  REQUEST A QUOTE <ArrowRight size={15} />
                </Link>
                <a
                  href={`https://wa.me/917676726209?text=${encodeURIComponent(
                    `Hi Coffee Cabs! I want to inquire about booking the ${vehicle.name}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 bg-[#25D366] text-white text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#1da851] transition-all shadow-md text-center flex items-center justify-center gap-2 min-h-[48px]"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── C. DETAILED SPECIFICATIONS & PRICING PANEL ── */}
      <section className="py-12 sm:py-16 bg-[#132333] border-t border-[#AEB7C2]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left 2 Cols: Details & Use Cases */}
            <div className="lg:col-span-2 space-y-10">
              {/* About vehicle */}
              <div>
                <h2 className="text-xl font-bold text-[#F4F1E8] mb-3 pb-2 border-b border-[#AEB7C2]/15">
                  About This Vehicle
                </h2>
                <p className="text-xs sm:text-sm text-[#AEB7C2] leading-relaxed mb-6">
                  {vehicle.description}
                </p>

                <h3 className="text-sm font-bold text-[#F4F1E8] mb-3 uppercase tracking-wider text-[#C6A15B]">
                  Key Comfort & Convenience Features:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {vehicle.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-[#AEB7C2] bg-[#08111C]/60 p-3 rounded-xl border border-[#AEB7C2]/10">
                      <CheckCircle2 size={14} className="text-[#C6A15B] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <h2 className="text-xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15 flex items-center gap-2">
                  <Tag size={18} className="text-[#C6A15B]" /> Ideal Use Cases
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {vehicle.idealFor.map((useCase) => (
                    <span
                      key={useCase}
                      className="px-4 py-2 bg-[#08111C] border border-[#AEB7C2]/20 text-[#F4F1E8] text-xs font-semibold rounded-full shadow-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services Supported */}
              <div>
                <h2 className="text-xl font-bold text-[#F4F1E8] mb-4 pb-2 border-b border-[#AEB7C2]/15">
                  Services Supported
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {vehicle.serviceTypes.map((st) => (
                    <div
                      key={st}
                      className="bg-[#08111C] p-3.5 rounded-2xl border border-[#C6A15B]/20 text-center"
                    >
                      <div className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider">{st}</div>
                      <div className="text-[10px] text-[#AEB7C2] mt-0.5">Available</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Transparent Pricing Details Panel */}
            <div className="bg-[#08111C] rounded-3xl p-6 border border-[#C6A15B]/40 shadow-2xl space-y-6">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#C6A15B] tracking-widest mb-1">
                  Transparent Tariff
                </div>
                <h3 className="text-xl font-extrabold text-[#F4F1E8]">PRICING DETAILS</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Starting Fare</span>
                  <span className="font-bold text-[#F4F1E8]">
                    {vehicle.pricing.startingFare ? `₹${vehicle.pricing.startingFare}` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Per KM Rate</span>
                  <span className="font-extrabold text-[#C6A15B] text-sm">
                    {vehicle.pricing.perKm ? `₹${vehicle.pricing.perKm} / km` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Minimum Distance</span>
                  <span className="font-bold text-[#F4F1E8]">
                    {vehicle.pricing.minimumKm ? `${vehicle.pricing.minimumKm} km / day` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Minimum Duration</span>
                  <span className="font-bold text-[#F4F1E8]">
                    {vehicle.pricing.minimumDays ? `${vehicle.pricing.minimumDays} day` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Driver Allowance</span>
                  <span className="font-bold text-[#F4F1E8]">
                    {vehicle.pricing.driverAllowance ? `₹${vehicle.pricing.driverAllowance} / day` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Toll Charges</span>
                  <span className="font-semibold text-[#F4F1E8]">{vehicle.pricing.tolls || "Additional"}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#AEB7C2]/15">
                  <span className="text-[#AEB7C2]">Parking Fees</span>
                  <span className="font-semibold text-[#F4F1E8]">{vehicle.pricing.parking || "Additional"}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-[#AEB7C2]">Other Charges</span>
                  <span className="font-semibold text-[#F4F1E8]">{vehicle.pricing.otherCharges || "Available on request"}</span>
                </div>
              </div>

              <div className="p-3 bg-[#132333] rounded-xl text-[11px] text-[#AEB7C2] leading-relaxed border border-[#AEB7C2]/15">
                * Final pricing may vary depending on route, duration, vehicle availability and applicable additional charges.
              </div>

              <Link
                to={`/booking?vehicle=${vehicle.slug}`}
                className="w-full py-3.5 bg-[#C6A15B] text-[#08111C] text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#d4b06a] transition-all shadow-xl text-center block min-h-[48px]"
              >
                REQUEST A QUOTE FOR THIS VEHICLE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── D. EMBEDDED PREFILLED QUOTE FLOW SECTION ── */}
      <section className="py-16 sm:py-20 bg-[#08111C] border-t border-[#AEB7C2]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <BookingForm
            initialVehicleId={vehicle.id}
            title={`Request Quote for ${vehicle.name}`}
            subtitle="Fill in your travel details to receive owner-approved availability and per-km pricing confirmation."
          />
        </div>
      </section>
    </div>
  );
}
