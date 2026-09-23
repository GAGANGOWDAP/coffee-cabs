import { Link } from "react-router";
import { Clock, Navigation, Car, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { TourPackage } from "../data/packages";

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6 shadow-xl hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold bg-[#C6A15B]/15 text-[#C6A15B] px-3 py-1 rounded-full border border-[#C6A15B]/30 uppercase tracking-wider">
            {pkg.category}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#F4F1E8] bg-[#08111C] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
            <Clock size={13} className="text-[#C6A15B]" />
            {pkg.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#F4F1E8] mb-3 group-hover:text-[#C6A15B] transition-colors line-clamp-2">
          {pkg.title}
        </h3>

        {/* Route Preview */}
        <div className="flex items-start gap-2 text-xs text-[#AEB7C2] mb-4 bg-[#08111C]/60 p-3 rounded-xl border border-[#AEB7C2]/10">
          <Navigation size={15} className="text-[#C6A15B] shrink-0 mt-0.5" />
          <span className="line-clamp-2">{pkg.route}</span>
        </div>

        {/* Highlights bullets */}
        {pkg.dayWiseItinerary[0]?.highlights && (
          <div className="space-y-1.5 mb-5">
            {pkg.dayWiseItinerary[0].highlights.slice(0, 3).map((hl, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#AEB7C2]">
                <CheckCircle2 size={13} className="text-[#C6A15B] shrink-0" />
                <span className="truncate">{hl}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-[#AEB7C2]/10 mt-4 space-y-4">
        {/* Pricing Status Notice */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#AEB7C2]">
            <Car size={14} className="text-[#C6A15B]" />
            <span>Vehicles: Crysta, Urbania, TT</span>
          </div>

          <span className="text-[11px] font-medium text-[#C6A15B]/90 bg-[#08111C] px-2.5 py-1 rounded-md border border-[#C6A15B]/20">
            {pkg.pricingStatus === "approved"
              ? pkg.startingFareNote || "Approved Fare"
              : "Fare on enquiry"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            to={`/travel/packages/${pkg.slug}`}
            className="flex-1 text-center bg-[#08111C] hover:bg-[#08111C]/80 text-[#F4F1E8] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#AEB7C2]/20 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>VIEW ITINERARY</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-[#C6A15B]" />
          </Link>

          <Link
            to={`/booking?package=${encodeURIComponent(pkg.title)}`}
            className="bg-[#C6A15B] hover:bg-[#b08d4b] text-[#08111C] text-xs font-extrabold py-2.5 px-4 rounded-xl transition-all shadow-md shrink-0"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
