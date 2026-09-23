import { Link } from "react-router";
import { Clock, Navigation, Car, ArrowRight, CheckCircle2 } from "lucide-react";
import { TourPackage } from "../data/packages";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#23483A]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold bg-[#23483A] text-white px-3 py-1 rounded-full uppercase tracking-wider">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#4A3025] bg-[#EDE5D8] px-3 py-1 rounded-full border border-[#DDD5C8]">
            <Clock size={13} className="text-[#23483A]" />
            {pkg.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#252525] mb-3 group-hover:text-[#4A3025] transition-colors line-clamp-2">
          {pkg.title}
        </h3>

        {/* Route Preview */}
        <div className="flex items-start gap-2 text-xs text-[#6F6A63] mb-4 bg-[#F7F3EC] p-3 rounded-xl border border-[#DDD5C8] font-medium">
          <Navigation size={15} className="text-[#23483A] shrink-0 mt-0.5" />
          <span className="line-clamp-2">{pkg.route}</span>
        </div>

        {/* Highlights bullets */}
        {pkg.dayWiseItinerary[0]?.highlights && (
          <div className="space-y-1.5 mb-5">
            {pkg.dayWiseItinerary[0].highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#6F6A63] font-medium">
                <CheckCircle2 size={13} className="text-[#23483A] shrink-0" />
                <span className="truncate">{hl}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-[#DDD5C8] mt-4 space-y-4">
        {/* Vehicles & Fare Status */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#6F6A63] font-medium">
            <Car size={14} className="text-[#23483A]" />
            <span>Innova Crysta, Urbania, TT</span>
          </div>

          <span className="text-[11px] font-bold text-[#4A3025] bg-[#F7F3EC] px-2.5 py-1 rounded-md border border-[#DDD5C8]">
            {pkg.pricingStatus === "approved"
              ? pkg.startingFareNote || "Approved Fare"
              : "Fare on enquiry"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            to={`/travel/packages/${pkg.slug}`}
            className="flex-1 text-center border border-[#23483A] text-[#23483A] hover:bg-[#23483A] hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <span>VIEW ITINERARY</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <Link
            to={`/booking?package=${encodeURIComponent(pkg.title)}`}
            className="bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm shrink-0"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
