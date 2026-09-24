import { Ticket, ShieldAlert, Info } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationPracticalInfo({ destination }: { destination: Destination }) {
  const hasEntry = Boolean(destination.entryInformation || destination.permitInformation);
  const hasSafety = Boolean(destination.safetyNotes);
  const hasTips = Boolean(destination.travel_tips && destination.travel_tips.length > 0);

  if (!hasEntry && !hasSafety && !hasTips) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#4A3025] pb-2 border-b border-[#DDD5C8]">
        Before You Go — Practical Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hasEntry && (
          <div className="bg-white border border-[#DDD5C8] p-5 sm:p-6 rounded-3xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4A3025] uppercase tracking-wider">
              <Ticket size={16} className="text-[#23483A]" />
              Entry & Permit Info
            </div>
            {destination.entryInformation && (
              <p className="text-xs text-[#6F6A63] font-medium leading-relaxed">
                {destination.entryInformation}
              </p>
            )}
            {destination.permitInformation && (
              <p className="text-xs text-[#23483A] font-bold mt-1">
                {destination.permitInformation}
              </p>
            )}
          </div>
        )}

        {hasSafety && (
          <div className="bg-white border border-[#DDD5C8] p-5 sm:p-6 rounded-3xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4A3025] uppercase tracking-wider">
              <ShieldAlert size={16} className="text-[#B86F52]" />
              Safety & Travel Advisory
            </div>
            <p className="text-xs text-[#6F6A63] font-medium leading-relaxed">
              {destination.safetyNotes}
            </p>
          </div>
        )}

        {hasTips && (
          <div className="bg-white border border-[#DDD5C8] p-5 sm:p-6 rounded-3xl shadow-xs space-y-2 md:col-span-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4A3025] uppercase tracking-wider">
              <Info size={16} className="text-[#23483A]" />
              Travel Tips
            </div>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#6F6A63] font-medium">
              {destination.travel_tips?.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-[#F7F3EC] p-2.5 rounded-xl border border-[#DDD5C8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#23483A] shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
