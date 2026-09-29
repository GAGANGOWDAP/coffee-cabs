import { Ticket, ShieldAlert, Info } from "lucide-react";
import { Destination } from "../../data/destinations";

export default function DestinationPracticalInfo({ destination }: { destination: Destination }) {
  const hasEntry = Boolean(destination.entryInformation || destination.permitInformation);
  const hasSafety = Boolean(destination.safetyNotes);
  const hasTips = Boolean(destination.travel_tips && destination.travel_tips.length > 0);

  if (!hasEntry && !hasSafety && !hasTips) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-extrabold text-[#4B3832] pb-2 border-b border-[#DCC7AA]">
        Before You Go — Practical Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hasEntry && (
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-5 sm:p-6 rounded-3xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4B3832] uppercase tracking-wider">
              <Ticket size={16} className="text-[#6F4E37]" />
              Entry & Permit Info
            </div>
            {destination.entryInformation && (
              <p className="text-xs text-[#6F4E37] font-medium leading-relaxed">
                {destination.entryInformation}
              </p>
            )}
            {destination.permitInformation && (
              <p className="text-xs text-[#6F4E37] font-bold mt-1">
                {destination.permitInformation}
              </p>
            )}
          </div>
        )}

        {hasSafety && (
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-5 sm:p-6 rounded-3xl shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4B3832] uppercase tracking-wider">
              <ShieldAlert size={16} className="text-[#6F4E37]" />
              Safety & Travel Advisory
            </div>
            <p className="text-xs text-[#6F4E37] font-medium leading-relaxed">
              {destination.safetyNotes}
            </p>
          </div>
        )}

        {hasTips && (
          <div className="bg-[#FFFDF7] border border-[#DCC7AA] p-5 sm:p-6 rounded-3xl shadow-xs space-y-2 md:col-span-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#4B3832] uppercase tracking-wider">
              <Info size={16} className="text-[#6F4E37]" />
              Travel Tips
            </div>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#6F4E37] font-medium">
              {destination.travel_tips?.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-[#F5E6CA] p-2.5 rounded-xl border border-[#DCC7AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F4E37] shrink-0" />
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
