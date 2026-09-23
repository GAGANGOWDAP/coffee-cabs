import { Link } from "react-router";
import { Navigation, Clock, ShieldCheck, ArrowRight, Car } from "lucide-react";
import { CommercialRoute } from "../data/routes";

interface RouteCardProps {
  route: CommercialRoute;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl p-6 shadow-xl hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold bg-[#C6A15B]/15 text-[#C6A15B] px-3 py-1 rounded-full border border-[#C6A15B]/30 uppercase tracking-wider">
            OUTSTATION ROUTE
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#F4F1E8] bg-[#08111C] px-3 py-1 rounded-full border border-[#AEB7C2]/20">
            <Clock size={13} className="text-[#C6A15B]" />
            {route.approximateDriveTime}
          </span>
        </div>

        {/* Route Title */}
        <h3 className="text-xl font-bold text-[#F4F1E8] mb-2 group-hover:text-[#C6A15B] transition-colors">
          {route.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-[#C6A15B] font-semibold mb-4">
          <Navigation size={14} className="shrink-0" />
          <span>{route.from} → {route.to} ({route.approximateDistance})</span>
        </div>

        {/* Route Description */}
        <p className="text-[#AEB7C2] text-xs line-clamp-3 mb-5 leading-relaxed">
          {route.routeDescription}
        </p>

        {/* Trip Types Available */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {route.tripTypes.map((type) => (
            <span
              key={type}
              className="text-[11px] font-medium bg-[#08111C] text-[#AEB7C2] px-2.5 py-1 rounded-md border border-[#AEB7C2]/15"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-[#AEB7C2]/10 mt-2 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#AEB7C2]">
          <div className="flex items-center gap-1.5">
            <Car size={14} className="text-[#C6A15B]" />
            <span>Crysta, Urbania, TT</span>
          </div>

          <span className="text-[11px] font-medium text-[#C6A15B]/90 bg-[#08111C] px-2.5 py-1 rounded-md border border-[#C6A15B]/20">
            Owner-approved fare on enquiry
          </span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Link
            to={`/routes/${route.slug}`}
            className="flex-1 text-center bg-[#08111C] hover:bg-[#08111C]/80 text-[#F4F1E8] text-xs font-bold py-2.5 px-4 rounded-xl border border-[#AEB7C2]/20 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>VIEW ROUTE</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-[#C6A15B]" />
          </Link>

          <Link
            to={`/booking?destination=${encodeURIComponent(route.to)}&pickup=${encodeURIComponent(route.from)}`}
            className="bg-[#C6A15B] hover:bg-[#b08d4b] text-[#08111C] text-xs font-extrabold py-2.5 px-4 rounded-xl transition-all shadow-md shrink-0"
          >
            BOOK CAB
          </Link>
        </div>
      </div>
    </div>
  );
}
