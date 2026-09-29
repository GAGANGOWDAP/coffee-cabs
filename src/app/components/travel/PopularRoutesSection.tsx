import { Link } from "react-router";
import { ArrowRight, MapPin, Clock, Navigation, Compass, ShieldCheck } from "lucide-react";
import { ROUTES } from "../../data/routes";

interface PopularRoutesSectionProps {
  limit?: number;
  className?: string;
}

export default function PopularRoutesSection({ limit = 6, className = "" }: PopularRoutesSectionProps) {
  const displayRoutes = ROUTES.slice(0, limit);

  return (
    <section className={`py-12 sm:py-16 bg-[#F7F3EC] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#23483A] uppercase tracking-widest mb-1">
              <Navigation size={14} />
              <span>POPULAR OUTSTATION ROUTES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#4A3025]">
              Top Chauffeur Routes from Bengaluru
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6A63] mt-1 max-w-2xl font-medium">
              Verified highway routes, approximate driving times, and door-to-door outstation cab options across Karnataka.
            </p>
          </div>

          <Link
            to="/routes"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4A3025] hover:text-[#23483A] transition-colors focus-visible:outline-2 focus-visible:outline-[#23483A] rounded shrink-0"
          >
            <span>View All Routes ({ROUTES.length})</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayRoutes.map((route) => (
            <div
              key={route.id}
              className="bg-white border border-[#DDD5C8] rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#23483A]/40 transition-all duration-300 flex flex-col justify-between group w-full max-w-full min-w-0 box-sizing-border-box"
            >
              <div>
                {/* Route Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#EDE5D8] text-[#23483A] border border-[#DDD5C8]">
                    {route.highwayDetails.split(" ")[0] || "NH Corridor"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#23483A]">
                    <Clock size={13} />
                    <span>{route.approximateDriveTime}</span>
                  </div>
                </div>

                {/* Route Headline */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#252525] group-hover:text-[#4A3025] transition-colors mb-2">
                  {route.from} → {route.to}
                </h3>

                {/* Distance Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#6F6A63] mb-3">
                  <MapPin size={14} className="text-[#4A3025]" />
                  <span>Approx. {route.approximateDistance} direct highway distance</span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6F6A63] leading-relaxed line-clamp-3 mb-4">
                  {route.routeDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#DDD5C8] flex items-center justify-between gap-2">
                <Link
                  to={`/routes/${route.slug}`}
                  className="text-xs font-bold text-[#23483A] hover:text-[#4A3025] transition-colors inline-flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[#23483A] rounded"
                >
                  <span>Explore Route</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to={`/booking?route=${route.slug}&destination=${encodeURIComponent(route.to)}`}
                  className="px-3.5 py-2 bg-[#4A3025] text-white text-xs font-bold rounded-xl hover:bg-[#23483A] transition-all focus-visible:outline-2 focus-visible:outline-[#23483A]"
                >
                  Book Cab
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
