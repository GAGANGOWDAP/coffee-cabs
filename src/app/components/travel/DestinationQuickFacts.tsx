import { MapPin, Clock, Calendar, Compass } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationQuickFacts({ destination }: { destination: Destination }) {
  const distance = destination.quick_facts?.distance_from_bengaluru || destination.approximateDistanceFromBengaluru;
  const driveTime = destination.quick_facts?.approximate_duration || destination.approximateDriveTime;
  const bestTime = destination.quick_facts?.best_time || destination.bestSeason;
  const idealStay = destination.quick_facts?.ideal_trip_duration || destination.suggestedDuration;

  return (
    <div className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-3xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-xs">
      {distance && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F4E37] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <MapPin size={13} className="text-[#6F4E37]" /> DISTANCE
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#4B3832]">
            {distance}
          </div>
        </div>
      )}

      {driveTime && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F4E37] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <Clock size={13} className="text-[#6F4E37]" /> DRIVE TIME
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#4B3832]">
            {driveTime}
          </div>
        </div>
      )}

      {bestTime && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F4E37] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <Calendar size={13} className="text-[#6F4E37]" /> BEST TIME
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#4B3832]">
            {bestTime}
          </div>
        </div>
      )}

      {idealStay && (
        <div className="space-y-1">
          <div className="text-[11px] text-[#6F4E37] uppercase tracking-wider font-extrabold flex items-center gap-1">
            <Compass size={13} className="text-[#6F4E37]" /> IDEAL STAY
          </div>
          <div className="text-base sm:text-lg font-extrabold text-[#4B3832]">
            {idealStay}
          </div>
        </div>
      )}
    </div>
  );
}
