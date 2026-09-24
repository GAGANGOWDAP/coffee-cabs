import { Link } from "react-router";
import { MapPin, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Destination } from "../data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white border border-[#DDD5C8] rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#23483A]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header & Image */}
        <div className="relative aspect-[16/10] bg-[#EDE5D8] overflow-hidden">
          <img
            src={destination.heroImage || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&h=500&fit=crop"}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            decoding="async"
          />

          {/* Region Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A3025] text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-[#DDD5C8] uppercase tracking-wider shadow-sm">
            {destination.region}
          </div>

          {/* Distance Badge */}
          <div className="absolute top-4 right-4 bg-[#23483A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            ~{destination.approximateDistanceFromBengaluru} from BLR
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-[#23483A] font-bold mb-2">
            <MapPin size={14} className="shrink-0 text-[#23483A]" />
            <span>{destination.district}, Karnataka</span>
          </div>

          <h3 className="text-xl font-bold text-[#252525] mb-3 group-hover:text-[#4A3025] transition-colors line-clamp-1">
            {destination.name}
          </h3>

          <p className="text-[#6F6A63] text-sm line-clamp-2 mb-4 leading-relaxed font-normal">
            {destination.overview}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-2 py-3 px-3.5 bg-[#F7F3EC] rounded-xl border border-[#DDD5C8] mb-4 text-xs text-[#6F6A63]">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock size={14} className="text-[#23483A] shrink-0" />
              <span className="truncate">{destination.approximateDriveTime}</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar size={14} className="text-[#23483A] shrink-0" />
              <span className="truncate">{destination.bestSeason}</span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {destination.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="text-[11px] font-semibold bg-[#EDE5D8] text-[#4A3025] px-2.5 py-1 rounded-md border border-[#DDD5C8]"
              >
                {cat}
              </span>
            ))}
            {destination.categories.length > 3 && (
              <span className="text-[11px] text-[#6F6A63] py-1 px-1 font-medium">
                +{destination.categories.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-6 pt-0 mt-auto">
        <div className="flex items-center justify-between pt-4 border-t border-[#DDD5C8]">
          <div className="flex items-center gap-1 text-[11px] text-[#6F6A63] font-medium">
            <ShieldCheck size={13} className="text-[#23483A]" />
            <span>Verified Guide</span>
          </div>

          <Link
            to={`/travel/destinations/${destination.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold bg-[#4A3025] text-white hover:bg-[#23483A] px-4 py-2 rounded-xl transition-all shadow-sm group/btn"
          >
            <span>EXPLORE</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
