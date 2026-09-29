import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight, Users, Fuel, CheckCircle2 } from "lucide-react";
import { Vehicle } from "../data/vehicles";
import { getResponsiveUnsplashSrcSet, CARD_IMAGE_SIZES } from "../utils/imageHelpers";

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

  const currentImgSrc = vehicle.images[currentImgIndex];
  const srcSet = getResponsiveUnsplashSrcSet(currentImgSrc);

  return (
    <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#6F4E37]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Slideshow Image Header */}
        <div className="relative aspect-[16/10] w-full bg-[#F5E6CA] overflow-hidden">
          <img
            src={currentImgSrc}
            srcSet={srcSet}
            sizes={srcSet ? CARD_IMAGE_SIZES : undefined}
            alt={`${vehicle.name} - Image ${currentImgIndex + 1}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-700"
          />

          {/* Company Badge */}
          <div className="absolute top-4 left-4 bg-[#FFFDF7]/90 backdrop-blur-md text-[#4B3832] text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-[#DCC7AA] uppercase tracking-wider shadow-sm">
            {vehicle.company}
          </div>

          {/* Rate Badge */}
          <div className="absolute top-4 right-4 bg-[#6F4E37] text-[#FFFDF7] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
            ₹{vehicle.pricePerKm}/km
          </div>

          {/* Slideshow Navigation Controls */}
          {vehicle.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFFDF7]/80 hover:bg-[#FFFDF7] text-[#4B3832] flex items-center justify-center backdrop-blur-sm transition-colors border border-[#DCC7AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37]"
                aria-label={`Previous image of ${vehicle.name}`}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFFDF7]/80 hover:bg-[#FFFDF7] text-[#4B3832] flex items-center justify-center backdrop-blur-sm transition-colors border border-[#DCC7AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37]"
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
                    className="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37] rounded-full"
                    aria-label={`Go to ${vehicle.name} slide ${idx + 1}`}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all ${
                        idx === currentImgIndex ? "w-5 bg-[#6F4E37]" : "w-1.5 bg-[#DCC7AA]"
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
            <h3 className="text-xl font-bold text-[#4B3832] group-hover:text-[#6F4E37] transition-colors">
              {vehicle.name}
            </h3>
          </div>

          <p className="text-xs text-[#6F4E37] leading-relaxed mb-5 font-medium">
            {vehicle.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            <div className="bg-[#FFFDF7] rounded-xl p-3 border border-[#DCC7AA] flex items-center gap-2.5">
              <Users size={16} className="text-[#6F4E37] shrink-0" />
              <div>
                <div className="text-[10px] text-[#6F4E37] uppercase tracking-wider font-semibold">Capacity</div>
                <div className="text-xs font-bold text-[#4B3832]">{vehicle.seats} Seater</div>
              </div>
            </div>
            <div className="bg-[#FFFDF7] rounded-xl p-3 border border-[#DCC7AA] flex items-center gap-2.5">
              <Fuel size={16} className="text-[#6F4E37] shrink-0" />
              <div>
                <div className="text-[10px] text-[#6F4E37] uppercase tracking-wider font-semibold">Driver Allowance</div>
                <div className="text-xs font-bold text-[#4B3832]">₹{vehicle.driverAllowance}/day</div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <ul className="space-y-2 mb-6">
            {vehicle.features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-[#6F4E37] font-medium">
                <CheckCircle2 size={13} className="text-[#6F4E37] shrink-0" />
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
          className="flex-1 flex items-center justify-center gap-1.5 w-full py-3 min-h-[44px] bg-transparent border border-[#6F4E37] text-[#6F4E37] hover:bg-[#F5E6CA] hover:text-[#4B3832] text-xs font-bold rounded-xl transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37]"
        >
          VIEW DETAILS →
        </Link>
        <Link
          to={`/booking?vehicle=${vehicle.slug || vehicle.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 w-full py-3 min-h-[44px] bg-[#6F4E37] text-[#FFFDF7] hover:bg-[#4B3832] text-xs font-bold rounded-xl transition-all duration-200 shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37]"
        >
          REQUEST QUOTE →
        </Link>
      </div>
    </div>
  );
}
