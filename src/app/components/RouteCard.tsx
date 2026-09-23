import { Link } from "react-router";
import { Navigation, Clock, ShieldCheck, ArrowRight, Car } from "lucide-react";
import { CommercialRoute } from "../data/routes";

interface RouteCardProps {
  route: CommercialRoute;
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#23483A]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold bg-[#23483A] text-white px-3 py-1 rounded-full uppercase tracking-wider">
            OUTSTATION ROUTE
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-[#4A3025] bg-[#EDE5D8] px-3 py-1 rounded-full border border-[#DDD5C8]">
            <Clock size={13} className="text-[#23483A]" />
            {route.approximateDriveTime}
          </span>
        </div>

        {/* Route Title */}
        <h3 className="text-xl font-bold text-[#4A3025] mb-2 group-hover:text-[#23483A] transition-colors">
          {route.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-[#23483A] font-bold mb-4">
          <Navigation size={14} className="shrink-0" />
          <span>{route.from} → {route.to} ({route.approximateDistance})</span>
        </div>

        {/* Route Description */}
        <p className="text-[#6F6A63] text-xs line-clamp-3 mb-5 leading-relaxed font-medium">
          {route.routeDescription}
        </p>

        {/* Trip Types Available */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {route.tripTypes.map((type) => (
            <span
              key={type}
              className="text-[11px] font-semibold bg-[#EDE5D8] text-[#4A3025] px-2.5 py-1 rounded-md border border-[#DDD5C8]"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="pt-4 border-t border-[#DDD5C8] mt-2 space-y-4">
        <div className="flex items-center justify-between text-xs text-[#6F6A63] font-medium">
          <div className="flex items-center gap-1.5">
            <Car size={14} className="text-[#23483A]" />
            <span>Crysta, Urbania, TT</span>
          </div>

          <span className="text-[11px] font-bold text-[#4A3025] bg-[#F7F3EC] px-2.5 py-1 rounded-md border border-[#DDD5C8]">
            Owner-approved fare on enquiry
          </span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <Link
            to={`/routes/${route.slug}`}
            className="flex-1 text-center border border-[#23483A] text-[#23483A] hover:bg-[#23483A] hover:text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <span>VIEW ROUTE</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <Link
            to={`/booking?destination=${encodeURIComponent(route.to)}&pickup=${encodeURIComponent(route.from)}`}
            className="bg-[#4A3025] hover:bg-[#23483A] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm shrink-0"
          >
            BOOK CAB
          </Link>
        </div>
      </div>
    </div>
  );
}
