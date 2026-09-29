import { Link } from "react-router";
import { Clock, Navigation, Car, ArrowRight, CheckCircle2 } from "lucide-react";
import { TourPackage } from "../data/packages";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#6F4E37]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold bg-[#6F4E37] text-[#FFFDF7] px-3 py-1 rounded-full uppercase tracking-wider">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#4B3832] bg-[#F5E6CA] px-3 py-1 rounded-full border border-[#DCC7AA]">
            <Clock size={13} className="text-[#6F4E37]" />
            {pkg.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#4B3832] mb-3 group-hover:text-[#6F4E37] transition-colors line-clamp-2">
          {pkg.title}
        </h3>

        {/* Route Preview */}
        <div className="flex items-start gap-2 text-xs text-[#6F4E37] mb-4 bg-[#FFFDF7] p-3 rounded-xl border border-[#DCC7AA] font-medium">
          <Navigation size={15} className="text-[#6F4E37] shrink-0 mt-0.5" />
          <span className="line-clamp-2">{pkg.route}</span>
        </div>

        {/* Highlights bullets */}
        {pkg.dayWiseItinerary[0]?.highlights && (
          <div className="space-y-1.5 mb-5">
            {pkg.dayWiseItinerary[0].highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#6F4E37] font-medium">
                <CheckCircle2 size={13} className="text-[#6F4E37] shrink-0" />
                <span className="truncate">{hl}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-[#DCC7AA] mt-4 space-y-4">
        {/* Vehicles & Fare Status */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#6F4E37] font-medium">
            <Car size={14} className="text-[#6F4E37]" />
            <span>Innova Crysta, Urbania, TT</span>
          </div>

          <span className="text-[11px] font-bold text-[#4B3832] bg-[#F5E6CA] px-2.5 py-1 rounded-md border border-[#DCC7AA]">
            {pkg.pricingStatus === "approved"
              ? pkg.startingFareNote || "Approved Fare"
              : "Fare on enquiry"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            to={`/travel/packages/${pkg.slug}`}
            className="flex-1 text-center border border-[#6F4E37] text-[#6F4E37] hover:bg-[#F5E6CA] hover:text-[#4B3832] text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <span>VIEW ITINERARY</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <Link
            to={`/booking?package=${encodeURIComponent(pkg.title)}`}
            className="bg-[#6F4E37] hover:bg-[#4B3832] text-[#FFFDF7] text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm shrink-0"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
