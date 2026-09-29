import { Clock, Ticket } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationAttractions({ destination }: { destination: Destination }) {
  const hasStructured = destination.attractions && destination.attractions.length > 0;
  const hasLegacy = destination.majorAttractions && destination.majorAttractions.length > 0;

  if (!hasStructured && !hasLegacy) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#4B3832] pb-2 border-b border-[#DCC7AA]">
        Top Attractions in {destination.name}
      </h2>

      {hasStructured ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.attractions?.map((item, i) => (
            <div
              key={i}
              className="bg-[#FFFDF7] border border-[#DCC7AA] rounded-2xl p-5 shadow-xs space-y-2 hover:border-[#6F4E37]/40 transition-colors"
            >
              {item.image && (
                <div className="w-full h-40 rounded-xl overflow-hidden bg-[#FFFDF7] mb-3">
                  <img
                    src={item.image}
                    alt={item.image_alt || item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {item.caption && (
                    <span className="text-[10px] text-[#6F4E37] p-1.5 block italic">{item.caption}</span>
                  )}
                </div>
              )}

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-[#F5E6CA] border border-[#DCC7AA] flex items-center justify-center text-[#6F4E37] font-extrabold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-[#4B3832]">{item.name}</h3>
                  {item.description && (
                    <p className="text-xs text-[#6F4E37] mt-1 font-medium leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>

              {(item.recommended_duration || item.entry_info) && (
                <div className="pt-2 border-t border-[#DCC7AA] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#6F4E37] font-semibold">
                  {item.recommended_duration && (
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-[#6F4E37]" /> Duration: {item.recommended_duration}
                    </span>
                  )}
                  {item.entry_info && (
                    <span className="flex items-center gap-1">
                      <Ticket size={12} className="text-[#6F4E37]" /> Entry: {item.entry_info}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {destination.majorAttractions.map((attraction, i) => (
            <div
              key={i}
              className="bg-[#FFFDF7] border border-[#DCC7AA] p-4 rounded-2xl flex items-center gap-3 hover:border-[#6F4E37]/40 transition-colors shadow-xs"
            >
              <div className="w-8 h-8 rounded-xl bg-[#F5E6CA] border border-[#DCC7AA] flex items-center justify-center text-[#6F4E37] font-extrabold text-xs shrink-0">
                {i + 1}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#4B3832]">{attraction}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
