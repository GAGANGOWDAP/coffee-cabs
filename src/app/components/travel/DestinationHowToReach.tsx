import { Navigation, Bus, Train, Plane } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationHowToReach({ destination }: { destination: Destination }) {
  const byCar = destination.how_to_reach?.by_car || destination.route_info?.road_route || destination.bengaluruRoute;
  const byBus = destination.how_to_reach?.by_bus;
  const byTrain = destination.how_to_reach?.by_train;
  const byAir = destination.how_to_reach?.by_air;

  if (!byCar && !byBus && !byTrain && !byAir) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#4B3832] pb-2 border-b border-[#DCC7AA]">
        How to Reach {destination.name}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {byCar && (
          <div className="bg-[#FFFDF7] border-2 border-[#6F4E37]/30 p-5 sm:p-6 rounded-3xl shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#6F4E37] text-[#FFFDF7] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Navigation size={20} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-[#4B3832]">By Car / Private Cab</h3>
                <span className="bg-[#6F4E37] text-[#FFFDF7] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#6F4E37] font-medium leading-relaxed">
                {byCar}
              </p>
            </div>
          </div>
        )}

        {byBus && (
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-5 rounded-2xl shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#F5E6CA] text-[#6F4E37] border border-[#DCC7AA] flex items-center justify-center shrink-0 mt-0.5">
              <Bus size={18} />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#4B3832]">By KSRTC / Private Bus</h3>
              <p className="text-xs text-[#6F4E37] font-medium leading-relaxed mt-0.5">{byBus}</p>
            </div>
          </div>
        )}

        {byTrain && (
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-5 rounded-2xl shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#F5E6CA] text-[#6F4E37] border border-[#DCC7AA] flex items-center justify-center shrink-0 mt-0.5">
              <Train size={18} />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#4B3832]">By Train</h3>
              <p className="text-xs text-[#6F4E37] font-medium leading-relaxed mt-0.5">{byTrain}</p>
            </div>
          </div>
        )}

        {byAir && (
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-5 rounded-2xl shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-[#F5E6CA] text-[#6F4E37] border border-[#DCC7AA] flex items-center justify-center shrink-0 mt-0.5">
              <Plane size={18} />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#4B3832]">Nearest Airport</h3>
              <p className="text-xs text-[#6F4E37] font-medium leading-relaxed mt-0.5">{byAir}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
