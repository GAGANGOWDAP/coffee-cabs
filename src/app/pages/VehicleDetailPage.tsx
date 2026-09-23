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
import SEO from "../components/SEO";

export default function VehicleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const vehicle = VEHICLES.find(
    (v) => v.slug === slug || v.id === slug
  );

  if (!vehicle) {
    return (
      <div className="pt-28 pb-20 bg-[#F7F3EC] text-[#252525] min-h-screen text-center px-4">
        <SEO
          title="Vehicle Not Found | Coffee Cabs"
          description="The requested vehicle could not be found."
          canonicalUrl="https://gagangowdap.github.io/coffee-cabs/fleet"
        />
        <div className="max-w-md mx-auto py-16 bg-[#FFFFFF] rounded-3xl border border-[#DDD5C8] p-8 shadow-sm">
          <HelpCircle size={48} className="mx-auto text-[#23483A] mb-4" />
          <h1 className="text-2xl font-bold mb-2 text-[#4A3025]">Vehicle Not Found</h1>
          <p className="text-xs text-[#6F6A63] mb-6">
            The requested vehicle page could not be located in our fleet catalog.
          </p>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A3025] text-white font-extrabold text-xs rounded-full hover:bg-[#23483A]"
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
    <div className="pt-20 bg-[#F7F3EC] text-[#252525] min-h-screen">
      <SEO
        title={`${vehicle.name} (${vehicle.seatingCapacity}) Rental & Outstation Cabs`}
        description={`Rent ${vehicle.name}. Seating capacity: ${vehicle.seatingCapacity}. Luggage: ${vehicle.luggageCapacity}. Outstation rate: ${vehicle.perKmRate}. Professional chauffeurs with Coffee Cabs.`}
        canonicalUrl={`https://gagangowdap.github.io/coffee-cabs/fleet/${vehicle.slug}`}
        ogImage={vehicle.image}
      />
      {/* ── A. BREADCRUMB HEADER ── */}
      <section className="bg-[#EDE5D8] py-4 border-b border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#6F6A63]">
            <Link to="/" className="hover:text-[#23483A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/fleet" className="hover:text-[#23483A] transition-colors">
              Fleet
            </Link>
            <span>/</span>
            <span className="text-[#252525] font-bold">{vehicle.name}</span>
          </div>

          <Link
            to="/fleet"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#23483A] hover:underline"
          >
            <ArrowLeft size={13} /> BACK TO FLEET
          </Link>
        </div>
      </section>

      {/* ── B. MAIN VEHICLE HERO & GALLERY ── */}
      <section className="py-12 sm:py-16 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Image Gallery */}
            <div>
              <div className="relative aspect-[16/10] bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#DDD5C8] shadow-md">
                <img
                  src={vehicle.images[currentImgIndex] || vehicle.image}
                  alt={`${vehicle.name} premium photo`}
                  className="w-full h-full object-cover"
                />

                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#252525] flex items-center justify-center border border-[#DDD5C8] shadow-md"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#252525] flex items-center justify-center border border-[#DDD5C8] shadow-md"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute top-4 left-4 bg-[#23483A] text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-full border border-[#23483A] uppercase tracking-widest shadow-sm">
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
                          ? "border-[#23483A] scale-[1.03]"
                          : "border-[#DDD5C8] opacity-60 hover:opacity-100"
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
              <div className="inline-block text-[11px] uppercase tracking-widest text-[#23483A] font-extrabold mb-3 bg-[#FFFFFF] border border-[#DDD5C8] px-3.5 py-1 rounded-full">
                {vehicle.category}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4A3025] mb-3 leading-tight">
                {vehicle.name}
              </h1>

              <p className="text-sm text-[#6F6A63] leading-relaxed mb-6">
                {vehicle.shortDescription || vehicle.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#DDD5C8] flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                    <Users size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6F6A63] uppercase font-semibold tracking-wider">Seating</div>
                    <div className="text-xs font-extrabold text-[#252525]">{vehicle.seatingCapacity}</div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#DDD5C8] flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                    <Luggage size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6F6A63] uppercase font-semibold tracking-wider">Luggage</div>
                    <div className="text-xs font-extrabold text-[#252525]">{vehicle.luggageCapacity}</div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#DDD5C8] flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                    <Wind size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6F6A63] uppercase font-semibold tracking-wider">Air Conditioned</div>
                    <div className="text-xs font-extrabold text-[#252525]">{typeof vehicle.acAvailable === 'string' ? vehicle.acAvailable : 'Yes (Climate Control)'}</div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#DDD5C8] flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F3EC] text-[#23483A] flex items-center justify-center shrink-0 border border-[#DDD5C8]">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6F6A63] uppercase font-semibold tracking-wider">Per KM Rate</div>
                    <div className="text-xs font-extrabold text-[#23483A]">
                      {vehicle.pricePerKm ? `₹${vehicle.pricePerKm} / km` : "Available on request"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  to={`/booking?vehicle=${vehicle.slug}`}
                  className="w-full sm:w-auto flex-1 py-4 bg-[#4A3025] text-white text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#23483A] transition-all shadow-md text-center flex items-center justify-center gap-2 min-h-[48px]"
                >
                  REQUEST A QUOTE <ArrowRight size={15} />
                </Link>
                <a
                  href={`https://wa.me/917676726209?text=${encodeURIComponent(
                    `Hi Coffee Cabs! I want to inquire about booking the ${vehicle.name}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 bg-[#23483A] text-white text-xs font-extrabold uppercase tracking-wider rounded-full hover:bg-[#4A3025] transition-all shadow-sm text-center flex items-center justify-center gap-2 min-h-[48px]"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── C. DETAILED SPECIFICATIONS & PRICING PANEL ── */}
      <section className="py-12 sm:py-16 bg-[#EDE5D8] border-t border-[#DDD5C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left 2 Cols: Details & Use Cases */}
            <div className="lg:col-span-2 space-y-10">
              {/* About vehicle */}
              <div>
                <h2 className="text-xl font-bold text-[#4A3025] mb-3 pb-2 border-b border-[#DDD5C8]">
                  About This Vehicle
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6A63] leading-relaxed mb-6">
                  {vehicle.description}
                </p>

                <h3 className="text-sm font-bold uppercase tracking-wider text-[#23483A] mb-3">
                  Key Comfort & Convenience Features:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {vehicle.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-[#252525] bg-[#FFFFFF] p-3 rounded-xl border border-[#DDD5C8] shadow-sm">
                      <CheckCircle2 size={14} className="text-[#23483A] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <h2 className="text-xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8] flex items-center gap-2">
                  <Tag size={18} className="text-[#23483A]" /> Ideal Use Cases
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {vehicle.idealFor.map((useCase) => (
                    <span
                      key={useCase}
                      className="px-4 py-2 bg-[#FFFFFF] border border-[#DDD5C8] text-[#252525] text-xs font-semibold rounded-full shadow-sm"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services Supported */}
              <div>
                <h2 className="text-xl font-bold text-[#4A3025] mb-4 pb-2 border-b border-[#DDD5C8]">
                  Services Supported
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {vehicle.serviceTypes.map((st) => (
                    <div
                      key={st}
                      className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#DDD5C8] text-center shadow-sm"
                    >
                      <div className="text-xs font-bold text-[#23483A] uppercase tracking-wider">{st}</div>
                      <div className="text-[10px] text-[#6F6A63] mt-0.5">Available</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Transparent Pricing Details Panel */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 border border-[#DDD5C8] shadow-md space-y-6">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#23483A] tracking-widest mb-1">
                  Transparent Tariff
                </div>
                <h3 className="text-xl font-extrabold text-[#4A3025]">PRICING DETAILS</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Starting Fare</span>
                  <span className="font-bold text-[#252525]">
                    {vehicle.pricing.startingFare ? `₹${vehicle.pricing.startingFare}` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Per KM Rate</span>
                  <span className="font-extrabold text-[#23483A] text-sm">
                    {vehicle.pricing.perKm ? `₹${vehicle.pricing.perKm} / km` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Minimum Distance</span>
                  <span className="font-bold text-[#252525]">
                    {vehicle.pricing.minimumKm ? `${vehicle.pricing.minimumKm} km / day` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Minimum Duration</span>
                  <span className="font-bold text-[#252525]">
                    {vehicle.pricing.minimumDays ? `${vehicle.pricing.minimumDays} day` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Driver Allowance</span>
                  <span className="font-bold text-[#252525]">
                    {vehicle.pricing.driverAllowance ? `₹${vehicle.pricing.driverAllowance} / day` : "Available on request"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Toll Charges</span>
                  <span className="font-semibold text-[#252525]">{vehicle.pricing.tolls || "Additional"}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-[#DDD5C8]">
                  <span className="text-[#6F6A63]">Parking Fees</span>
                  <span className="font-semibold text-[#252525]">{vehicle.pricing.parking || "Additional"}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-[#6F6A63]">Other Charges</span>
                  <span className="font-semibold text-[#252525]">{vehicle.pricing.otherCharges || "Available on request"}</span>
                </div>
              </div>

              <div className="p-3 bg-[#F7F3EC] rounded-xl text-[11px] text-[#6F6A63] leading-relaxed border border-[#DDD5C8]">
                * Final pricing may vary depending on route, duration, vehicle availability and applicable additional charges.
              </div>

              <Link
                to={`/booking?vehicle=${vehicle.slug}`}
                className="w-full py-3.5 bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-extrabold uppercase tracking-wider rounded-full transition-all shadow-md text-center block min-h-[48px]"
              >
                REQUEST A QUOTE FOR THIS VEHICLE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── D. EMBEDDED PREFILLED QUOTE FLOW SECTION ── */}
      <section className="py-16 sm:py-20 bg-[#F7F3EC] border-t border-[#DDD5C8]">
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
