import { MapPin, Clock, Calendar, Compass } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationQuickFacts({ destination }: { destination: Destination }) {
  const distance = destination.quick_facts?.distance_from_bengaluru || destination.approximateDistanceFromBengaluru;
  const driveTime = destination.quick_facts?.approximate_duration || destination.approximateDriveTime;
  const bestTime = destination.quick_facts?.best_time || destination.bestSeason;
  const idealStay = destination.quick_facts?.ideal_trip_duration || destination.suggestedDuration;

  return (
    <div className="bg-white border border-[#DDD5C8] rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-xs">
      {distance && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <MapPin size={13} className="text-[#23483A]" /> DISTANCE
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#252525]">
            {distance}
          </div>
        </div>
      )}

      {driveTime && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <Clock size={13} className="text-[#23483A]" /> DRIVE TIME
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#252525]">
            {driveTime}
          </div>
        </div>
      )}

      {bestTime && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <Calendar size={13} className="text-[#23483A]" /> BEST TIME
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#252525]">
            {bestTime}
          </div>
        </div>
      )}

      {idealStay && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F6A63] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <Compass size={13} className="text-[#23483A]" /> IDEAL STAY
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#252525]">
            {idealStay}
          </div>
        </div>
      )}
    </div>
  );
}
