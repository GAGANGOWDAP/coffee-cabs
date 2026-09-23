import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Users, Fuel, CheckCircle2 } from "lucide-react";
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

  return (
    <div className="bg-white border border-[#DDD5C8] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#23483A]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Slideshow Image Header */}
        <div className="relative aspect-[16/10] bg-[#F7F3EC] overflow-hidden p-3 flex items-center justify-center">
          <img
            src={vehicle.images[currentImgIndex]}
            alt={`${vehicle.name} - Image ${currentImgIndex + 1}`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
          />

          {/* Company Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A3025] text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-[#DDD5C8] uppercase tracking-wider shadow-sm">
            {vehicle.company}
          </div>

          {/* Rate Badge */}
          <div className="absolute top-4 right-4 bg-[#23483A] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            ₹{vehicle.pricePerKm}/km
          </div>

          {/* Slideshow Navigation Controls */}
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#4A3025] flex items-center justify-center backdrop-blur-sm transition-colors border border-[#DDD5C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A]"
                aria-label={`Previous image of ${vehicle.name}`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#4A3025] flex items-center justify-center backdrop-blur-sm transition-colors border border-[#DDD5C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A]"
                aria-label={`Next image of ${vehicle.name}`}
              >
                <ChevronRight size={18} />
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
                    className="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A] rounded-full"
                    aria-label={`Go to ${vehicle.name} slide ${idx + 1}`}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${
                        idx === currentImgIndex ? "w-5 bg-[#23483A]" : "w-1.5 bg-[#DDD5C8]"
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
            <h3 className="text-xl font-bold text-[#4A3025] group-hover:text-[#23483A] transition-colors">
              {vehicle.name}
            </h3>
          </div>

          <p className="text-xs text-[#6F6A63] leading-relaxed mb-5 font-medium">
            {vehicle.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            <div className="bg-[#F7F3EC] rounded-xl p-3 border border-[#DDD5C8] flex items-center gap-2.5">
              <Users size={16} className="text-[#23483A] shrink-0" />
              <div>
                <div className="text-[10px] text-[#6F6A63] uppercase tracking-wider font-semibold">Capacity</div>
                <div className="text-xs font-bold text-[#252525]">{vehicle.seats} Seater</div>
              </div>
            </div>
            <div className="bg-[#F7F3EC] rounded-xl p-3 border border-[#DDD5C8] flex items-center gap-2.5">
              <Fuel size={16} className="text-[#23483A] shrink-0" />
              <div>
                <div className="text-[10px] text-[#6F6A63] uppercase tracking-wider font-semibold">Driver Allowance</div>
                <div className="text-xs font-bold text-[#252525]">₹{vehicle.driverAllowance}/day</div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <ul className="space-y-2 mb-6">
            {vehicle.features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-[#6F6A63] font-medium">
                <CheckCircle2 size={13} className="text-[#23483A] shrink-0" />
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
          className="flex-1 flex items-center justify-center gap-1.5 w-full py-3 min-h-[44px] bg-transparent border border-[#23483A] text-[#23483A] hover:bg-[#23483A] hover:text-white text-xs font-bold rounded-xl transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A]"
        >
          VIEW DETAILS →
        </Link>
        <Link
          to={`/booking?vehicle=${vehicle.slug || vehicle.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 w-full py-3 min-h-[44px] bg-[#4A3025] text-white hover:bg-[#23483A] text-xs font-bold rounded-xl transition-all duration-200 shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23483A]"
        >
          REQUEST QUOTE →
        </Link>
      </div>
    </div>
  );
}
