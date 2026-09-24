import { CheckCircle2 } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationThingsToDo({ destination }: { destination: Destination }) {
  const activities = destination.thingsToDo;

  if (!activities || activities.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#4A3025] pb-2 border-b border-[#DDD5C8]">
        Recommended Activities & Experiences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {activities.map((thing, i) => (
          <div
            key={i}
            className="bg-white border border-[#DDD5C8] p-4 rounded-2xl flex items-center gap-3 shadow-xs hover:border-[#23483A]/40 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-[#EDE5D8] border border-[#DDD5C8] flex items-center justify-center text-[#23483A] font-extrabold shrink-0">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#252525] leading-tight">{thing}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
