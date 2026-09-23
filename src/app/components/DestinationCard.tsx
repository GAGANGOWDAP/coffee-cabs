import { Link } from "react-router";
import { MapPin, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Destination } from "../data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-[#132333] border border-[#AEB7C2]/15 rounded-3xl overflow-hidden shadow-xl hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Card Header & Image */}
        <div className="relative aspect-[16/10] bg-[#08111C] overflow-hidden">
          <img
            src={destination.heroImage || "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&h=500&fit=crop"}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            loading="lazy"
          />

          {/* District / Region Badge */}
          <div className="absolute top-4 left-4 bg-[#08111C]/80 backdrop-blur-md text-[#F4F1E8] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#C6A15B]/30 uppercase tracking-widest">
            {destination.region}
          </div>

          {/* Distance Badge */}
          <div className="absolute top-4 right-4 bg-[#C6A15B] text-[#08111C] text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg">
            ~{destination.approximateDistanceFromBengaluru} from BLR
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-[#C6A15B] font-semibold mb-2">
            <MapPin size={14} className="shrink-0" />
            <span>{destination.district}, Karnataka</span>
          </div>

          <h3 className="text-xl font-bold text-[#F4F1E8] mb-3 group-hover:text-[#C6A15B] transition-colors line-clamp-1">
            {destination.name}
          </h3>

          <p className="text-[#AEB7C2] text-sm line-clamp-2 mb-4 leading-relaxed">
            {destination.overview}
          </p>

          {/* Quick Snapshot Specs */}
          <div className="grid grid-cols-2 gap-2 py-3 px-3.5 bg-[#08111C]/60 rounded-xl border border-[#AEB7C2]/10 mb-4 text-xs text-[#AEB7C2]">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#C6A15B] shrink-0" />
              <span className="truncate">{destination.approximateDriveTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#C6A15B] shrink-0" />
              <span className="truncate">{destination.bestSeason}</span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {destination.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="text-[11px] font-medium bg-[#08111C] text-[#AEB7C2] px-2.5 py-1 rounded-md border border-[#AEB7C2]/15"
              >
                {cat}
              </span>
            ))}
            {destination.categories.length > 3 && (
              <span className="text-[11px] text-[#AEB7C2]/70 py-1 px-1">
                +{destination.categories.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-6 pt-0 mt-auto">
        <div className="flex items-center justify-between pt-4 border-t border-[#AEB7C2]/10">
          <div className="flex items-center gap-1 text-[11px] text-[#AEB7C2]/70">
            <ShieldCheck size={13} className="text-[#C6A15B]" />
            <span>Verified: {destination.lastVerified}</span>
          </div>

          <Link
            to={`/travel/destinations/${destination.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C6A15B] hover:text-[#F4F1E8] group/btn transition-colors"
          >
            <span>EXPLORE</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
