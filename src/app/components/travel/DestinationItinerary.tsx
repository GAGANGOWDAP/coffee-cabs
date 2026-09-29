import { Clock, Calendar } from "lucide-react";
import { Destination, ItineraryItem } from "../../data/destinations";

export default function DestinationItinerary({ destination }: { destination: Destination }) {
  const has1Day = Boolean(destination.itinerary_1_day || destination.oneDayItinerary);
  const has2Day = Boolean(destination.itinerary_2_day || destination.twoDayItinerary);

  if (!has1Day && !has2Day) return null;

  const renderTimeline = (items: ItineraryItem[] | string) => {
    if (typeof items === "string") {
      return (
        <p className="text-xs sm:text-sm text-[#6F4E37] font-medium leading-relaxed">
          {items}
        </p>
      );
    }

    return (
      <div className="space-y-4 relative pl-4 border-l-2 border-[#DCC7AA] ml-2 my-2">
        {items.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#6F4E37] border-2 border-[#FFFDF7] ring-2 ring-[#F5E6CA]" />

            <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-4 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-extrabold text-[#4B3832] uppercase tracking-wider">
                  {item.day ? `DAY ${item.day}` : item.time || `STEP ${idx + 1}`}
                </span>
                {item.time && (
                  <span className="text-[10px] font-bold text-[#6F4E37] bg-[#F5E6CA] px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock size={11} /> {item.time}
                  </span>
                )}
              </div>
              <h4 className="text-sm font-extrabold text-[#4B3832]">{item.title}</h4>
              {item.description && (
                <p className="text-xs text-[#6F4E37] font-medium mt-1 leading-relaxed">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-[#4B3832] pb-2 border-b border-[#DCC7AA]">
        Suggested Itineraries
      </h2>

      {has1Day && (
        <div className="bg-[#F5E6CA] border border-[#DCC7AA] p-5 sm:p-6 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#4B3832]">
            <Calendar size={16} className="text-[#6F4E37]" />
            <span>1-Day Express Itinerary</span>
          </div>
          {renderTimeline(destination.itinerary_1_day || destination.oneDayItinerary!)}
        </div>
      )}

      {has2Day && (
        <div className="bg-[#F5E6CA] border border-[#DCC7AA] p-5 sm:p-6 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-sm font-extrabold text-[#4B3832]">
            <Calendar size={16} className="text-[#6F4E37]" />
            <span>2-Day Weekend Itinerary</span>
          </div>
          {renderTimeline(destination.itinerary_2_day || destination.twoDayItinerary!)}
        </div>
      )}
    </div>
  );
}
