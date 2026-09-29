import { Link } from "react-router";
import { Navigation, Clock, ShieldCheck, ArrowRight, Car } from "lucide-react";
import { CommercialRoute } from "../data/routes";

interface RouteCardProps {
  route: CommercialRoute;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#6F4E37]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold bg-[#6F4E37] text-[#FFFDF7] px-3 py-1 rounded-full uppercase tracking-wider">
            OUTSTATION ROUTE
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#4B3832] bg-[#F5E6CA] px-3 py-1 rounded-full border border-[#DCC7AA]">
            <Clock size={13} className="text-[#6F4E37]" />
            {route.approximateDriveTime}
          </span>
        </div>

        {/* Route Title */}
        <h3 className="text-xl font-bold text-[#4B3832] mb-2 group-hover:text-[#6F4E37] transition-colors">
          {route.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-[#6F4E37] font-bold mb-4">
          <Navigation size={14} className="shrink-0" />
          <span>{route.from} → {route.to} ({route.approximateDistance})</span>
        </div>

        {/* Route Description */}
        <p className="text-[#6F4E37] text-xs line-clamp-3 mb-5 leading-relaxed font-medium">
          {route.routeDescription}
        </p>

        {/* Trip Types Available */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {route.tripTypes.map((type) => (
            <span
              key={type}
              className="text-[11px] font-semibold bg-[#F5E6CA] text-[#4B3832] px-2.5 py-1 rounded-md border border-[#DCC7AA]"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-[#DCC7AA] mt-2 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#6F4E37] font-medium">
          <div className="flex items-center gap-1.5">
            <Car size={14} className="text-[#6F4E37]" />
            <span>Crysta, Urbania, TT</span>
          </div>

          <span className="text-[11px] font-bold text-[#4B3832] bg-[#FFFDF7] px-2.5 py-1 rounded-md border border-[#DCC7AA]">
            Owner-approved fare on enquiry
          </span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Link
            to={`/routes/${route.slug}`}
            className="flex-1 text-center border border-[#6F4E37] text-[#6F4E37] hover:bg-[#F5E6CA] hover:text-[#4B3832] text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <span>VIEW ROUTE</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <Link
            to={`/booking?destination=${encodeURIComponent(route.to)}&pickup=${encodeURIComponent(route.from)}`}
            className="bg-[#6F4E37] hover:bg-[#4B3832] text-[#FFFDF7] text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm shrink-0"
          >
            BOOK CAB
          </Link>
        </div>
      </div>
    </div>
  );
}
