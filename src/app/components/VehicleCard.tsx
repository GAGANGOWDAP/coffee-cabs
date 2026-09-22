import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Users, Fuel, CheckCircle2, ArrowRight } from "lucide-react";
import { Vehicle } from "../data/vehicles";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? vehicle.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === vehicle.images.length - 1 ? 0 : prev + 1));
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Coffee Cabs! I would like to inquire about booking the ${vehicle.name} (₹${vehicle.pricePerKm}/km). Please share availability.`
  );

  return (
    <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl overflow-hidden shadow-xl hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Slideshow Image Header */}
        <div className="relative aspect-[16/10] bg-[#08111C] overflow-hidden">
          <img
            src={vehicle.images[currentImgIndex]}
            alt={`${vehicle.name} - Image ${currentImgIndex + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />

          {/* Company Badge */}
          <div className="absolute top-4 left-4 bg-[#08111C]/80 backdrop-blur-md text-[#F4F1E8] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#C6A15B]/30 uppercase tracking-widest">
            {vehicle.company}
          </div>

          {/* Rate Badge */}
          <div className="absolute top-4 right-4 bg-[#C6A15B] text-[#08111C] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg">
            ₹{vehicle.pricePerKm}/km
          </div>

          {/* Slideshow Navigation Controls */}
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#08111C]/80 hover:bg-[#08111C] text-[#F4F1E8] flex items-center justify-center backdrop-blur-sm transition-colors border border-[#AEB7C2]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
                aria-label={`Previous image of ${vehicle.name}`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#08111C]/80 hover:bg-[#08111C] text-[#F4F1E8] flex items-center justify-center backdrop-blur-sm transition-colors border border-[#AEB7C2]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
                aria-label={`Next image of ${vehicle.name}`}
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {vehicle.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImgIndex(idx);
                    }}
                    className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-full"
                    aria-label={`Go to ${vehicle.name} slide ${idx + 1}`}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${
                        idx === currentImgIndex ? "w-6 bg-[#C6A15B]" : "w-1.5 bg-[#AEB7C2]/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-[#F4F1E8] group-hover:text-[#C6A15B] transition-colors">
              {vehicle.name}
            </h3>
          </div>

          <p className="text-xs text-[#AEB7C2] leading-relaxed mb-5">
            {vehicle.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            <div className="bg-[#08111C]/60 rounded-xl p-3 border border-[#AEB7C2]/15 flex items-center gap-2.5">
              <Users size={16} className="text-[#C6A15B] shrink-0" />
              <div>
                <div className="text-[10px] text-[#AEB7C2] uppercase tracking-wider font-semibold">Capacity</div>
                <div className="text-xs font-bold text-[#F4F1E8]">{vehicle.seats} Seater</div>
              </div>
            </div>
            <div className="bg-[#08111C]/60 rounded-xl p-3 border border-[#AEB7C2]/15 flex items-center gap-2.5">
              <Fuel size={16} className="text-[#C6A15B] shrink-0" />
              <div>
                <div className="text-[10px] text-[#AEB7C2] uppercase tracking-wider font-semibold">Driver Allowance</div>
                <div className="text-xs font-bold text-[#F4F1E8]">₹{vehicle.driverAllowance}/day</div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <ul className="space-y-2 mb-6">
            {vehicle.features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-[#AEB7C2]">
                <CheckCircle2 size={13} className="text-[#C6A15B] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-0 flex flex-col sm:flex-row items-center gap-2.5">
        <Link
          to={`/fleet/${vehicle.slug || vehicle.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 w-full py-3 min-h-[44px] bg-transparent border border-[#F4F1E8]/40 text-[#F4F1E8] hover:border-[#C6A15B] hover:text-[#C6A15B] text-xs font-bold rounded-xl transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
        >
          VIEW DETAILS →
        </Link>
        <Link
          to={`/booking?vehicle=${vehicle.slug || vehicle.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 w-full py-3 min-h-[44px] bg-[#C6A15B] text-[#08111C] hover:bg-[#d4b06a] text-xs font-extrabold rounded-xl transition-all duration-200 shadow-md text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
        >
          REQUEST QUOTE →
        </Link>
      </div>
    </div>
  );
}

